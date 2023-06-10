import { createBrowserRouter } from 'react-router-dom';

import { TasksPage } from '@/pages';
import { DashboardLayout } from '@/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <TasksPage />
      }
    ]
  }
]);
