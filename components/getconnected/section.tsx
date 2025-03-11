/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
interface Section {
  description: string;
}

export const Section: React.FC<Section> = ({ description }) => {
  return (
    <div className="font-inter web-mx bg-card py-12">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-color text-5xl leading-none font-bold">
            Get <span className="text-accent">Connected</span> with us
          </p>
          <p className="text-color text-xl leading-7 font-normal">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-6 bg-accent text-color py-12 px-10">
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
          <button className="rounded-full bg-card px-6 py-3 text-accent text-base leading-6 font-bold self-center">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
