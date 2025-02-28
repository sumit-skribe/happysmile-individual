"use client";

import * as React from "react";
import useBreakpoint from "./useBreakpoint";
import DesktopMenu from "./DesktopMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import { Logo } from "../logo/logo";

interface HeaderTopProps {
  isOpen: boolean;
  toggleMenu: () => void;
  logoUrl: string;
  menuItems: string[];
  buttonText: string;
}

const HeaderTop: React.FC<HeaderTopProps> = ({
  isOpen,
  toggleMenu,
  logoUrl,
  menuItems,
  buttonText,
}) => {
  const breakpoint = useBreakpoint();

  return (
    <div className="flex flex-row justify-between items-center pt-5">
      <Logo src={logoUrl} />
      {breakpoint !== "lg" ? (
        <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      ) : (
        <DesktopMenu menuItems={menuItems} buttonText={buttonText} />
      )}
    </div>
  );
};

export default HeaderTop;
