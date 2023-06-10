import { useQuery } from '@apollo/client';
import { GetAllTasksQuery } from '../../graphql/resources/Task';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export function TasksPage() {
  const { loading, error, data } = useQuery(GetAllTasksQuery);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography component={'h1'} variant="h4">
            Simple Task
          </Typography>

          <IconButton>
            <AccountCircle fontSize="large" color="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
