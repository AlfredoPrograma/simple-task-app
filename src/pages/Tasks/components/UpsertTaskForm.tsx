/* eslint-disable @typescript-eslint/no-misused-promises */
import { type MutationTuple } from '@apollo/client';
import { Box, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';

import { Modal } from '@/components';
import { UpsertTaskForm, CreateTaskResponse, Task, UpdateTaskResponse, CreateTaskPayload, UpdateTaskPayload } from '@/interfaces';

interface UpsertTaskModalProps {
  open: boolean;
  closeModal: () => void;
  createTaskMutation: MutationTuple<CreateTaskResponse, CreateTaskPayload>[0];
  updateTaskMutation: MutationTuple<UpdateTaskResponse, UpdateTaskPayload>[0];
  isSubmitting: boolean;
  task: Task | null
}

export function UpsertTaskModal({
  open,
  createTaskMutation,
  updateTaskMutation,
  closeModal,
  isSubmitting,
  task
}: UpsertTaskModalProps) {
  const { register, handleSubmit, reset } = useForm<UpsertTaskForm>();

  const isEdit = !!task;

  const handleCloseModalForm = () => {
    closeModal();
    reset();
  };

  const handleSubmitUpsert = async (data: UpsertTaskForm) => {

    if (isEdit) {
      await updateTaskMutation({ variables: { ...data, id: task?.id } });
    } else {
      await createTaskMutation({ variables: data });

    }
    handleCloseModalForm();
  };

  return (
    <Modal title="Add Task" open={open} onClose={handleCloseModalForm}>
      <Box
        onSubmit={handleSubmit(handleSubmitUpsert)}
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField label="Title" variant="outlined" {...register('title')} />
        <TextField label="Description" variant="outlined" {...register('description')} />

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} size="large">
          Create
        </LoadingButton>
      </Box>
    </Modal>
  );
}
