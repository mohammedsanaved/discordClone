"use client"; // Enables client-side interactivity

import React, { useState } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='h-full relative '>
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className='absolute bottom-[100px] left-2 z-40 bg-blue-500 text-white p-2 rounded md:hidden'>
        {isSidebarOpen ? "<" : ">"}
      </button>

      {/* Sidebar - with slide-in/out animation */}
      <div
        className={`fixed inset-y-0 z-0 w-[72px] h-full flex-col bg-gray-800 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:flex`}>
        {/* Render the first child as the sidebar */}
        {children[0]}
      </div>

      {/* Main content - adjusts for sidebar on larger screens */}
      <main
        className={`h-full w-full transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "pl-[72px]" : "pl-0"}
          md:pl-[72px]`}>
        {/* Render the rest of the children */}
        {children[1]}
      </main>
    </div>
  );
};

export default ClientLayout;
