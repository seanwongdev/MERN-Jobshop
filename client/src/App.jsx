import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Job, { loader as jobLoader} from './features/Job';
import AppLayout from './features/AppLayout';
import Dashboard from './features/Dashboard';
import Home from './features/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/jobs/new",
        element: <CreateJob />,
      },
      { path: "/jobs/:jobId",
      element: <Job />,
      loader: jobLoader,

      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
