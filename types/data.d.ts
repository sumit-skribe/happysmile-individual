export interface HeaderData {
  logoUrl: string;
  menuItems: string[];
  buttonText: string;
}

export interface HeroData {
  backgroundImage: string;
  heroImage: string;
  niche: string;
  location: string;
  number: string;
  paragraph: string;
}

export interface SiteData {
  niche: string;
  location: string;
  websiteName: string;
  favicon: string;
  header: HeaderData;
  hero: HeroData;
}
