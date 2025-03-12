import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { IconSearch, IconShoppingCart, IconUser } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="bg-white w-full h-20 flex justify-between items-center text-black px-24">
      <Logo />
      <nav>
        <ul className="flex gap-4 text-black">
          <li>
            <Link href={"#"}>HOME</Link>
          </li>
          <li>
            <Link href={"#"}>COLLECTIONS</Link>
          </li>
          <li>
            <Link href={"#"}>CONTACT</Link>
          </li>
          <li>
            <Link href={"#"}>INSTAGRAM</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-6">
        <div>
          <IconSearch size={20} stroke={1.5} />
        </div>
        <div>
          <IconUser size={20} stroke={1.5} />
        </div>
        <div>
          <IconShoppingCart size={20} stroke={1.5} />
        </div>
      </div>
    </header>
  );
};

export default Header;
