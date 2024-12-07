"use client";

import ServerModel from "@/components/models/server-modal";
import { useEffect, useState } from "react";
import InviteModel from "@/components/models/invite-modal";

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
    </>
  );
};
