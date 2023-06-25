import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footerr from "../Component/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-12">
      <Navbar />
      <Outlet />
      <Footerr />
    </div>
  );
};

export default Main;
