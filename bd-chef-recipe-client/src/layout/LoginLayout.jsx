import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

// login layout

const LoginLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
