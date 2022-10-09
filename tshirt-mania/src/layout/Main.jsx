import React from "react";
import { Outlet } from "react-router-dom";
import Heder from "../Heder/Heder";

const Main = () => {
  return (
    <div>
      <Heder />
      <Outlet />
    </div>
  );
};

export default Main;
