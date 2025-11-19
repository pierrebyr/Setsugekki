export interface Member {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Track {
  title: string;
  duration: string;
}

export interface Album {
  title: string;
  year: string;
  label: string;
  description: string;
  trackCount: number;
  cover: string;
  link?: string;
  tracklist: Track[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TourDate {
  date: string;
  venue: string;
  city: string;
  country: string;
  status: 'Available' | 'Sold Out' | 'Few Tickets';
  ticketLink?: string;
}

export interface PressQuote {
  source: string;
  quote: string;
  rating?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  category: string;
  content: string;
  image?: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PHILOSOPHY = 'philosophy',
  MUSIC = 'music',
  PRESS = 'press',
  LIVE = 'live',
  CONTACT = 'contact'
}