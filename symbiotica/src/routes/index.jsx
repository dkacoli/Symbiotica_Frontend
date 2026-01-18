import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import Dashboard from '../pages/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

export default router
