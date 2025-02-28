import { getData } from "@/utils/dataProvider";
import { headers } from "next/headers";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as tldts from "tldts";
import { Fragment } from "react";
import { Hero } from "@/components/hero/hero";
import Header from "@/components/header/header";

const Page = () => {
  const httpHeaders = headers();
  const domain = httpHeaders.get("host") as string;
  const data = getData(domain);

  return (
    <Fragment>
      <Header {...data.header} />
      <Hero {...data.hero} />
    </Fragment>
  );
};

export default Page;
