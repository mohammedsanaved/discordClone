// // ServerSidebarClient.tsx
// "use client";

// import React, { useState } from "react";
// import { Suspense } from "react";
// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
// import ServerHeader from "./server-header";

// const GestureButton = dynamic(() => import("@/components/GestureButton"), {
//   ssr: false,
// });

// interface ServerSidebarClientProps {
//   server: any;
//   role: string;
// }

// const ServerSidebarClient: React.FC<ServerSidebarClientProps> = ({
//   server,
//   role,
// }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   const handleSwipeRight = () => setIsSidebarOpen(true);
//   const handleSwipeLeft = () => setIsSidebarOpen(false);

//   return (
//     <div className="relative h-full">
//       <motion.div
//         className="fixed top-0 left-0 bottom-0 w-64 z-50 bg-[#F2F3F5] dark:bg-[#2B2D31]"
//         initial={{ x: -256 }} // Initial off-screen position
//         animate={{ x: isSidebarOpen ? 0 : -256 }} // Animate based on open state
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         drag="x"
//         dragConstraints={{ left: -256, right: 0 }} // Restrict dragging to within screen bounds
//         onDragEnd={(e, info) => {
//           if (info.offset.x > 100) {
//             handleSwipeRight();
//           } else if (info.offset.x < -100) {
//             handleSwipeLeft();
//           }
//         }}
//       >
//         <ServerHeader server={server} role={role} />
//         <div className="flex flex-col mt-20">
//           {server.channels.map((channel: any) => (
//             <div key={channel.id} className="flex items-center p-2">
//               {/* Icon based on channel type */}
//               <span>{channel.name}</span>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       <Suspense fallback={<div>Loading...</div>}>
//         <GestureButton
//           onSwipeRight={handleSwipeRight}
//           onSwipeLeft={handleSwipeLeft}
//         />
//       </Suspense>
//     </div>
//   );
// };

// export default ServerSidebarClient;
