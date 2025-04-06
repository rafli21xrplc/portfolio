"use client";

import Dock from "@/components/reactbits/dock";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";


const items = [
  { icon: <FaInstagram size={18} />, label: "Home", onClick: () => alert("Home!") },
  {
    icon: <FaGithub size={18} />,
    label: "Archive",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <FaLinkedinIn size={18} />,
    label: "Profile",
    onClick: () => alert("Profile!"),
  }
];

export const DockUI = () => {
  return (
    <>
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  );
};
