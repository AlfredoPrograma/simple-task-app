import { gql } from '@apollo/client';

export const GetAllTasksQuery = gql`
  query GetAllTasks {
    getAllTasks {
      id
      description
      title
      completed
    }
  }
`;

export const CreateTaskMutation = gql`
  mutation CreateTask($title: String!, $description: String) {
    createTask(title: $title, description: $description) {
      id
      title
      description
      completed
    }
  }
`;

export const UpdateTaskMutation = gql`
  mutation UpdateTask($id: Int!, $title: String!, $description: String, $completed: Boolean) {
    updateTask(id: $id, title: $title, description: $description) {
      id
      title
      description
      completed
    }
  }
`

export const DeleteTaskMutation = gql`
  mutation RemoveTask($id: Int!) {
    removeTask(id: $id) {
      id
      title
      description
      completed
    }
  }
`