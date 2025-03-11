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

/* why choose us */
export interface WhyChooseUsData {
  benefits: string[];
  paragraph: string;
  images: string[];
}

/* commitment */
export interface CommitmentData {
  description: string;
  number: string;
}

/* testimonials */
export interface Testimonial {
  text: string;
  author: string;
}

export interface TestimonialsData {
  description: string;
  testimonials: Testimonial[];
}

/* footer */
export interface FooterData {
  logoSrc: string;
  companyName: string;
  contactEmail: string;
  contactNumber: string;
}

/* what we do */
export interface WhatWeDoData {
  benefits: string[];
  paragraph: string;
  images: string;
}

/* mission */
export interface MissionCard {
  src: string;
  heading: string;
  paragraph: string;
}

export interface MissionData {
  cards: MissionCard[];
}

/* faqs */
export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQsData {
  faqs: FAQ[];
}

/* contact us */
export interface ContactUsData {
  description: string;
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
  whychooseus: WhyChooseUsData;
  commitment: CommitmentData;
  testimonial: TestimonialsData;
  footer: FooterData;
  whatwedo: WhatWeDoData;
  mission: MissionData;
  section: FAQsData;
  contactus: ContactUsData;
}
