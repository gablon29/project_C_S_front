import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link style={{ marginRight: "8px", fontWeight: "bold" }} to={"/home"}>
          <h3>Home</h3>
        </Link>
        <Link style={{ fontWeight: "bold" }} to={"/dashboard"}>
          <h3>Dashboard</h3>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
