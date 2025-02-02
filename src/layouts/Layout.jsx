import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom"; 
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Nav />

      {/* Main Content */}
      <div className=" min-h-screen p-3 ">
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
