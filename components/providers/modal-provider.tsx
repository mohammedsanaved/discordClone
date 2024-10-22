"use client";

import ServerModel from "@/components/models/server-modal";
import { useEffect, useState } from "react";

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
    </>
  );
};
