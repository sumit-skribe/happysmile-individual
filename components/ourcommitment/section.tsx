/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
import { PiPhoneCallBold } from "react-icons/pi";
import { BsArrowRightSquareFill } from "react-icons/bs";
interface SectionProps {
  description: string;
  number: string;
}

// https://pub-26d044217d7d4467b9ed890eae28cf66.r2.dev/5c003d2ec4.png
export const Section: React.FC<SectionProps> = ({ description, number }) => {
  return (
    <>
      <div className="md:grid md:grid-cols-2">
        <div className="image text-color font-inter py-12">
          <div className="web-mx py-5 flex flex-col gap-5 md:mr-0 md:pr-10">
            <p className="text-base leading-6 font-semibold text-right">
              Our commitment
            </p>
            <div>
              <p className="text-4xl leading-10 font-semibold text-right mb-2">
                Excellence in Service:
                <span className="text-accent">Unmatched Quality</span> and
                <span className="text-accent">Precision</span>
              </p>
              <p className="text-xl leading-7 font-medium text-right">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-9">
              <button className="flex flex-row justify-center items-center gap-3 bg-accent rounded-full px-6 py-3 text-card">
                <PiPhoneCallBold className="text-xl" />
                <span className="text-base leading-6 font-bold">{number}</span>
              </button>
              <button className="rounded-full flex flex-row gap-3 justify-center items-center border border-accent px-6 py-3 text-accent">
                <BsArrowRightSquareFill className="text-xl bg-card " />
                <span className="text-base leading-6 font-bold">
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-accent font-inter text-color py-12">
          <div className="text-color bg-accent web-mx flex flex-col gap-5 md:ml-0 md:pl-10">
            <p className="text-base leading-6 font-medium">Booking</p>
            <div className="flex flex-col gap-6">
              <p className="text-3xl leading-9 font-semibold">
                Schedule your appointment now
              </p>
              <form>
                <div className="flex flex-col gap-5">
                  <p className="grid grid-cols-2 gap-5 [&>input]:p-3 [&>input]:placeholder:text-color text-sm font-normal">
                    <input placeholder="First Name" />
                    <input placeholder="Last Name" />
                    <input placeholder="Email Address" />
                    <input placeholder="Phone" />
                  </p>
                  <input
                    className="p-3 placeholder:text-color text-sm font-normal"
                    placeholder="Location to get treatment"
                  />
                </div>
              </form>
              <button className="rounded-full bg-card px-6 py-3 text-accent text-base leading-6 font-bold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
