// GestureButton.tsx
"use client";

import React, { useState } from "react";
import { Tally2 } from "lucide-react";
import { useGesture } from "@use-gesture/react";

interface GestureButtonProps {
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
}

const GestureButton: React.FC<GestureButtonProps> = ({
  onSwipeRight,
  onSwipeLeft,
}) => {
  const [width, setwidth]: any = useState();
  // const GestureButton = () => {
  const bind = useGesture({
    onDrag: ({ movement: [mx] }) => {
      console.log(mx, "Drag movement");
      setwidth(mx);
      if (mx > 100) {
        onSwipeRight(); // Trigger sidebar open if dragged right
      } else if (mx < -100) {
        onSwipeLeft(); // Trigger sidebar close if dragged left
      }
    },
  });

  return (
    <div
      {...bind()}
      className="lg:hidden block fixed left-0 top-1/2 transform -translate-y-1/2 touch-none"
    >
      <button className="text-black dark:text-white py-[5px] rounded-tr-xl rounded-br-xl dark:bg-[#2B2D31] bg-[#F2F3F5] shadow-lg">
        <Tally2 className="h-6 w-6" />
      </button>
    </div>
  );
};

export default GestureButton;
