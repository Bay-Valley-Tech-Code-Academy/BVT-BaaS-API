import { Outlet } from "react-router-dom";
import SideNavBar from "./SideNavBar";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout() {
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
