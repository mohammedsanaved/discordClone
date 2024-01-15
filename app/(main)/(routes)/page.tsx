import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p className="text-3xl font-bold">Hello Discord</p>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </>
  );
}
