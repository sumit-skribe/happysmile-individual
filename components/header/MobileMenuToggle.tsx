
import * as React from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface MobileMenuToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen ? (
        <IoMdClose
          className="text-5xl cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <IoMdMenu
          className="text-5xl cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default MobileMenuToggle;