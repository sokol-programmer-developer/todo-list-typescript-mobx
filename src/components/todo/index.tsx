import { Container, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';

import Buttons from '../buttons';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import HeaderTodo from '../headerTodo';
import ListTasks from '../listTasks';
import { observer } from 'mobx-react-lite';
import taskStore from '../../store/taskStore';
import { toJS } from 'mobx';

const Todo: React.FC = observer(() => {
  const allTasks = toJS(taskStore.tasks);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }, [allTasks]);

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      console.log(localStorage.getItem('tasks'));
      taskStore.setTasks(JSON.parse(localStorage.getItem('tasks') as string));
    }
  }, []);

  return (
    <Grid
      justifyContent='center'
      alignItems='center'
      style={{ minHeight: '100vh', padding: '0 15px' }}
      container>
      <CssBaseline />
      <Container
        maxWidth='md'
        style={{
          boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.6)',
          minHeight: '600px',
          borderRadius: '5px',
          backgroundColor: '#F8F8F8',
        }}>
        <HeaderTodo />
        {!allTasks.length ? (
          <Typography variant='h6' style={{ textAlign: 'center', marginTop: '20px' }}>
            You have no tasks!
          </Typography>
        ) : (
          <ListTasks />
        )}
        {allTasks.length > 0 && <Buttons />}
      </Container>
    </Grid>
  );
});

export default Todo;
