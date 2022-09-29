import { Grid } from '@material-ui/core';
import React from 'react';
import Task from '../task';
import { observer } from 'mobx-react-lite';
import taskStore from '../../store/taskStore';
import { toJS } from 'mobx';

const ListTasks: React.FC = observer(() => {
  const allTasks = toJS(taskStore.tasks);
  const isAll = taskStore.isAllTasks;
  const tasksToIterate = isAll ? allTasks : allTasks.filter((el) => el.completed);

  const mappedTasks = tasksToIterate.map((task) => <Task key={task.id} task={task} />);
  return (
    <Grid
      container
      wrap='nowrap'
      direction='column'
      style={{ marginTop: '20px', overflowY: 'auto', height: '420px' }}>
      {mappedTasks}
    </Grid>
  );
});

export default ListTasks;
