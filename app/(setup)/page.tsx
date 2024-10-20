import { redirect } from "next/navigation";

import React from "react";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import InitialModel from "@/components/models/initial-modal";
const PageSetup = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  if (server) {
    redirect(`/servers/${server.id}`);
  }
  return (
    <div>
      <InitialModel />
    </div>
  );
};

export default PageSetup;
