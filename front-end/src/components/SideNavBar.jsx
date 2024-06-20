import React from "react";
import { NavLink } from "react-router-dom";

export default function SideNavBar() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/dashboard/users">Users</NavLink>
      <NavLink to="/dashboard/api-keys">API Keys</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
    </nav>
  );
}
