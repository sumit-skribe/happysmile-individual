/* eslint-disable @next/next/no-img-element */
import * as React from "react";

interface LogoProps {
  src: string;
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <div className="h-12">
      <img src={src} loading="lazy" alt="logo" className="h-full" />
    </div>
  );
};
