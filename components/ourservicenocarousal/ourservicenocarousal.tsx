import * as React from "react";
import ServicesHeader from "./serviceheader";
import ServiceCard from "./servicecard";

interface OurservicenocarousalProps {
  subservices: { title: string; description: string }[];
  description: string;
}

export const Ourservicenocarousal: React.FC<OurservicenocarousalProps> = ({
  subservices,
  description,
}) => {
  return (
    <div className="bg-secondary-02 font-inter text-color">
      <div className="web-mx py-10 flex flex-col gap-6">
        <ServicesHeader
          title="Our Services"
          subtitle="Services"
          description={description}
        />
        <div className="flex flex-col gap-9 [&>div]:p-3 [&>div]:bg-card md:grid md:grid-cols-3">
          {subservices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
