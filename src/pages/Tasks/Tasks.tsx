/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, Icon, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddTask } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

import { useBoolean } from '@/hooks/useBoolean';
import { Modal } from '@/components/Modal';

import { useTasks } from './useTasks';

interface CreateTaskForm {
  title: string;
  description: string;
}

export function TasksPage() {
  const { tableData } = useTasks();
  const { value: isOpen, handleTrue: handleOpen, handleFalse: handleClose } = useBoolean(false);
  const { register, handleSubmit } = useForm<CreateTaskForm>();

  const onSubmit = (data: CreateTaskForm) => {
    console.log(data);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          Tasks list
        </Typography>

        <Button
          onClick={handleOpen}
          size="large"
          sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          variant="contained"
          color="success">
          <Icon component={AddTask} />
          <Typography>Add task</Typography>
        </Button>
      </Box>

      <Box>
        <DataGrid
          columns={tableData.columns}
          rows={tableData.rows}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableColumnMenu
          hideFooterSelectedRowCount
        />
      </Box>

      <Modal title="Add Task" isOpen={isOpen} handleClose={handleClose}>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField label="Title" variant="outlined" {...register('title')} />
          <TextField label="Description" variant="outlined" {...register('description')} />

          <Button type="submit" size="large" variant="contained" color="primary">
            Create
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
