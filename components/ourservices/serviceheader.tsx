import * as React from "react";

interface ServicesHeaderProps {
  title?: string;
  subtitle?: string;
  description: string;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({
  title = "Our Services",
  subtitle = "Services",
  description,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-base leading-6 font-normal">{title}</p>
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl leading-10 font-semibold text-accent">
          {subtitle} <span className="text-color">we offer</span>
        </h2>
        <p className="text-xl leading-7 font-normal">{description}</p>
      </div>
    </div>
  );
};

export default ServicesHeader;
