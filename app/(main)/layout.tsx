import React from "react";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      {/* Sidebar - visible on md and larger screens, hidden on smaller screens */}
      <div className='md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
        <NavigationSidebar />
      </div>

      {/* Main content - adjusted for sidebar on md and larger screens */}
      <main className='pl-[72px] md:pl-[72px] w-full h-full'>{children}</main>
    </div>
  );
};

export default MainLayout;
// -----------------------------------------------------------------------------------------------------------------------------
// import React from "react";
// import ClientLayout from "@/components/client/client-layout";
// import NavigationSidebar from "@/components/navigation/navigation-sidebar";

// const MainLayout = async ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className='h-full'>
//       {/* Pass the children and sidebar to the client layout for interactivity */}
//       <ClientLayout>
//         <NavigationSidebar />
//         {children}
//       </ClientLayout>
//     </div>
//   );
// };

// export default MainLayout;
// -----------------------------------------------------------------------------------------------------------------------------
