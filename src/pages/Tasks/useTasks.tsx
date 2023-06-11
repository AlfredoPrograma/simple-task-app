import { useMutation, useQuery } from '@apollo/client';

import { CreateTaskMutation, DeleteTaskMutation, GetAllTasksQuery, UpdateTaskMutation } from '@/graphql/resources/Task';
import {
  CreateTaskPayload,
  UpdateTaskResponse,
  type CreateTaskResponse,
  type GetAllTasksResponse,
  type Task,
  UpdateTaskPayload
} from '@/interfaces';
import { type GridColDef, type GridRowsProp } from '@mui/x-data-grid';
import { ActionsButtons } from '@/components';
import { TableActions } from '@/interfaces/DataTable';
import { useResourceModal } from '@/hooks/useResourceModal';

// TODO: Improve headers styling
// TODO: Improve table styling
// TODO: Add icon to completed column
function generateTableColumns(tasks: Task[], actions: TableActions<Task>) {
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
  const { isOpenModal, openModal, closeModal, resource } = useResourceModal<Task>()

  const getAllTasksStatus = useQuery<GetAllTasksResponse>(GetAllTasksQuery);

  const [createTaskMutation, createTaskStatus] = useMutation<CreateTaskResponse, CreateTaskPayload>(CreateTaskMutation, {
    refetchQueries: ['GetAllTasks']
  });

  const [updateTaskMutation, updateTaskStatus] = useMutation<UpdateTaskResponse, UpdateTaskPayload>(UpdateTaskMutation, {
    refetchQueries: ['GetAllTasks']
  });

  const [deleteTaskMutation] = useMutation(DeleteTaskMutation, {
    refetchQueries: ['GetAllTasks']
  });

  const tableData = generateTableColumns(getAllTasksStatus.data?.getAllTasks ?? [], {
    editHandler: ({ row }) => openModal(row),
    deleteHandler: ({ row }) => deleteTaskMutation({ variables: { id: row.id } })
  });

  return {
    getAllTask: getAllTasksStatus,
    createTask: {
      mutation: createTaskMutation,
      status: createTaskStatus
    },
    updateTask: {
      mutation: updateTaskMutation,
      status: updateTaskStatus,
    },
    upsertTaskModal: {
      isOpenModal,
      openModal,
      closeModal,
      resource
    },
    tableData
  };
}
