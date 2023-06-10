import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ paddingBlock: '0.75rem', justifyContent: 'space-between' }}>
        <Typography component={'h1'} variant="h4">
          Simple Task
        </Typography>

        <IconButton>
          <AccountCircle fontSize="large" color="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
