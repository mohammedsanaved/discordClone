import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { ChannelType, MemberRole } from "@prisma/client";
import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from "lucide-react";
import ServerHeader from "./server-header";
import dynamic from "next/dynamic";

// Lazy load the GestureButton as it’s a client component
const GestureButton = dynamic(() => import("@/components/GestureButton"), {
  ssr: false,
});

interface ServerSideBarProps {
  serverId: string;
}

const iconMap = {
  [ChannelType.TEXT]: <Hash className="mr-2 h-4 w-4" />,
  [ChannelType.AUDIO]: <Mic className="mr-2 h-4 w-4" />,
  [ChannelType.VIDEO]: <Video className="mr-2 h-4 w-4" />,
};

const ServerSidebar = async ({ serverId }: ServerSideBarProps) => {
  const server = await db.server.findUnique({
    where: { id: serverId },
    include: {
      channels: { orderBy: { createdAt: "asc" } },
      members: { include: { profile: true }, orderBy: { role: "asc" } },
    },
  });
  const profile = await currentProfile();

  if (!server) return redirect("/");

  const role = server.members.find(
    (member) => member.profileId === profile?.id
  )?.role;
  // const handleOpen = () => {};
  // const handleClose = () => {};

  return (
    <div className="relative flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ServerHeader server={server} role={role} />
      <div className="absolute inset-x-60 top-1/2 transform -translate-y-1/2 mx-auto">
        {/* <Suspense fallback={<div>...</div>}> */}
        {/* <GestureButton /> */}
        {/* Button */}
        {/* </Suspense> */}
      </div>
      <div className="flex flex-col mt-20"></div>
    </div>
  );
};

export default ServerSidebar;
