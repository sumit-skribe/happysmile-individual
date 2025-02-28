import * as React from "react";
import Link from "next/link";
interface DesktopMenuProps {
  menuItems: string[];
  buttonText: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems, buttonText }) => {
  return (
    <>
      <div className="flex flex-row gap-14 [&>a]:text-color [&>a]:text-lg [&>a]:leading-6 [&>a]:font-semibold [&>a]:cursor-pointer">
        {menuItems.map((item, index) => (
          <Link href={item.toLowerCase()} key={index}>
            {item}
          </Link>
        ))}
      </div>
      <button className="bg-accent rounded-full py-3 px-6 text-card text-base leading-6 font-bold">
        {buttonText}
      </button>
    </>
  );
};

export default DesktopMenu;
