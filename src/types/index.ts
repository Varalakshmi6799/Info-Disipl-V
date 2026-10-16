export type DivisionType = 'all' | 'media' | 'civil';

export type ServiceCategory = 
  | 'transit-media'
  | 'indoor-signage'
  | 'digital-marketing'
  | 'civil-construction'
  | 'public-works';

export interface ServiceItem {
  id: string;
  division: 'media' | 'civil';
  category: ServiceCategory;
  title: string;
  tagline: string;
  summary: string;
  paragraphs: string[];
  keyHighlights: string[];
  specs: { label: string; value: string }[];
  clientShowcase?: string;
  iconName: string;
  badge: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  division: 'media' | 'civil';
  category: ServiceCategory;
  categoryLabel: string;
  location: string;
  year: string;
  heroImage: string;
  galleryImages: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  specifications: { label: string; value: string }[];
  featured?: boolean;
}

export interface BranchLocation {
  id: string;
  name: string;
  type: 'Headquarters' | 'Branch Office';
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
  description: string;
  servicesCovered: string[];
  mapEmbedUrl: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  department: 'media-advertising' | 'civil-construction';
  serviceType: string;
  projectLocation: string;
  estimatedBudget: string;
  timeline: string;
  projectBrief: string;
}
