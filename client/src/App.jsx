import { Profiler, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loader as dashboardLoader } from "./ui/DashboardLayout";
import { loader as jobsLoader } from "./features/job/JobList";
import { action as signUpAction } from "./features/user/Signup";
import { action as loginAction } from "./features/user/Login";
import CreateJob, { action as createJobAction } from "./features/job/CreateJob";
import EditJob, {
  action as editJobAction,
  loader as editJobLoader,
} from "./features/job/EditJob";
import DeleteJob, { action as deleteJobAction } from "./features/job/DeleteJob";

import Home from "./ui/Home";
import JobList from "./features/job/JobList";
import Login from "./features/user/Login";
import DashboardLayout from "./ui/DashboardLayout";
import Stats from "./features/stats/Stats";
import Profile from "./features/profile/Profile";
import Signup from "./features/user/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/signup",
    element: <Signup />,
    action: signUpAction,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    loader: dashboardLoader,
    children: [
      {
        index: true,
        element: <CreateJob />,
        action: createJobAction,
      },
      {
        path: "jobs/:id",
        element: <EditJob />,
        loader: editJobLoader,
        action: editJobAction,
      },
      {
        path: "delete-job/:id",
        element: <DeleteJob />,
        action: deleteJobAction,
      },
      {
        path: "jobs",
        element: <JobList />,
        loader: jobsLoader,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
