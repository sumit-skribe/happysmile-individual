/* header */
export interface HeaderData {
  logoUrl: string;
  menuItems: string[];
  buttonText: string;
  _id: string;
}

/* hero  */
export interface HeroData {
  backgroundImage: string;
  heroImage: string;
  niche: string;
  location: string;
  number: string;
  paragraph: string;
  _id: string;
}

/* our services  */
export interface Subservice {
  title: string;
  description: string;
  _id: string;
}

export interface OurServicesData {
  subservices: Subservice[];
  description: string;
  _id: string;
}

/* how it works */
export interface HowItWorksData {
  callText: string;
  emailText: string;
  appointmentText: string;
  phoneNumber: string;
  emailAddress: string;
  sectionParagraph: string;
}

/* site data */
export interface SiteData {
  niche: string;
  location: string;
  websiteName: string;
  favicon: string;
  header: HeaderData;
  hero: HeroData;
  service: OurServicesData;
  howitworks: HowItWorksData;
}
