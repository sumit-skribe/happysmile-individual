import * as React from "react";
import Image from "next/image";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { PiPhoneCallBold } from "react-icons/pi";

export interface HeroProps {
  backgroundImage: string;
  heroImage: string;
  niche: string;
  paragraph: string;
  location: string;
  number: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  niche,
  location,
  paragraph,
  number,
  heroImage,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
      className="font-inter"
    >
      <div className="web-mx text-color py-12 flex flex-col-reverse lg:flex-row gap-6">
        <div className="flex flex-col gap-16 lg:flex-1">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl leading-7 font-medium">
              Trusted care for you
            </h2>
            <h1 className="text-7xl leading-none font-extrabold">
              {niche} near me in <span className="text-accent">{location}</span>
            </h1>
            <p className="text-xl leading-7 font-medium">{paragraph}</p>
          </div>
          <div className="flex flex-row gap-9">
            <button className="flex flex-row justify-center items-center gap-3 bg-accent rounded-full px-6 py-3 text-card">
              <PiPhoneCallBold className="text-xl" />
              <span className="text-base leading-6 font-bold">{number}</span>
            </button>
            <button className="rounded-full flex flex-row gap-3 justify-center items-center border border-accent px-6 py-3 text-accent">
              <BsArrowRightSquareFill className="text-xl bg-card " />
              <span className="text-base leading-6 font-bold">Contact Us</span>
            </button>
          </div>
        </div>
        <div className="lg:flex-1">
          <div className="w-[580px] h-[480px] overflow-hidden relative">
            <Image
              src={heroImage}
              alt="hero"
              layout="fill"
              loading="lazy"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
