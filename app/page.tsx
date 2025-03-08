import { getData } from "@/utils/dataProvider";
import { headers } from "next/headers";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as tldts from "tldts";
import { Fragment } from "react";
import { Hero } from "@/components/hero/hero";
import Header from "@/components/header/header";
import { Section as OurServices } from "@/components/ourservices/section";

const Page = () => {
  const httpHeaders = headers();
  const domain = httpHeaders.get("host") as string;
  const data = getData(domain);

  return (
    <Fragment>
      <Header
        logoUrl={data.header.logoUrl}
        buttonText={data.header.buttonText}
        menuItems={data.header.menuItems}
      />
      <Hero
        backgroundImage={data.hero.backgroundImage}
        heroImage={data.hero.heroImage}
        location={data.hero.location}
        number={data.hero.number}
        niche={data.hero.niche}
        paragraph={data.hero.paragraph}
      />
      <OurServices
        description={data.ourservices.description}
        subservices={data.ourservices.subservices}
      />
    </Fragment>
  );
};

export default Page;
