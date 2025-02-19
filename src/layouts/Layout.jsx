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
      <div className=" w-full min-h-screen  overflow-y-auto scrollWidth ">
        <ScrollRestoration />
        <Outlet />
     
      </div>
    
    </div>
  );
};

export default Layout;
