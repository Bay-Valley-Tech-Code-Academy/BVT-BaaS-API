import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import APIKeys from "./pages/APIKeys";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import DashboardLayout from "./components/DashboardLayout";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "/dashboard/users", element: <Users /> },
      { path: "/dashboard/settings", element: <Settings /> },
      { path: "/dashboard/api-keys", element: <APIKeys /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
