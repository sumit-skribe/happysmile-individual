import * as React from "react";
import { FaStar } from "react-icons/fa";

interface TestimonialContentProps {
  text: string;
  author: string;
}

const TestimonialContent: React.FC<TestimonialContentProps> = ({
  text,
  author,
}) => {
  return (
    <div
      className="embla__slide flex flex-col gap-8 shadow-md bg-card py-28 px-16"
      id="testimonial-card"
    >
      <div className="flex flex-row gap-1 justify-center">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <FaStar key={starIndex} className="text-accent" />
        ))}
      </div>
      <p className="text-center text-2xl leading-8 font-semibold">{text}</p>
      <p className="text-center text-base font-semibold leading-6">{author}</p>
    </div>
  );
};

export default TestimonialContent;
