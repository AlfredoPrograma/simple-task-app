import { Box, Button, Icon, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddTask } from '@mui/icons-material';

import { useTasks } from './useTasks';

export function TasksPage() {
  const { tableData } = useTasks();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          Tasks list
        </Typography>

        <Button
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
    </Box>
  );
}
