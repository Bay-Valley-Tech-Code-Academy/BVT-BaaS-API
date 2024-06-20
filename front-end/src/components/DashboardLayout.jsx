import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "./SideNavBar";

export default function DashboardLayout() {
  return (
    <>
      <SideNavBar />
      <Outlet />
    </>
  );
}
