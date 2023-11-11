import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Job, { loader as jobLoader} from './features/job/Job';

import Dashboard from './ui/Dashboard';
import Home from './ui/Home';
import JobList from './features/job/JobList';
import Login from './features/user/Login';
import CreateJob from './features/job/CreateJob';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "new",
        element: <CreateJob />
      },
      {
        path: "jobs",
        element: <JobList />
      }
    ]

  },



])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
