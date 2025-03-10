import * as React from "react";
import { BsCheck2Circle, BsClock } from "react-icons/bs";
interface SectionProps {
  benefits: string[];
  paragraph: string;
  images: string[];
}

interface BenefitsListProps {
  benefits: string[];
}

const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <>
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center gap-1">
          <BsCheck2Circle className="text-card text-base bg-accent" />
          <p className="text-base leading-6 font-normal">{benefit}</p>
        </div>
      ))}
    </>
  );
};

export const Section: React.FC<SectionProps> = ({
  benefits,
  paragraph,
  images,
}) => {
  return (
    <>
      <div className="web-mx bg-card py-12">
        <div className="font-inter text-color grid grid-cols-1  md:grid-cols-[3fr,2fr]">
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 px-3 gap-5">
              <div className="bg-cyan-500 text-white px-5 py-3">
                <BsClock className="text-4xl" />
                <p className="text-5xl leading-non font-bold">13+</p>
                <p className="leading-7 font-bold">Years of experience</p>
              </div>
              <div className="row-span-2 flex flex-col justify-center">
                <img className="h-80 object-cover" src={images[0]} />
              </div>
              <img src={images[1]} />
            </div>
          </div>
          <div className="px-3  flex flex-col gap-8">
            <div>
              <div className="flex flex-col gap-4">
                <p className="text-base leading-6 font-medium">Why Choose us</p>
                <p className="text-4xl leading-10 font-bold">
                  Why should <span className="text-accent">you choose</span> us?
                </p>
              </div>
              <p className="text-base leading-6 font-normal">{paragraph}</p>
            </div>
            <BenefitsList benefits={benefits} />
          </div>
        </div>
      </div>
    </>
  );
};
