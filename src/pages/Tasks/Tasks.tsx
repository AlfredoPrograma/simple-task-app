import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useBoolean } from '@/hooks/useBoolean';

import { useTasks } from './useTasks';
import { CreateTaskModal } from './components/CreateTaskModal';
import { ControlTasksPanel } from './components/ControlTasksPanel';

export function TasksPage() {
  const { tableData, createTask, getAllTask } = useTasks();
  const { value: isOpenModal, handleTrue: openModal, handleFalse: closeModal } = useBoolean(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <ControlTasksPanel openModal={openModal} />

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

      <CreateTaskModal
        open={isOpenModal}
        closeModal={closeModal}
        isSubmitting={createTask.loading || getAllTask.loading}
        createTaskMutation={createTask.mutation}
      />
    </Box>
  );
}
