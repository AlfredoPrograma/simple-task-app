import { Box, Button, Icon, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddTask } from '@mui/icons-material';

import { useBoolean } from '@/hooks/useBoolean';

import { useTasks } from './useTasks';
import { CreateTaskModal } from './components/CreateTaskModal';

export function TasksPage() {
  const { tableData, createTask, getAllTask } = useTasks();
  const { value: isOpenModal, handleTrue: openModal, handleFalse: closeModal } = useBoolean(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* TODO: Move control panel to its own component */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          Tasks list
        </Typography>

        <Button
          onClick={openModal}
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

      <CreateTaskModal
        open={isOpenModal}
        closeModal={closeModal}
        isSubmitting={createTask.loading || getAllTask.loading}
        createTaskMutation={createTask.mutation}
      />
    </Box>
  );
}
