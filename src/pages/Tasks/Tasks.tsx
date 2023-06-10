import { useQuery } from '@apollo/client';
import { GetAllTasksQuery } from '../../graphql/resources/Task';
import { Box } from '@mui/material';

export function TasksPage() {
  const { loading, error, data } = useQuery(GetAllTasksQuery);

  return (
    <Box>
      <h1></h1>
    </Box>
  );
}
