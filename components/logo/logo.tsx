/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import * as React from "react";

interface LogoProps {
  src: string;
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <div className="h-12 w-52 overflow-hidden relative">
      <Image src={src} alt="logo" layout="fill" />
    </div>
  );
};
