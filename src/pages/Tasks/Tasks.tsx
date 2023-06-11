import { Box } from '@mui/material';

import { DataTable } from '@/components';
import { useBoolean } from '@/hooks/useBoolean';

import { useTasks } from './useTasks';
import { ControlTasksPanel, CreateTaskModal } from './components';

export function TasksPage() {
  const { tableData, createTask, getAllTask } = useTasks();
  const { value: isOpenModal, handleTrue: openModal, handleFalse: closeModal } = useBoolean(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <ControlTasksPanel openModal={openModal} />

      <DataTable tableData={tableData} />

      <CreateTaskModal
        open={isOpenModal}
        closeModal={closeModal}
        isSubmitting={createTask.loading || getAllTask.loading}
        createTaskMutation={createTask.mutation}
      />
    </Box>
  );
}
