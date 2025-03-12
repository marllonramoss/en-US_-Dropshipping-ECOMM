import React from "react";
import Logo from "./Logo";
import {
  IconBrandAppgallery,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black w-full h-52 flex justify-center ">
      {/* First Column */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <Logo />
        <div className="flex gap-4">
          <IconBrandWhatsapp size={19} stroke={2} />
          <IconBrandInstagram size={20} stroke={2} />
          <IconBrandAppgallery size={19} stroke={2} />
        </div>
      </div>
      {/* Company data  */}
      <div className="flex flex-col gap-2 justify-center  pl-2">
        <span>contato@loja.com</span>
        <span>+55 (11) 99999-9999</span>
        <span>CNPJ: 12345678901234</span>
      </div>
      {/* Others links */}
      <div className="flex  gap-4 items-center p-0 bg-green-300 ">
        <div className="flex flex-col gap-2">
          <span>General Information</span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Shipping & Returns</span>
          <span>Payment Methods</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
