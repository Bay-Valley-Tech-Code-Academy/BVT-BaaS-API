import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import APIKeys from "./pages/APIKeys";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import DashboardLayout from "./components/DashboardLayout";
import LandingPage from "./components/LandingPage";
import AuthLayout from "./components/AuthLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/signup", element: <SignUp /> }
    ]
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