export interface RootData {
    works: Works;
    services: Services;
    contact: Contact;
  }
  
  export interface Data {}
  
  export interface Works {
    hero: Hero[];
    categories: Category[];
  }
  
  export interface Hero {
    id: number;
    client_name: string;
    project_name: string;
    brand_logo: BrandLogo;
    category_name: string;
    type: string;
    project_year: string;
    credits: Credits;
    tags: string;
    keywords: string;
    journey: string;
    images: Image[];
    videos: Video[];
  }
  
  export interface BrandLogo {
    title: string;
    url: string;
  }
  
  export interface Credits {
    agency: string;
    production_house: string;
    director: string;
    post_house: string;
  }
  
  export interface Image {
    title: string;
    url: string;
  }
  
  export interface Video {
    thumbnail: string;
    title: string;
    url: string;
  }
  
  export interface Category {
    category_id: number;
    category_name: string;
    category_thumbnail: string;
    category_details: CategoryDetail[];
  }
  
  export interface CategoryDetail {
    id: number;
    client_name: string;
    project_name: string;
    brand_logo: BrandLogo2;
    category_name: string;
    type: string;
    project_year: string;
    credits: Credits2;
    tags: string;
    keywords: string;
    journey: string;
    images: Image2[];
    videos: Video2[];
  }
  
  export interface BrandLogo2 {
    title: string;
    url: string;
  }
  
  export interface Credits2 {
    agency: string;
    production_house: string;
    director: string;
    post_house: string;
  }
  
  export interface Image2 {
    title: string;
    url: string;
  }
  
  export interface Video2 {
    thumbnail: string;
    title: string;
    url: string;
  }
  
  export interface Services {
    production: Production[];
    post_house: PostHouse[];
    software: Software[];
  }
  
  export interface Production {
    asset_id: number;
    asset_name: string;
    asset_description: string;
    asset_thumbnail: string;
  }
  
  export interface PostHouse {
    asset_id: number;
    asset_name: string;
    asset_description: string;
    asset_thumbnail: string;
  }
  
  export interface Software {
    software_id: number;
    software_name: string;
    software_thumbnail: string;
    software_url: string;
  }
  
  export interface Contact {
    socials: Social[];
    email: string;
    whatsapp: string;
    website: string;
  }
  
  export interface Social {
    social_id: number;
    social_name: string;
    social_url: string;
  }
  declare global {
    interface Window {
      dataLayer: record<string, string | number>[];
    }
  }
  export type GtagArgs = [
    string,
    ...Array<string | number | Date | Record<string, string | number>>
  ];

 export interface ModalContextData {
    openModal: boolean;
    toggleModal: (val: boolean) => void;
    vidSource: string;
    setVidSource: (val: string) => void;
  }
  export interface DataContext {
    data: RootData | null;
  }
  