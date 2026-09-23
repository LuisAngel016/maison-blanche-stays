export type Room = {
  id: string;
  slug: string;
  category: 'suites' | 'habitaciones' | 'villa';
  nameEs: string;
  nameEn: string;
  descEs: string;
  descEn: string;
  longEs: string[];
  longEn: string[];
  highlightsEs: string[];
  highlightsEn: string[];
  features: string[];
  price: string;
  image: string;
  gallery: string[];
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
    longEs: [
      'La Tramonto ocupa el ala oeste de la casa, donde el sol se despide. Su balcón privado es primera fila del atardecer sobre Positano: dos butacas de lino, una mesa baja y el rumor del mar como única banda sonora.',
      'Adentro, techos altos, cal blanca y textiles crudos mantienen el aire liviano. El baño, revestido en mármol local, guarda una ducha de lluvia y amenidades de la casa.',
    ],
    longEn: [
      'The Tramonto occupies the west wing of the house, where the sun says goodbye. Its private balcony is front row to the sunset over Positano: two linen chairs, a low table and the sound of the sea as the only soundtrack.',
      'Inside, high ceilings, white lime and raw textiles keep the air light. The bathroom, clad in local marble, holds a rain shower and the house amenities.',
    ],
    highlightsEs: [
      'Balcón privado con vista al mar',
      'Baño en mármol con ducha de lluvia',
      'Ropa de cama Frette en lino',
      'Minibar curado por nuestro sommelier',
    ],
    highlightsEn: [
      'Private sea-view balcony',
      'Marble bathroom with rain shower',
      'Frette linen bedding',
      'Minibar curated by our sommelier',
    ],
    features: ['Sea View', '65 m²', 'King Bed'],
    price: '$890',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&q=85&fit=crop',
    ],
  },
  {
    id: 'suite-aurora',
    slug: 'suite-aurora',
    category: 'suites',
    nameEs: 'Suite Aurora',
    nameEn: 'Suite Aurora',
    descEs: 'Suite luminosa con terraza privada y bañera de mármol.',
    descEn: 'Luminous suite with private terrace and marble tub.',
    longEs: [
      'Aurora despierta con la casa: es la primera suite en recibir la luz de la mañana. Su terraza privada, cubierta de jazmín, invita a desayunar afuera incluso en invierno.',
      'La bañera de mármol, tallada a mano por artesanos de la costa, es el detalle que nuestros huéspedes nunca olvidan. Un escritorio de nogal completa el rincón de trabajo para quien viaja sin desconectar del todo.',
    ],
    longEn: [
      'Aurora wakes with the house: it is the first suite to receive the morning light. Its private jasmine-covered terrace invites breakfast outside even in winter.',
      'The marble tub, hand-carved by craftsmen from the coast, is the detail our guests never forget. A walnut desk completes the workspace corner for those who travel without fully disconnecting.',
    ],
    highlightsEs: [
      'Terraza privada cubierta de jazmín',
      'Bañera de mármol tallada a mano',
      'Desayuno servido en la terraza',
      'Escritorio de nogal y Wi-Fi de fibra',
    ],
    highlightsEn: [
      'Private jasmine-covered terrace',
      'Hand-carved marble tub',
      'Breakfast served on the terrace',
      'Walnut desk and fibre Wi-Fi',
    ],
    features: ['Terrace', '58 m²', 'Breakfast'],
    price: '$840',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85&fit=crop',
    ],
  },
  {
    id: 'suite-limoneto',
    slug: 'suite-limoneto',
    category: 'suites',
    nameEs: 'Suite Limoneto',
    nameEn: 'Suite Limoneto',
    descEs: 'Suite bañada de luz con balcón privado y paleta inspirada en limoneros amalfitanos.',
    descEn: 'Light-filled suite with private balcony and palette inspired by Amalfi lemon groves.',
    longEs: [
      'Inspirada en el limonetal que abraza la casa, la Limoneto combina verdes suaves, cerámicas amalfitanas y un balcón privado por el que entra la brisa del mar.',
      'Es la suite favorita de quienes viajan con un libro y sin apuro: luz de tarde, un sillón junto a la ventana y el perfume de los limoneros a la hora de la siesta.',
    ],
    longEn: [
      'Inspired by the lemon grove that embraces the house, Limoneto blends soft greens, Amalfi ceramics and a private balcony where the sea breeze drifts in.',
      'It is the favourite suite of those travelling with a book and no hurry: afternoon light, an armchair by the window and the scent of lemon trees at siesta time.',
    ],
    highlightsEs: [
      'Paleta inspirada en el limonetal',
      'Cerámicas amalfitanas originales',
      'Balcón privado con brisa de mar',
      'Rincón de lectura junto a la ventana',
    ],
    highlightsEn: [
      'Lemon-grove inspired palette',
      'Original Amalfi ceramics',
      'Private balcony with sea breeze',
      'Window reading nook',
    ],
    features: ['Sea Breeze', '50 m²', 'King Bed'],
    price: '$760',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85&fit=crop',
    ],
  },
  {
    id: 'deluxe-azure',
    slug: 'deluxe-azure',
    category: 'habitaciones',
    nameEs: 'Deluxe Azure',
    nameEn: 'Deluxe Azure',
    descEs: 'Interiores serenos inspirados en los tonos del mar Tirreno.',
    descEn: 'Serene interiors inspired by the Tyrrhenian sea hues.',
    longEs: [
      'Deluxe Azure traduce el Tirreno a interiores: azules profundos, lino blanco y una calma que se siente apenas se cruza la puerta.',
      'Su balcón mira al jardín de buganvillas y, más allá, al mar. La habitación incluye servicio de turndown nocturno y una selección de tés de la casa.',
    ],
    longEn: [
      'Deluxe Azure translates the Tyrrhenian indoors: deep blues, white linen and a calm you feel the moment you cross the door.',
      'Its balcony looks onto the bougainvillea garden and, beyond it, the sea. The room includes nightly turndown service and a selection of house teas.',
    ],
    highlightsEs: [
      'Balcón con vista al jardín y al mar',
      'Paleta de azules del Tirreno',
      'Smart TV y sistema de sonido',
      'Servicio de turndown nocturno',
    ],
    highlightsEn: [
      'Balcony with garden and sea views',
      'Tyrrhenian blue palette',
      'Smart TV and sound system',
      'Nightly turndown service',
    ],
    features: ['Balcony', '42 m²', 'Smart TV'],
    price: '$690',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&q=85&fit=crop',
    ],
  },
  {
    id: 'camera-classica',
    slug: 'camera-classica',
    category: 'habitaciones',
    nameEs: 'Camera Classica',
    nameEn: 'Classic Room',
    descEs: 'Habitación íntima con textiles italianos y vista al jardín.',
    descEn: 'Intimate room with Italian textiles and garden view.',
    longEs: [
      'La habitación más íntima de la casa, con vista al jardín de limoneros y textiles italianos tejidos en Positano.',
      'Perfecta para quien viaja liviano y quiere despertar con olor a jazmín: cama queen con dosel de lino, ventanal al jardín y un baño compacto con ducha de lluvia.',
    ],
    longEn: [
      'The most intimate room in the house, overlooking the lemon garden and dressed in Italian textiles woven in Positano.',
      'Perfect for light travellers who want to wake up to the scent of jasmine: queen bed with a linen canopy, garden window and a compact bathroom with rain shower.',
    ],
    highlightsEs: [
      'Vista al jardín de limoneros',
      'Textiles italianos tejidos en Positano',
      'Cama queen con dosel de lino',
      'Baño con ducha de lluvia',
    ],
    highlightsEn: [
      'Lemon garden view',
      'Italian textiles woven in Positano',
      'Queen bed with linen canopy',
      'Bathroom with rain shower',
    ],
    features: ['Garden', '32 m²', 'Queen Bed'],
    price: '$560',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=85&fit=crop',
    ],
  },
  {
    id: 'camera-serena',
    slug: 'camera-serena',
    category: 'habitaciones',
    nameEs: 'Camera Serena',
    nameEn: 'Serena Room',
    descEs: 'Refugio cálido con luz natural, rincón de lectura y textiles en tonos arena.',
    descEn: 'Warm retreat with natural light, a reading corner and sand-toned textiles.',
    longEs: [
      'Serena es una habitación de tonos arena pensada para bajar el ritmo: luz natural de norte, un sillón de lectura junto a la ventana y el silencio del casco antiguo.',
      'Ideal para estadías largas y mañanas sin alarma. El desayuno puede servirse en la habitación sin costo adicional.',
    ],
    longEn: [
      'Serena is a sand-toned room designed to slow you down: soft northern light, a reading armchair by the window and the silence of the old town.',
      'Ideal for long stays and alarm-free mornings. Breakfast can be served in the room at no extra cost.',
    ],
    highlightsEs: [
      'Rincón de lectura con sillón de lino',
      'Tonos arena y madera clara',
      'Ducha de lluvia',
      'Desayuno en habitación sin cargo',
    ],
    highlightsEn: [
      'Linen armchair reading nook',
      'Sand tones and pale wood',
      'Rain shower',
      'Complimentary in-room breakfast',
    ],
    features: ['Reading Nook', '36 m²', 'Rain Shower'],
    price: '$610',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85&fit=crop',
    ],
  },
  {
    id: 'villa-bianca',
    slug: 'villa-bianca',
    category: 'villa',
    nameEs: 'Villa Bianca',
    nameEn: 'Villa Bianca',
    descEs: 'Máxima privacidad con jardín personal y plunge pool.',
    descEn: 'Ultimate privacy with a private garden and plunge pool.',
    longEs: [
      'La villa más privada de la propiedad: jardín propio, plunge pool entre limoneros y servicio de mayordomo dedicado.',
      'Villa Bianca vive detrás de su propio portón, con entrada independiente y vistas abiertas al mar desde cada ambiente. Ideal para familias o estancias largas.',
    ],
    longEn: [
      'The most private villa on the property: its own garden, a plunge pool among lemon trees and a dedicated butler.',
      'Villa Bianca lives behind its own gate, with an independent entrance and open sea views from every room. Ideal for families or long stays.',
    ],
    highlightsEs: [
      'Plunge pool privada',
      'Jardín exclusivo de 300 m²',
      'Mayordomo dedicado',
      'Entrada independiente',
    ],
    highlightsEn: [
      'Private plunge pool',
      'Exclusive 300 m² garden',
      'Dedicated butler',
      'Independent entrance',
    ],
    features: ['Pool', '120 m²', 'Butler Service'],
    price: '$2,650',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85&fit=crop',
    ],
  },
  {
    id: 'villa-limonaia',
    slug: 'villa-limonaia',
    category: 'villa',
    nameEs: 'Villa Limonaia',
    nameEn: 'Villa Limonaia',
    descEs: 'Villa privada entre limoneros con lounge exterior y vista abierta al mar.',
    descEn: 'Private villa among lemon trees with an outdoor lounge and open sea views.',
    longEs: [
      'Villa Limonaia nace dentro del limonetal histórico de la casa: sus ambientes se abren a un lounge exterior bajo las pérgolas, con aroma a azahar y sombra fresca.',
      'Concierge privado y desayuno servido donde elijas: en la terraza, junto a la piscina o en el jardín bajo los limoneros.',
    ],
    longEn: [
      "Villa Limonaia sits within the estate's historic lemon grove: its rooms open onto an outdoor lounge under pergolas, scented with orange blossom and cool shade.",
      'Private concierge and breakfast served wherever you choose: on the terrace, by the pool or in the garden under the lemon trees.',
    ],
    highlightsEs: [
      'Lounge exterior bajo pérgolas',
      'Inmersa en el limonetal histórico',
      'Concierge privado',
      'Desayuno servido a elección',
    ],
    highlightsEn: [
      'Pergola-shaded outdoor lounge',
      'Set within the historic lemon grove',
      'Private concierge',
      'Breakfast served wherever you choose',
    ],
    features: ['Private Garden', '105 m²', 'Concierge'],
    price: '$2,350',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85&fit=crop',
    ],
  },
  {
    id: 'villa-marealto',
    slug: 'villa-marealto',
    category: 'villa',
    nameEs: 'Villa Marealto',
    nameEn: 'Villa Marealto',
    descEs: 'Residencia panorámica con terraza infinita, cocina privada y vistas abiertas al horizonte.',
    descEn: 'Panoramic residence with an infinity terrace, private kitchen and open horizon views.',
    longEs: [
      'La residencia panorámica de Maison Blanche: una terraza infinita sobre el horizonte, cocina privada y servicio de chef a demanda.',
      'Marealto se reserva para ocasiones que merecen el mejor ángulo del Mediterráneo: atardeceres largos, cenas privadas y mañanas sin ruido.',
    ],
    longEn: [
      "Maison Blanche's panoramic residence: an infinity terrace over the horizon, a private kitchen and on-demand chef service.",
      'Marealto is reserved for occasions that deserve the Mediterranean\'s finest angle: long sunsets, private dinners and quiet mornings.',
    ],
    highlightsEs: [
      'Terraza infinita sobre el mar',
      'Cocina privada totalmente equipada',
      'Chef a demanda',
      'Amenidades Acqua di Parma',
    ],
    highlightsEn: [
      'Infinity terrace over the sea',
      'Fully equipped private kitchen',
      'On-demand private chef',
      'Acqua di Parma amenities',
    ],
    features: ['Infinity Terrace', '148 m²', 'Private Chef'],
    price: '$3,150',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85&fit=crop',
    ],
  },
];
