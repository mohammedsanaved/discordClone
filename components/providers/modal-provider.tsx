"use client";
import { useEffect, useState } from "react";

import EditServerModal from "@/components/models/edit-server-modal";
import ServerModel from "@/components/models/server-modal";
import InviteModel from "@/components/models/invite-modal";
import MemberModel from "@/components/models/member-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.log("ModalProvider mounted:", isMounted); // Debug log

  if (!isMounted) return null;

  return (
    <>
      <ServerModel />
      <InviteModel />
      <EditServerModal />
      <MemberModel />
    </>
  );
};
