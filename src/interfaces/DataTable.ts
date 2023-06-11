import { MutationTuple } from '@apollo/client';
import { type GridColDef, type GridRowsProp } from '@mui/x-data-grid';

export interface TableData {
  columns: GridColDef[];
  rows: GridRowsProp;
}

export interface TableActions {
  editMutation: MutationTuple<any, any>[0];
  deleteMutation: MutationTuple<any, any>[0];
}