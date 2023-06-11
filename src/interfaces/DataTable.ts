import { GridRenderCellParams, type GridColDef, type GridRowsProp, GridValidRowModel } from '@mui/x-data-grid';

export interface TableData {
  columns: GridColDef[];
  rows: GridRowsProp;
}

export interface TableActions<T extends GridValidRowModel> {
  editHandler: (row: GridRenderCellParams<T>) => void;
  deleteHandler: (row: GridRenderCellParams<T>) => void;
}