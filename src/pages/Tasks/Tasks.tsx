import { Box } from '@mui/material';

import { DataTable } from '@/components';

import { useTasks } from './useTasks';
import { ControlTasksPanel, UpsertTaskModal } from './components';

export function TasksPage() {
  const { tableData, createTask, getAllTask, upsertTaskModal, updateTask } = useTasks();
  const { openModal, closeModal, isOpenModal, resource } = upsertTaskModal

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <ControlTasksPanel openModal={() => openModal()} />

      <DataTable tableData={tableData} />

      <UpsertTaskModal
        open={isOpenModal}
        closeModal={closeModal}
        task={resource}
        isSubmitting={createTask.status.loading || getAllTask.loading}
        createTaskMutation={createTask.mutation}
        updateTaskMutation={updateTask.mutation}
      />
    </Box>
  );
}
