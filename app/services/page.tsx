import { Footer } from "@/components/footer/footer";
import Header from "@/components/header/header";
import { getData } from "@/utils/dataProvider";
import { headers } from "next/headers";
import { Fragment } from "react";
import { Section as FAQs } from "@/components/faqs/section";
import { ServiceBooking } from "@/components/servicebooking/ServiceBooking";
import { Ourservicenocarousal } from "@/components/ourservicenocarousal/ourservicenocarousal";

export default function Services() {
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
      <ServiceBooking />
      <Ourservicenocarousal
        subservices={data.service.subservices}
        description={data.service.description}
      />
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
}
