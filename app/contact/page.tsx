import { Footer } from "@/components/footer/footer";
import { Section as GetConnected } from "@/components/getconnected/section";
import Header from "@/components/header/header";
import { getData } from "@/utils/dataProvider";
import { headers } from "next/headers";

export default function Contact() {
  const httpHeaders = headers();
  const domain = httpHeaders.get("host") as string;
  const data = getData(domain);

  return (
    <div>
      <Header
        buttonText={data.header.buttonText}
        logoUrl={data.header.logoUrl}
        menuItems={data.header.menuItems}
      />
      <GetConnected description={data.contactus.description} />
      <Footer
        companyName={data.footer.companyName}
        logoSrc={data.footer.logoSrc}
        contactEmail={data.footer.contactEmail}
        contactNumber={data.footer.contactNumber}
      />
    </div>
  );
}
