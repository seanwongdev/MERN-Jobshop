import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  { path: "/order/:orderId", element: <Order /> },

])

function App() {
  return <RouterProvier router={router} />;
}

export default App;
