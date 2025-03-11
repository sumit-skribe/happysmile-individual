/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
interface ServiceBookingProps {}

export const ServiceBooking: React.FC<ServiceBookingProps> = ({}) => {
  return (
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
          <button className="rounded-full bg-card px-6 py-3 text-accent text-base leading-6 font-bold self-start">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
