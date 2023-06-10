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
