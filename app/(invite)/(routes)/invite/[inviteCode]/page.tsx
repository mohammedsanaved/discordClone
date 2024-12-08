import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const InviteCode = async ({ params }: InviteCodePageProps) => {
  try {
    // Fetching the current profile
    const profile = await currentProfile();
    if (!profile) {
      console.error("No profile found, redirecting to sign-in");
      return redirectToSignIn();
    }

    // Check if inviteCode is provided
    if (!params.inviteCode) {
      console.error("Invite code is missing, redirecting to homepage");
      return redirect("/");
    }

    console.log(`Invite code: ${params.inviteCode}`);
    console.log(`Profile ID: ${profile.id}`);

    // Check if the user is already a member of the server
    const existingServer = await db.server.findFirst({
      where: {
        inviteCode: params.inviteCode,
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });

    console.log("Existing Server:", existingServer);

    if (existingServer) {
      console.log(
        `User is already a member of the server. Redirecting to /servers/${existingServer.id}`
      );
      return redirect(`/servers/${existingServer.id}`);
    }

    // Add user to server if inviteCode is valid
    const server = await db.server.update({
      where: {
        inviteCode: params.inviteCode,
      },
      data: {
        members: {
          create: [
            {
              profileId: profile.id,
            },
          ],
        },
      },
    });

    console.log("Server updated with new member:", server);

    if (server) {
      console.log(`Redirecting to /servers/${server.id}`);
      return redirect(`/servers/${server.id}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

  // Fallback for unexpected cases
  console.error("Unexpected case encountered, returning null");
  return null;
};

export default InviteCode;
