import { Box, IconButton, Stack } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';

import { type TableActions, type TableData } from '@/interfaces/DataTable';

interface ActionButtonsProps {
  row: GridRenderCellParams
  actions: TableActions
}

export function ActionsButtons({ actions, row }: ActionButtonsProps) {
  const { deleteMutation, editMutation } = actions;

  return (
    <Stack direction="row">
      <IconButton onClick={async () => await editMutation()}>
        <Edit color="primary" />
      </IconButton>

      <IconButton onClick={async () => await deleteMutation({ variables: { id: row.id } })}>
        <Delete color="error" />
      </IconButton>
    </Stack>
  );
}

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
