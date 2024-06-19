import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import APIKeys from "./pages/APIKeys";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/api-keys",
    element: <APIKeys />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
