import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useTasks } from './useTasks';

export function TasksPage() {
  const { tableData } = useTasks();

  return (
    <Box>
      <DataGrid
        columns={tableData.columns}
        rows={tableData.rows}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnMenu
        hideFooter
      />
    </Box>
  );
}
