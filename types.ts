export interface Product {
  id: string;
  title: string;
  author?: string;
  price: number;
  image: string;
  type: 'book' | 'supplement';
  description: string;
}

export interface Service {
  id: string;
  title: string;
  durationMinutes: number;
  price: number;
  description: string;
  features: string[];
}

export interface AppInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  inspiration: string;
  image: string;
  downloadLink: string;
  colorTheme: string;
}
