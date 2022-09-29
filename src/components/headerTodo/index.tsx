import { Box, Grid, Input, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react-lite';
import taskStore from '../../store/taskStore';
import { toJS } from 'mobx';
import useWindowSize from '../../helpers/hooks/useWindowSize';

const HeaderTodo: React.FC = observer(() => {
  const [text, setText] = useState<string>('');
  const allTasks = toJS(taskStore.tasks);
  const { innerWidth } = useWindowSize();

  console.log(allTasks);

  const addTask = () => {
    taskStore.addTask(text);
    setText('');
  };

  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems={`${innerWidth > 550 ? 'center' : 'flex-start'}`}
      wrap='nowrap'
      style={{ borderBottom: '1px solid #e3e3e3', padding: '20px' }}>
      <Grid item>
        <Typography variant='h4'>Todo</Typography>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <Grid
          container
          wrap='nowrap'
          alignItems='flex-end'
          justifyContent='flex-end'
          direction={`${innerWidth > 550 ? 'row' : 'column-reverse'}`}>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              maxWidth: '350px',
              width: '100%',
              marginRight: '35px',
              marginLeft: '35px',
              marginTop: innerWidth > 550 ? '0px' : '15px',
            }}
            placeholder='Add...'
          />
          <Box width='120px'>
            <Button
              style={{ fontSize: '12px', width: '120px' }}
              startIcon={<AddIcon />}
              variant='contained'
              color='primary'
              disabled={!text}
              onClick={addTask}>
              Add Item
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
});

export default HeaderTodo;
