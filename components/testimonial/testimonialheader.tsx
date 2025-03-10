import * as React from "react";

interface TestimonialHeaderProps {
  description: string;
}

export const TestimonialHeader: React.FC<TestimonialHeaderProps> = ({
  description,
}) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <p className="text-center text-base leading-6 font-medium">
          Testimonials
        </p>
        <h2 className="text-4xl leading-10 font-semibold text-center">
          What they <span className="text-accent">say about us</span>
        </h2>
      </div>
      <p className="text-center text-xl leading-7 font-normal mb-8">{description}</p>
    </>
  );
};
