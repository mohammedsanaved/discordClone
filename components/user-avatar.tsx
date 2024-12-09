import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { cn } from "@/lib/utils";

interface userAvatarProps {
  src?: string;
  className?: string;
}
const UserAvatar = ({ src, className }: userAvatarProps) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      className={cn("h-7 w-7 md:h-10 md:w-10", className)}
    >
      <Avatar src={src} />
    </Stack>
  );
};

export default UserAvatar;
