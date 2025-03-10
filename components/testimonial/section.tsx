"use client";
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import TestimonialContent from "./testimonialcontent";
import { TestimonialHeader } from "./testimonialheader";

interface SectionProps {
  description: string;
  testimonials: { text: string; author: string }[];
}

export const Section: React.FC<SectionProps> = ({
  description,
  testimonials = [],
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  React.useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <>
      <div className="image py-12">
        <div className="font-inter web-mx text-color">
          <TestimonialHeader description={description} />
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial, index) => (
                <TestimonialContent key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
