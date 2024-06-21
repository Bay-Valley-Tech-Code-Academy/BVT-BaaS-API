import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Settings, LogOut, KeyRound } from "lucide-react";

export default function SideNavBar() {
  return (
    <div className="h-dvh w-full flex-col p-2 text-center">
      <NavLink to="/dashboard">
        <div className="text-xl text-dashboard-gray-50">
          <div className="mt-1 flex items-center rounded-md p-2.5 transition-colors hover:bg-blue-50 hover:text-slate-700">
            <h1 className="ml-4 text-[15px] font-bold">Name</h1>
          </div>
          <div className="my-2 h-[1px] bg-gray-300"></div>
        </div>
      </NavLink>
      <NavLink to="/dashboard" end>
        {({ isActive }) => (
          <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
            <span className={isActive ? "text-purple-700" : ""}>
              <Home size={32} />
            </span>
            <span
              className={
                isActive
                  ? "ml-4 text-[15px] font-bold text-purple-700"
                  : "ml-4 text-[15px] font-bold"
              }
            >
              Home
            </span>
          </div>
        )}
      </NavLink>
      <NavLink to="/dashboard/users" end>
        {({ isActive }) => (
          <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
            <span>
              <Users size={32} className={isActive ? "text-purple-700" : ""} />
            </span>
            <span
              className={
                isActive
                  ? "ml-4 text-[15px] font-bold text-purple-700"
                  : "ml-4 text-[15px] font-bold"
              }
            >
              Users
            </span>
          </div>
        )}
      </NavLink>
      <NavLink to="/dashboard/api-keys" end>
        {({ isActive }) => (
          <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
            <span>
              <KeyRound
                size={32}
                className={isActive ? "text-purple-700" : ""}
              />
            </span>
            <span
              className={
                isActive
                  ? "ml-4 text-[15px] font-bold text-purple-700"
                  : "ml-4 text-[15px] font-bold"
              }
            >
              API Keys
            </span>
          </div>
        )}
      </NavLink>
      <NavLink to="/dashboard/settings" end>
        {({ isActive }) => (
          <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
            <span>
              <Settings
                size={32}
                className={isActive ? "text-purple-700" : ""}
              />
            </span>
            <span
              className={
                isActive
                  ? "ml-4 text-[15px] font-bold text-purple-700"
                  : "ml-4 text-[15px] font-bold"
              }
            >
              Settings
            </span>
          </div>
        )}
      </NavLink>
      <div className="my-4 h-[1px] bg-gray-300"></div>
      <div className="mt-1 flex cursor-pointer items-center justify-self-end rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-red-400">
        <span>
          <LogOut size={32} />
        </span>
        <span className="ml-4 text-[15px] font-bold">Logout</span>
      </div>
    </div>
  );
}
