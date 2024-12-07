import React from "react";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* Sidebar - visible on md and larger screens, hidden on smaller screens */}
      <div className="md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>

      {/* Main content - adjusted for sidebar on md and larger screens */}
      <main className="pl-[72px] md:pl-[72px] w-full h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
