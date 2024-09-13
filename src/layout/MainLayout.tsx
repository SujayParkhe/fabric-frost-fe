import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "@/layout/Header";
import Sidebar from "@/layout/Sidebar";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div>
        {/* <Header /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
