import { Box, Button, Icon, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

interface ControlTasksPanelProps {
  openModal: () => void;
}

export function ControlTasksPanel({ openModal }: ControlTasksPanelProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h4" component="h1">
        Tasks list
      </Typography>

      <Button
        onClick={openModal}
        size="large"
        sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        variant="contained"
        color="success">
        <Icon component={Add} />
        <Typography>Add task</Typography>
      </Button>
    </Box>
  );
}
