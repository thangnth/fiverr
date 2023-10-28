import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      }}
    >
      <Outlet />
    </div>
  );
}

export default AuthLayout;
