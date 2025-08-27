import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      {/* Outlet  */}
      <Outlet></Outlet>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
