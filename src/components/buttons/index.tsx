import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormControlLabel } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import React from 'react';
import { observer } from 'mobx-react-lite';
import taskStore from '../../store/taskStore';

const Buttons: React.FC = observer(() => {
  const allItems = taskStore.tasks;
  const isAll = taskStore.isAllTasks;
  return (
    <Grid container wrap='nowrap' justifyContent='space-between' style={{ padding: '20px 0' }}>
      <Button
        style={{ fontSize: '12px', width: '120px' }}
        startIcon={<DeleteIcon />}
        variant='contained'
        color='primary'
        disabled={!allItems.length}
        onClick={() => taskStore.deleteAll()}>
        CLear all
      </Button>
      <Box>
        <FormControlLabel
          label='All'
          control={<Radio checked={isAll} onChange={() => taskStore.allTasksTrue()} />}
        />
        <FormControlLabel
          label='Done'
          control={<Radio checked={!isAll} onChange={() => taskStore.allTasksFalse()} />}
        />
      </Box>
    </Grid>
  );
});

export default Buttons;
