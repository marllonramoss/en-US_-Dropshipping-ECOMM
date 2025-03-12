import React from "react";
import Logo from "./Logo";
import Link from "next/link";

interface ShortcutsSectionProps {
  hidden: boolean;
}

const ShortcutsSection = ({ hidden }: ShortcutsSectionProps) => {
  return (
    <div
      className={`bg-blue-400 ${hidden ? "h-screen" : "h-[calc(100vh-32px)]"} w-full flex justify-center items-center`}
    >
      <div className="flex justify-center items-center flex-col gap-4">
        <Logo />
        <div className="flex justify-center items-center gap-4">
          <Link href={"#"}>Catalog</Link>
          <Link href={"#"}>Collections</Link>
          <Link href={"#"}>Instagram</Link>
        </div>
      </div>
    </div>
  );
};

export default ShortcutsSection;
