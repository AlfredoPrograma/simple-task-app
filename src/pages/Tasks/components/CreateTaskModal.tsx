/* eslint-disable @typescript-eslint/no-misused-promises */
import { Modal } from '@/components/Modal';
import { type CreateTaskResponse } from '@/interfaces';
import { type MutationTuple } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

interface CreateTaskForm {
  title: string;
  description: string;
}
interface CreateTaskModalProps {
  open: boolean;
  closeModal: () => void;
  createTaskMutation: MutationTuple<CreateTaskResponse, CreateTaskForm>[0];
  isSubmitting: boolean;
}

export function CreateTaskModal({
  open,
  createTaskMutation,
  closeModal,
  isSubmitting
}: CreateTaskModalProps) {
  const { register, handleSubmit, reset } = useForm<CreateTaskForm>();

  const handleCloseModalForm = () => {
    closeModal();
    reset();
  };

  const handleCreateTask = async (data: CreateTaskForm) => {
    await createTaskMutation({ variables: data });
    handleCloseModalForm();
  };

  return (
    <Modal title="Add Task" open={open} onClose={handleCloseModalForm}>
      <Box
        onSubmit={handleSubmit(handleCreateTask)}
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
