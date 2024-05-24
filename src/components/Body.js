import React, { useEffect } from "react";
import Login from "./Login";
import Browsecom from "./Browsecom";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browsecom />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
