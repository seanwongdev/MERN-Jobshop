import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Job, { loader as jobLoader} from './features/Job';

import Dashboard from './features/Dashboard';
import Home from './features/Home';
import JobList from './features/JobList';
import Login from './features/Login';
import CreateJob from './features/CreateJob';


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

  },



])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
