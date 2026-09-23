import type { Lang } from '../i18n/utils';
import type { RouteKey } from './routes';

export const SITE_NAME = 'Maison Blanche';
export const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=85&fit=crop';

export const HOTEL_CONTACT = {
  address: 'Via Belsito 42, Positano (SA), Italy',
  phone: '+39 089 123 4567',
  email: 'reservations@maisonblanche.it',
  hours: 'Concierge: 24/7 · Restaurant: 12:30–23:00 · Spa: 09:00–20:00',
};

export const footerContent: Record<Lang, { newsletter: string; hotel: { label: string; anchor?: string }[]; services: string[] }> = {
  es: {
    newsletter: 'Sumate a nuestra carta curada con novedades de temporada y acceso anticipado.',
    hotel: [
      { label: 'Nuestra historia', anchor: '#historia' },
      { label: 'Sustentabilidad' },
      { label: 'Carreras' },
    ],
    services: ['Concierge', 'Transfers privados', 'Planificación de eventos'],
  },
  en: {
    newsletter: 'Join our curated letter for seasonal updates and exclusive early access.',
    hotel: [
      { label: 'Our history', anchor: '#story' },
      { label: 'Sustainability' },
      { label: 'Careers' },
    ],
    services: ['Concierge', 'Private transfers', 'Event planning'],
  },
};

export const pageSeo: Record<RouteKey, Record<Lang, { title: string; description: string }>> = {
  home: {
    es: {
      title: 'Maison Blanche | Hotel Boutique de Lujo Costa Amalfitana',
      description: 'Una experiencia editorial frente al mar en la Costa Amalfitana.',
    },
    en: {
      title: 'Maison Blanche | Luxury Boutique Hotel Amalfi Coast',
      description: 'A sun-drenched editorial stay on the Amalfi Coast.',
    },
  },
  suites: {
    es: {
      title: 'Suites y habitaciones | Maison Blanche',
      description: 'Una colección curada de suites al mar, habitaciones íntimas y villas privadas.',
    },
    en: {
      title: 'Suites & rooms | Maison Blanche',
      description: 'A curated collection of sea-facing suites, intimate rooms and private villas.',
    },
  },
  restaurant: {
    es: {
      title: 'Il Ristorante | Maison Blanche',
      description: 'Cocina mediterránea guiada por estacionalidad y terroir amalfitano.',
    },
    en: {
      title: 'The Restaurant | Maison Blanche',
      description: 'Mediterranean cuisine guided by seasonality and the Amalfi terroir.',
    },
  },
  spa: {
    es: {
      title: 'Spa & Benessere | Maison Blanche',
      description: 'Rituales inspirados en sal marina, cítricos y quietud restauradora.',
    },
    en: {
      title: 'Spa & Wellness | Maison Blanche',
      description: 'Rituals inspired by sea salt, citrus and restorative stillness.',
    },
  },
  gallery: {
    es: {
      title: 'Galería | Maison Blanche',
      description: 'Bitácora visual con vistas, interiores, gastronomía y bienestar del hotel.',
    },
    en: {
      title: 'Gallery | Maison Blanche',
      description: 'A visual journal of the hotel, suites, gastronomy and wellness rituals.',
    },
  },
  reserve: {
    es: {
      title: 'Reservá tu estadía | Maison Blanche',
      description: 'Solicitá tu reserva y nuestro concierge te responderá en menos de 24 horas.',
    },
    en: {
      title: 'Reserve your stay | Maison Blanche',
      description: 'Send your reservation request and our concierge will reply within 24 hours.',
    },
  },
};
