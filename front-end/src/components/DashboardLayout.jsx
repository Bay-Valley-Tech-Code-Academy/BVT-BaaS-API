import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideNavBar from "./SideNavBar";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../api/queries";
import DashboardLoading from "./DashboardLoading";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

export default function DashboardLayout() {
  const { isLoading, isError, error } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  React.useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["auth"],
    });
  }, [location, queryClient]);

  React.useEffect(() => {
    console.log(isError);
    console.log(error);
    if (isError) {
      navigate("/auth/login");
    }
  }, [isError]);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <div className="flex h-dvh">
      <div className="hidden w-64 sm:flex">
        <SideNavBar />
      </div>
      <div className="h-full flex-1 bg-dashboard-gray-100 p-6">
        <Outlet />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
