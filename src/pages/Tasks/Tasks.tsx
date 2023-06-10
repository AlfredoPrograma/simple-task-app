/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, Icon, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddTask } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';

import { useBoolean } from '@/hooks/useBoolean';
import { Modal } from '@/components/Modal';

import { useTasks } from './useTasks';

interface CreateTaskForm {
  title: string;
  description: string;
}

export function TasksPage() {
  const { tableData, createTask, getAllTask } = useTasks();
  const { value: isOpen, handleTrue: handleOpen, handleFalse: handleClose } = useBoolean(false);
  const { register, handleSubmit, reset } = useForm<CreateTaskForm>();

  const handleCloseModalForm = () => {
    handleClose();
    reset();
  };

  const onSubmit = async (data: CreateTaskForm) => {
    await createTask.mutation({
      variables: data
    });

    handleCloseModalForm();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* TODO: Move control panel to its own component */}
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

      {/* TODO: Move modal to its own component */}
      <Modal title="Add Task" isOpen={isOpen} handleClose={handleCloseModalForm}>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField label="Title" variant="outlined" {...register('title')} />
          <TextField label="Description" variant="outlined" {...register('description')} />

          <LoadingButton
            type="submit"
            variant="contained"
            loading={createTask.loading || getAllTask.loading}
            size="large">
            Create
          </LoadingButton>
        </Box>
      </Modal>
    </Box>
  );
}
