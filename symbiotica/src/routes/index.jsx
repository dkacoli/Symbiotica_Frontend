import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import Dashboard from '../pages/Dashboard'
import Purchase from '../pages/Purchase'
import Dataset from '../pages/Dataset'
import RentOut from '../pages/RentOut'
import History from '../pages/History'
import Train from '../pages/Train'
import AuthPage from '../pages/AuthPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/purchase',
    element: <Purchase />,
  },
  {
    path: '/dataset',
    element: <Dataset />,
  },
   {
    path: '/rentout',
    element: <RentOut />,
  }, 
   {
    path: '/history',
    element: <History />,
  }, 
    {
      path: '/train',
      element: <Train />,
    },
  {
    path: "/login",
    element: <AuthPage />,
  },
])

export default router
