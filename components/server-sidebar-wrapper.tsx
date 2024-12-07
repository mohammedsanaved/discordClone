// ServerSidebarWrapper.tsx
"use client";

import React, { useState } from "react";
import ServerSidebar from "@/components/server/server-sidebar";
import GestureButton from "@/components/GestureButton";

interface ServerSidebarWrapperProps {
  serverId: string;
}

const ServerSidebarWrapper: React.FC<ServerSidebarWrapperProps> = ({
  serverId,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSwipeRight = () => {
    setIsSidebarOpen(true); // Open sidebar
  };

  const handleSwipeLeft = () => {
    setIsSidebarOpen(false); // Close sidebar
  };

  return (
    <div className="relative flex">
      {isSidebarOpen && <ServerSidebar serverId={serverId} />}
      <div className="absolute inset-x-0 top-[50px] transform -translate-y-1/2 mx-auto">
        <GestureButton
          onSwipeRight={handleSwipeRight}
          onSwipeLeft={handleSwipeLeft}
        />
      </div>
    </div>
  );
};

export default ServerSidebarWrapper;
