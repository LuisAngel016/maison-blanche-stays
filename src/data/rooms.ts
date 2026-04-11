export type Room = {
  id: string;
  slug: string;
  category: 'suites' | 'habitaciones' | 'villa';
  nameEs: string;
  nameEn: string;
  descEs: string;
  descEn: string;
  features: string[];
  price: string;
  image: string;
};

export const rooms: Room[] = [
  {
    id: 'suite-tramonto',
    slug: 'suite-tramonto',
    category: 'suites',
    nameEs: 'Suite Tramonto',
    nameEn: 'Suite Tramonto',
    descEs: 'Balcón panorámico con vista directa al atardecer sobre Positano.',
    descEn: 'Panoramic balcony with direct sunset views over Positano.',
    features: ['Sea View', '65 m²', 'King Bed'],
    price: '$890',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85&fit=crop',
  },
  {
    id: 'suite-aurora',
    slug: 'suite-aurora',
    category: 'suites',
    nameEs: 'Suite Aurora',
    nameEn: 'Suite Aurora',
    descEs: 'Suite luminosa con terraza privada y bañera de mármol.',
    descEn: 'Luminous suite with private terrace and marble tub.',
    features: ['Terrace', '58 m²', 'Breakfast'],
    price: '$840',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=85&fit=crop',
  },
  {
    id: 'suite-limoneto',
    slug: 'suite-limoneto',
    category: 'suites',
    nameEs: 'Suite Limoneto',
    nameEn: 'Suite Limoneto',
    descEs: 'Suite bañada de luz con balcón privado y paleta inspirada en limoneros amalfitanos.',
    descEn: 'Light-filled suite with private balcony and palette inspired by Amalfi lemon groves.',
    features: ['Sea Breeze', '50 m²', 'King Bed'],
    price: '$760',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85&fit=crop',
  },
  {
    id: 'deluxe-azure',
    slug: 'deluxe-azure',
    category: 'habitaciones',
    nameEs: 'Deluxe Azure',
    nameEn: 'Deluxe Azure',
    descEs: 'Interiores serenos inspirados en los tonos del mar Tirreno.',
    descEn: 'Serene interiors inspired by the Tyrrhenian sea hues.',
    features: ['Balcony', '42 m²', 'Smart TV'],
    price: '$690',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&q=85&fit=crop',
  },
  {
    id: 'camera-classica',
    slug: 'camera-classica',
    category: 'habitaciones',
    nameEs: 'Camera Classica',
    nameEn: 'Classic Room',
    descEs: 'Habitación íntima con textiles italianos y vista al jardín.',
    descEn: 'Intimate room with Italian textiles and garden view.',
    features: ['Garden', '32 m²', 'Queen Bed'],
    price: '$560',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=85&fit=crop',
  },
  {
    id: 'camera-serena',
    slug: 'camera-serena',
    category: 'habitaciones',
    nameEs: 'Camera Serena',
    nameEn: 'Serena Room',
    descEs: 'Refugio cálido con luz natural, rincón de lectura y textiles en tonos arena.',
    descEn: 'Warm retreat with natural light, a reading corner and sand-toned textiles.',
    features: ['Reading Nook', '36 m²', 'Rain Shower'],
    price: '$610',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=85&fit=crop',
  },
  {
    id: 'villa-bianca',
    slug: 'villa-bianca',
    category: 'villa',
    nameEs: 'Villa Bianca',
    nameEn: 'Villa Bianca',
    descEs: 'Máxima privacidad con jardín personal y plunge pool.',
    descEn: 'Ultimate privacy with a private garden and plunge pool.',
    features: ['Pool', '120 m²', 'Butler Service'],
    price: '$2,650',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85&fit=crop',
  },
  {
    id: 'villa-limonaia',
    slug: 'villa-limonaia',
    category: 'villa',
    nameEs: 'Villa Limonaia',
    nameEn: 'Villa Limonaia',
    descEs: 'Villa privada entre limoneros con lounge exterior y vista abierta al mar.',
    descEn: 'Private villa among lemon trees with an outdoor lounge and open sea views.',
    features: ['Private Garden', '105 m²', 'Concierge'],
    price: '$2,350',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=85&fit=crop',
  },
  {
    id: 'villa-marealto',
    slug: 'villa-marealto',
    category: 'villa',
    nameEs: 'Villa Marealto',
    nameEn: 'Villa Marealto',
    descEs: 'Residencia panorámica con terraza infinita, cocina privada y vistas abiertas al horizonte.',
    descEn: 'Panoramic residence with an infinity terrace, private kitchen and open horizon views.',
    features: ['Infinity Terrace', '148 m²', 'Private Chef'],
    price: '$3,150',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&fit=crop',
  },
];
