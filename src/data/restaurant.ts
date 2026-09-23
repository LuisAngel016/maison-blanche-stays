import type { Lang } from '../i18n/utils';

export type RestaurantHighlight = {
  id: string;
  slug: string;
  image: string;
  gallery: string[];
  cardTitle: Record<Lang, string>;
  cardDescription: Record<Lang, string>;
  long: Record<Lang, string[]>;
  highlights: Record<Lang, string[]>;
  quote?: Record<Lang, string>;
  price?: string;
  pairing?: Record<Lang, string>;
  courses?: { name: Record<Lang, string>; detail: Record<Lang, string> }[];
};

export const restaurantHighlights: RestaurantHighlight[] = [
  {
    id: 'chef',
    slug: 'chef-marco-elia',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80&fit=crop',
    ],
    cardTitle: { es: 'Chef Marco Elia', en: 'Chef Marco Elia' },
    cardDescription: {
      es: 'Una cocina íntima de producto local, mar y fuego lento.',
      en: 'An intimate kitchen rooted in local produce, sea and slow fire.',
    },
    long: {
      es: [
        'Marco Elia creció entre las cocinas de su abuela en Ravello y los muelles de pescadores de Positano. Después de una década en cocinas con estrella en Milán y Copenhague, volvió a la costa para cocinar lo que este territorio le da: pescado del día, limones de terraza y aceite de oliva de colinas vecinas.',
        'Su cocina es de producto y fuego lento: pocos ingredientes, tratados con precisión. El menú cambia cada temporada, pero la regla no: nada viaja más de treinta kilómetros para llegar al plato.',
      ],
      en: [
        "Marco Elia grew up between his grandmother's kitchens in Ravello and the fishermen's docks of Positano. After a decade in starred kitchens in Milan and Copenhagen, he returned to the coast to cook what this land gives: fish of the day, terrace lemons and olive oil from neighbouring hills.",
        'His cooking is about produce and slow fire: few ingredients, treated with precision. The menu changes every season, but the rule does not: nothing travels more than thirty kilometres to reach the plate.',
      ],
    },
    highlights: {
      es: [
        'Producto local: nada viaja más de 30 km',
        'Pasta fresca amasada cada mañana',
        'Fuego lento de leña de olivo',
      ],
      en: [
        'Local produce: nothing travels more than 30 km',
        'Fresh pasta kneaded every morning',
        'Slow olive-wood fire',
      ],
    },
    quote: {
      es: 'Cocinar es recordar de dónde venimos.',
      en: 'To cook is to remember where we come from.',
    },
  },
  {
    id: 'menu',
    slug: 'menu-degustacion',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80&fit=crop',
    ],
    cardTitle: { es: 'Menú degustación', en: 'Tasting menu' },
    cardDescription: {
      es: '8 pasos de temporada con maridaje opcional.',
      en: '8 seasonal courses with optional wine pairing.',
    },
    long: {
      es: [
        'Ocho pasos que siguen el calendario de la costa. El menú se escribe cada mañana según lo que llega del mar y del mercado de Positano; por eso nunca es exactamente el mismo.',
        'Se sirve en el salón principal o en la terraza, con la vista como último ingrediente.',
      ],
      en: [
        "Eight courses that follow the coast's calendar. The menu is written every morning according to what arrives from the sea and Positano's market; that is why it is never exactly the same.",
        'Served in the main dining room or on the terrace, with the view as the final ingredient.',
      ],
    },
    highlights: {
      es: ['Cambia cada temporada', 'Opciones vegetarianas a pedido', 'Servicio en terraza según clima'],
      en: ['Changes every season', 'Vegetarian options on request', 'Terrace service, weather permitting'],
    },
    price: '$180',
    pairing: { es: 'Maridaje opcional +$90', en: 'Optional wine pairing +$90' },
    courses: [
      {
        name: { es: 'Amuse-bouche', en: 'Amuse-bouche' },
        detail: { es: 'Bocado de bienvenida con limón de Amalfi', en: 'Welcome bite with Amalfi lemon' },
      },
      {
        name: { es: 'Crudo del Tirreno', en: 'Tyrrhenian crudo' },
        detail: { es: 'Pescado del día, aceite de oliva y cítricos', en: 'Fish of the day, olive oil and citrus' },
      },
      {
        name: { es: 'Pasta fresca de la casa', en: 'House-made fresh pasta' },
        detail: { es: 'Tagliolini con mantequilla de limón y botarga', en: 'Tagliolini with lemon butter and bottarga' },
      },
      {
        name: { es: 'Risotto ai frutti di mare', en: 'Risotto ai frutti di mare' },
        detail: { es: 'Arroz carnaroli, azafrán y frutos del mar', en: 'Carnaroli rice, saffron and seafood' },
      },
      {
        name: { es: 'Pescado del día', en: 'Fish of the day' },
        detail: { es: 'A la brasa de leña de olivo, hierbas del jardín', en: 'Olive-wood grilled, garden herbs' },
      },
      {
        name: { es: 'Sorbete de limón', en: 'Lemon sorbet' },
        detail: { es: 'Intermezzo con limón de terraza', en: 'Terrace-lemon intermezzo' },
      },
      {
        name: { es: 'Segundo de temporada', en: 'Seasonal main' },
        detail: {
          es: 'Ternera de colinas vecinas o verduras del huerto',
          en: 'Neighbouring-hill veal or garden vegetables',
        },
      },
      {
        name: { es: 'Postre cítrico', en: 'Citrus dessert' },
        detail: { es: 'Delizia al limone y almendra tostada', en: 'Delizia al limone with toasted almond' },
      },
    ],
  },
];
