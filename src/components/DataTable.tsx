import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { type TableData } from '@/interfaces/DataTable';

interface DataTableProps {
  tableData: TableData;
}

export function DataTable({ tableData }: DataTableProps) {
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
