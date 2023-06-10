import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar } from '@/components';

export function DashboardLayout() {
  return (
    <Box component="main">
      <Navbar />

      <Box sx={{ padding: '1rem' }} component="section">
        <Outlet />
      </Box>
    </Box>
  );
}
