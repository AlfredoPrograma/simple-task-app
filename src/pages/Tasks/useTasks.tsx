import { useMutation, useQuery } from '@apollo/client';

import { CreateTaskMutation, DeleteTaskMutation, GetAllTasksQuery, UpdateTaskMutation } from '@/graphql/resources/Task';
import {
  type CreateTaskForm,
  type CreateTaskResponse,
  type GetAllTasksResponse,
  type Task
} from '@/interfaces';
import { type GridColDef, type GridRowsProp } from '@mui/x-data-grid';
import { ActionsButtons } from '@/components';
import { TableActions } from '@/interfaces/DataTable';

// TODO: Improve headers styling
// TODO: Improve table styling
// TODO: Add icon to completed column
function generateTableColumns(tasks: Task[], actions: TableActions) {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 1
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1
    },
    {
      field: 'completed',
      headerName: 'Completed',
      flex: 1
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (row) => <ActionsButtons row={row} actions={actions} />
    }
  ];

  const rows: GridRowsProp = tasks;

  return { columns, rows };
}

export function useTasks() {
  const {
    loading: getAllTasksLoading,
    error: getAllTasksError,
    data: getAllTasksData
  } = useQuery<GetAllTasksResponse>(GetAllTasksQuery);
  const [
    createTaskMutation,
    { loading: createTaskLoading, error: createTaskError, data: createTaskData }
  ] = useMutation<CreateTaskResponse, CreateTaskForm>(CreateTaskMutation, {
    refetchQueries: ['GetAllTasks']
  });

  const [updateTaskMutation] = useMutation(UpdateTaskMutation, {
    refetchQueries: ['GetAllTasks']
  });

  const [deleteTaskMutation] = useMutation(DeleteTaskMutation, {
    refetchQueries: ['GetAllTasks']
  });

  const tableData = generateTableColumns(getAllTasksData?.getAllTasks ?? [], {
    deleteMutation: deleteTaskMutation,
    editMutation: updateTaskMutation
  });

  return {
    getAllTask: {
      loading: getAllTasksLoading,
      error: getAllTasksError,
      data: getAllTasksData
    },
    createTask: {
      mutation: createTaskMutation,
      loading: createTaskLoading,
      error: createTaskError,
      data: createTaskData
    },
    tableData
  };
}
