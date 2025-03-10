/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { PiNotebook, PiPhoneCallLight } from "react-icons/pi";
import { TbMail } from "react-icons/tb";

interface SectionProps {
  callText: string;
  emailText: string;
  appointmentText: string;
  phoneNumber: string;
  emailAddress: string;
  sectionParagraph: string;
}

export const Section: React.FC<SectionProps> = ({
  callText,
  emailText,
  appointmentText,
  phoneNumber,
  emailAddress,
  sectionParagraph,
}) => {
  return (
    <>
      <div className="bg-secondary-01 font-inter text-color py-12">
        <div className="web-mx mb-2">
          <p className="text-base leading-6 font-normal mb-5">How it works</p>
          <h2 className="text-4xl leading-10 font-bold mb-2">
            Let us <span className="text-accent">take care</span> of your need
          </h2>
          <p className="text-xl leading-7 font-normal mb-10">
            {sectionParagraph}
          </p>
        </div>
        <div className="web-mx flex flex-col gap-5 [&>div]:p-3 md:flex-row [&>div]:flex-1 lg:gap-14">
          <div className="flex flex-col gap-6 bg-card rounded-xl shadow-md">
            <div className="w-fit p-3 bg-icon">
              <PiPhoneCallLight className="text-4xl text-accent" />
            </div>
            <div className="md:flex-grow">
              <p className="text-xl leading-7 font-bold mb-2">Give us a call</p>
              <p className="text-base leading-6 font-normal">{callText}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-sm leading-5 font-bold">{phoneNumber}</div>
              <BsArrowRightSquareFill className="text-base text-accent" />
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-card rounded-xl shadow-md">
            <div className="w-fit p-3 bg-icon">
              <TbMail className="text-4xl text-accent" />
            </div>
            <div className="md:flex-grow">
              <p className="text-xl leading-7 font-bold mb-2">
                Send us an email
              </p>
              <p className="text-base leading-6 font-normal">{emailText}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-sm leading-5 font-bold">{emailAddress}</div>
              <BsArrowRightSquareFill className="text-base text-accent" />
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-card rounded-xl shadow-md">
            <div className="w-fit p-3 bg-icon">
              <PiNotebook className="text-4xl text-accent" />
            </div>
            <div className="md:flex-grow">
              <p className="text-xl leading-7 font-bold mb-2">
                Book your appoinment
              </p>
              <p className="text-base leading-6 font-normal">
                {appointmentText}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-sm leading-5 font-bold">Book now</div>
              <BsArrowRightSquareFill className="text-base text-accent" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
