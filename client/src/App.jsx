import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Job, { loader as jobLoader} from './features/Job';
import AppLayout from './features/AppLayout';
import Dashboard from './features/Dashboard';
import Home from './features/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,

  }

])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
