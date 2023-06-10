import { gql } from '@apollo/client';

export interface Task {
  id: number;
  title: string;
  decsription: string | null;
  completed: boolean;
}

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
