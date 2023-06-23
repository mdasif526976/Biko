import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="mx-12">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
