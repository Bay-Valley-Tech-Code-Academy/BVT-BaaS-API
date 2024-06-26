import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import DashboardLayout from "./components/DashboardLayout";
import LandingPage from "./components/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "/dashboard/users", element: <Users /> },
      { path: "/dashboard/settings", element: <Settings /> },
      { path: "/dashboard/projects", element: <Projects /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
