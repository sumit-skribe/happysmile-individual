/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";
import * as React from "react";
import ServicesHeader from "./serviceheader";
import ServiceCard from "./servicecard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useBreakpoint from "./useBreakpoint";

interface SectionProps {
  subservices: Array<{ title: string; description: string }>;
  description: string;
}

export const Section: React.FC<SectionProps> = ({
  subservices = [],
  description = "Looking for Dentist services near you? Find reliable and experienced Dental Services in the USA.",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const breakpoint = useBreakpoint();

  React.useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <>
      <div className="bg-secondary-02 font-inter text-color">
        <div className="web-mx py-10 flex flex-col gap-6">
          <ServicesHeader
            title="Our Services"
            subtitle="Services"
            description={description}
          />

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide flex flex-col gap-9 [&>div]:p-3 [&>div]:bg-card md:grid md:grid-cols-3">
                {breakpoint === "sm" &&
                  subservices
                    .slice(0, 3)
                    .map((service, index) => (
                      <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
                {(breakpoint === "md" || breakpoint === "lg") &&
                  subservices
                    .slice(0, 6)
                    .map((service, index) => (
                      <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
              </div>
              <div className="embla__slide flex flex-col gap-9 [&>div]:p-3 [&>div]:bg-card md:grid md:grid-cols-3">
                {breakpoint === "sm" &&
                  subservices
                    .slice(3, 6)
                    .map((service, index) => (
                      <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
                {(breakpoint === "md" || breakpoint === "lg") &&
                  subservices
                    .slice(7, 12)
                    .map((service, index) => (
                      <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
