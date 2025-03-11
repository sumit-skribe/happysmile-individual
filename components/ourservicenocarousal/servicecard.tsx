import * as React from "react";
import { LuSmilePlus } from "react-icons/lu";
import { BsArrowRightSquareFill } from "react-icons/bs";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div
      id="service-card"
      className="flex flex-col gap-8 shadow-lg rounded-2xl"
    >
      <div className="w-fit p-2 bg-icon">
        <LuSmilePlus className="text-accent text-4xl" />
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <p className="text-xl leading-7 font-bold">{title}</p>
          <p className="text-sm leading-5 font-medium">{description}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="text-lg leading-7 font-bold text-accent">
            Learn More
          </div>
          <BsArrowRightSquareFill className="text-base text-accent" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
