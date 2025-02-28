"use client";

import * as React from "react";
import CollapsibleItem from "./collapsible-item";
import useDisableScroll from "../hooks/useDisableScroll";
import useOutsideClick from "../hooks/useOutsideClick";
import HeaderTop from "./header-top";

interface HeaderProps {
  logoUrl: string;
  menuItems: string[];
  buttonText: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl, menuItems, buttonText }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useDisableScroll(isOpen);
  useOutsideClick(headerRef, closeMenu);

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col web-mx font-inter"
    >
      <HeaderTop
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        logoUrl={logoUrl}
        menuItems={menuItems}
        buttonText={buttonText}
      />
      <CollapsibleItem isOpen={isOpen} content={menuItems} />
    </header>
  );
};

export default Header;
