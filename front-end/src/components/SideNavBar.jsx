import React from "react";
import { NavLink } from "react-router-dom";

export default function SideNavBar() {
  return (
    <div class="h-dvh w-full flex-col p-2 text-center">
      <NavLink to="/dashboard">
        <div className="text-dashboard-gray-50 text-xl">
          <div className="mt-1 flex items-center rounded-md p-2.5 transition-colors hover:bg-blue-50 hover:text-slate-700">
            <h1 className="ml-3 text-[15px] font-bold">Name</h1>
          </div>
          <div className="my-2 h-[1px] bg-gray-300"></div>
        </div>
      </NavLink>
      <NavLink to="/dashboard">
        <div className="text-dashboard-gray-50 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
          <span className="ml-2 text-[15px] font-bold">Home</span>
        </div>
      </NavLink>
      <NavLink to="/dashboard/users">
        <div className="text-dashboard-gray-50 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
          <span className="ml-2 text-[15px] font-bold">Users</span>
        </div>
      </NavLink>
      <NavLink to="/dashboard/api-keys">
        <div className="text-dashboard-gray-50 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
          <span className="ml-2 text-[15px] font-bold">API Keys</span>
        </div>
      </NavLink>
      <NavLink to="/dashboard/settings">
        <div className="text-dashboard-gray-50 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
          <span className="ml-2 text-[15px] font-bold">Settings</span>
        </div>
      </NavLink>
      <div className="my-4 h-[1px] bg-gray-300"></div>
      <div className="text-dashboard-gray-50 mt-1 flex cursor-pointer items-center justify-self-end rounded-md p-2.5 px-4 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
        <span className="ml-2 text-[15px] font-bold">Logout</span>
      </div>
    </div>
  );
}
