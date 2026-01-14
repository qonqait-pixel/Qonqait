
export enum LeadStatus {
  NEW = 'New',
  CONTACTED = 'Contacted',
  QUALIFIED = 'Qualified',
  CLOSED = 'Closed'
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  industry: string;
  currentSystem: string;
  goal: string;
  status: LeadStatus;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface ThemeConfig {
  primaryColor: string;
  accentColor: string;
  showStats: boolean;
  showTestimonials: boolean;
}
