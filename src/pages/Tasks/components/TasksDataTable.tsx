import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { type TableData } from '@/interfaces/DataTable';
interface TaskTableProps {
  tableData: TableData;
}

export function TasksDataTable({ tableData }: TaskTableProps) {
  return (
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
  );
}
