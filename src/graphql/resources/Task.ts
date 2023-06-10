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
