/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
import { BsCheck2Circle } from "react-icons/bs";
interface SectionProps {
  benefits: string[];
  paragraph: string;
  image: string;
}

export const Section: React.FC<SectionProps> = ({
  benefits,
  paragraph,
  image,
}) => {
  return (
    <div className="bg-secondary-01">
      <div className="web-mx  py-12">
        <div className="font-inter text-color grid grid-cols-1  md:grid-cols-[3fr,2fr]">
          <div className="px-3  flex flex-col gap-8">
            <div>
              <div className="flex flex-col gap-4">
                <p className="text-base leading-6 font-medium">What We Do</p>
                <p className="text-4xl leading-10 font-bold">
                  Superior Care with{" "}
                  <span className="text-accent">Advanced Technology</span> and
                  Expertise
                </p>
              </div>
              <p className="text-base leading-6 font-normal">{paragraph}</p>
            </div>
            <div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-1">
                  <BsCheck2Circle className="text-card text-base bg-accent" />
                  <p className="text-base leading-6 font-normal">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={image} width={"560px"} height={"504px"} />
          </div>
        </div>
      </div>
    </div>
  );
};
