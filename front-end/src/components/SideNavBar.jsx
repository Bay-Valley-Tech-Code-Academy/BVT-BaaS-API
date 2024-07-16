import { NavLink, useNavigate } from "react-router-dom";
import { Home, Users, Settings, LogOut, KeyRound, Loader } from "lucide-react";
import { useLogoutOrganization } from "../api/mutations";
import { useQueryClient } from "@tanstack/react-query";

export default function SideNavBar() {
  const { mutate, isPending } = useLogoutOrganization();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  function handleLogout() {
    mutate(null, {
      onError: (err) => {
        console.log(err);
      },
      onSuccess: () => {
        console.log("hello world");
        console.log("test");
        queryClient.clear();
        navigate("/auth/login");
      },
    });
  }
  return (
    <div className="h-dvh w-full flex-col p-2 text-center">
      <NavLink to="/dashboard">
        <div className="text-xl text-slate-700">
          <div className="mt-1 flex items-center rounded-md p-2.5 transition-colors hover:text-slate-700">
            <h1 className="mb-3 ml-4 mt-3 text-2xl font-bold">BVT Auth</h1>
          </div>
          <div className="my-2 h-[1px] bg-gray-300"></div>
        </div>
      </NavLink>
      <Nav />
      <div className="my-4 h-[1px] bg-gray-300"></div>
      <button
        onClick={handleLogout}
        disabled={isPending}
        className="mt-1 flex w-full cursor-pointer items-center justify-self-end rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-red-400"
      >
        <span>
          <LogOut size={24} />
        </span>
        <span className="ml-4 text-base font-bold">Logout</span>
        {isPending && (
          <Loader
            size={20}
            className="ml-auto animate-spin text-dashboard-gray-50"
          />
        )}
      </button>
    </div>
  );
}

function Nav() {
  return (
    <>
      <NavLink to="/dashboard" end>
        {({ isActive }) => (
          <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
            <span className={isActive ? "text-purple-700" : ""}>
              <Home size={24} />
            </span>
            <span
              className={
                isActive
                  ? "ml-4 text-base font-bold text-purple-700"
                  : "ml-4 text-base font-bold"
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
              <Users size={24} className={isActive ? "text-purple-700" : ""} />
            </span>
            <span
              className={
                isActive
                  ? "ml-4 text-base font-bold text-purple-700"
                  : "ml-4 text-base font-bold"
              }
            >
              Users
            </span>
          </div>
        )}
      </NavLink>
      <NavLink to="/dashboard/projects" end>
        {({ isActive }) => (
          <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
            <span>
              <KeyRound
                size={24}
                className={isActive ? "text-purple-700" : ""}
              />
            </span>
            <span
              className={
                isActive
                  ? "ml-4 text-base font-bold text-purple-700"
                  : "ml-4 text-base font-bold"
              }
            >
              Projects
            </span>
          </div>
        )}
      </NavLink>
      <NavLink to="/dashboard/settings" end>
        {({ isActive }) => (
          <div className="mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-dashboard-gray-50 transition-colors duration-300 hover:bg-blue-50 hover:text-slate-700">
            <span>
              <Settings
                size={24}
                className={isActive ? "text-purple-700" : ""}
              />
            </span>
            <span
              className={
                isActive
                  ? "ml-4 text-base font-bold text-purple-700"
                  : "ml-4 text-base font-bold"
              }
            >
              Settings
            </span>
          </div>
        )}
      </NavLink>
    </>
  );
}
