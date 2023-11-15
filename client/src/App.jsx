import { Profiler, useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Job, { loader as jobLoader} from './features/job/Job';
import { action as signUpAction } from './features/user/Signup';

import Home from './ui/Home';
import JobList from './features/job/JobList';
import Login from './features/user/Login';
import CreateJob from './features/job/CreateJob';
import DashboardLayout from './ui/DashboardLayout';
import Stats from './features/stats/Stats';
import Profile from "./features/profile/Profile"
import Signup from './features/user/Signup';


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
    path: "/signup",
    element: <Signup />,
    action: signUpAction
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <CreateJob />
      },
      {
        path: "jobs",
        element: <JobList />
      },
      {
        path: "stats",
        element: <Stats />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
