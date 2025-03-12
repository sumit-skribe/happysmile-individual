import { getData } from "@/utils/dataProvider";
import { headers } from "next/headers";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as tldts from "tldts";
import { Fragment } from "react";
import Header from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Section as Whatwedo } from "@/components/whatwedo/section";
import { MissionVision } from "@/components/missionvision/missionvision";
import { Section as FAQs } from "@/components/faqs/section";

const Page = () => {
  // const httpHeaders = headers();
  // const domain = httpHeaders.get("host") as string;
  // const data = getData(domain);
  const data = getData("localhost:3000");

  return (
    <Fragment>
      {data.header && (
        <Header
          logoUrl={data.header.logoUrl}
          buttonText={data.header.buttonText}
          menuItems={data.header.menuItems}
        />
      )}
      {data.whatwedo && (
        <Whatwedo
          benefits={data.whatwedo.benefits}
          image={data.whatwedo.images}
          paragraph={data.whatwedo.paragraph}
        />
      )}
      {data.mission && <MissionVision cards={data.mission.cards} />}
      {data.section && <FAQs faqs={data.section.faqs} />}
      {data.footer && (
        <Footer
          companyName={data.footer.companyName}
          logoSrc={data.footer.logoSrc}
          contactEmail={data.footer.contactEmail}
          contactNumber={data.footer.contactNumber}
        />
      )}
    </Fragment>
  );
};

export default Page;
