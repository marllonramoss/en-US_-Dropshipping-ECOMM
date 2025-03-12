"use client";

import { IconX } from "@tabler/icons-react";
import React, { useState } from "react";

interface QuickNoticeProps {
  message: string;
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
}

const QuickNotice = ({ message, hidden, setHidden }: QuickNoticeProps) => {
  return (
    <div
      className={`w-full bg-black flex justify-center items-center h-8 relative 
      ${hidden ? "hidden" : "block"}
    `}
    >
      <span className="text-white text-sm font-bold">{message}</span>

      <IconX
        className="absolute right-4 "
        size={16}
        stroke={2}
        onClick={() => setHidden(!hidden)}
      />
    </div>
  );
};

export default QuickNotice;
