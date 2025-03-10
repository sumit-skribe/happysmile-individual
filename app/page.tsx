import { getData } from "@/utils/dataProvider";
import { headers } from "next/headers";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as tldts from "tldts";
import { Fragment } from "react";
import { Hero } from "@/components/hero/hero";
import Header from "@/components/header/header";
import { Section as OurServices } from "@/components/ourservices/section";
import { Section as HowItWorks } from "@/components/howitworks/section";
import { Section as WhyChooseUs } from "@/components/whychooseus/section";

const Page = () => {
  const httpHeaders = headers();
  const domain = httpHeaders.get("host") as string;
  const data = getData(domain);

  return (
    <Fragment>
      {data.header && (
        <Header
          logoUrl={data.header.logoUrl}
          buttonText={data.header.buttonText}
          menuItems={data.header.menuItems}
        />
      )}
      {data.hero && (
        <Hero
          backgroundImage={data.hero.backgroundImage}
          heroImage={data.hero.heroImage}
          location={data.hero.location}
          number={data.hero.number}
          niche={data.hero.niche}
          paragraph={data.hero.paragraph}
        />
      )}
      {data.howitworks && (
        <HowItWorks
          callText={data.howitworks.callText}
          emailText={data.howitworks.emailText}
          appointmentText={data.howitworks.appointmentText}
          phoneNumber={data.howitworks.phoneNumber}
          emailAddress={data.howitworks.emailAddress}
          sectionParagraph={data.howitworks.sectionParagraph}
        />
      )}

      {data.whychooseus && (
        <WhyChooseUs
          benefits={data.whychooseus.benefits}
          paragraph={data.whychooseus.paragraph}
          images={data.whychooseus.images}
        />
      )}

      {data.service && (
        <OurServices
          description={data.service.description}
          subservices={data.service.subservices}
        />
      )}
    </Fragment>
  );
};

export default Page;
