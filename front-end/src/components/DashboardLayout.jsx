import { Outlet } from "react-router-dom";
import SideNavBar from "./SideNavBar";

export default function DashboardLayout() {
  return (
    <div class="flex h-dvh">
      <div className="hidden w-64 sm:flex">
        <SideNavBar />
      </div>
      <div className="bg-dashboard-gray-100 h-full flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
