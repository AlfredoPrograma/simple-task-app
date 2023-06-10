import { useQuery } from '@apollo/client';

import { GetAllTasksQuery } from '@/graphql/resources/Task';
import { type GetAllTasksResponse, type Task } from '@/interfaces';
import { type GridColDef, type GridRowsProp } from '@mui/x-data-grid';

function generateTableColumns(tasks: Task[]) {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'title',
      headerName: 'Title'
    },
    {
      field: 'description',
      headerName: 'Description'
    },
    {
      field: 'completed',
      headerName: 'Completed'
    }
  ];

  const rows: GridRowsProp = tasks;

  return { columns, rows };
}

export function useTasks() {
  const { loading, error, data } = useQuery<GetAllTasksResponse>(GetAllTasksQuery);

  const tableData = generateTableColumns(data?.getAllTasks ?? []);

  return { loading, error, data, tableData };
}
