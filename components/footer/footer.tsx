/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
import { Logo } from "../logo/logo";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
export interface FooterProps {
  logoSrc: string;
  companyName: string;
  contactEmail: string;
  contactNumber: string;
}

export const Footer: React.FC<FooterProps> = ({
  logoSrc,
  companyName,
  contactEmail,
  contactNumber,
}) => {
  return (
    <div className="bg-secondary-02 py-12 font-inter">
      <div className="flex lg:flex-row lg:justify-between web-mx flex-col justify-start gap-8">
        <div className="flex flex-col gap-24">
          <Logo src={logoSrc} />

          <div>
            <div className="text-color flex flex-row gap-3 items-center">
              <MdLocationPin className="text-xl font-medium" />
              <span className="text-xl leading-7 font-medium">
                {companyName}
              </span>
            </div>
            <div className="text-color flex flex-row gap-3 items-center">
              <PiPhoneCallBold className="text-xl font-medium" />
              <span className="text-xl font-medium">{contactNumber}</span>
            </div>
            <div className="text-color flex flex-row gap-3 items-center">
              <MdEmail className="text-xl font-medium" />
              <span className="text-xl font-medium">{contactEmail}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-24">
          <div className="text-color flex flex-col gap-9">
            <h2 className="text-2xl leading-8 font-bold">Company</h2>
            <div className="text-xl leading-7 font-medium flex flex-col gap-7">
              <p>About</p>
              <p>Contact</p>
              <p>Testimonials</p>
              <p>Free Trial</p>
            </div>
          </div>
          <div className="text-color flex flex-col gap-9">
            <h2 className="text-2xl leading-8 font-bold">Resources</h2>
            <div className="text-xl leading-7 font-medium flex flex-col gap-7">
              <p>Blog</p>
              <p>FAQs</p>
              <p>Support</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
