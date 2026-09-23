export type Treatment = {
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  long: { es: string[]; en: string[] };
  benefits: { es: string[]; en: string[] };
  includes: { es: string[]; en: string[] };
  duration: string;
  price: string;
  image: string;
};

export const spaTreatments: Treatment[] = [
  {
    slug: 'massaggio-amalfitano',
    title: { es: 'Massaggio Amalfitano', en: 'Amalfi Massage' },
    description: {
      es: 'Masaje de cuerpo completo con aceite de limón y sal marina de la costa.',
      en: 'Full-body massage with Amalfi lemon oil and coastal sea salt.',
    },
    long: {
      es: [
        'Un masaje de cuerpo completo con aceite de limón de la costa y sal marina recogida en nuestras calas. Ritmo lento y presión media: el objetivo no es la fuerza sino la respiración.',
        'Cada sesión comienza con una preparación aromática y termina con hidratación profunda, en una cabina con ventanal al jardín.',
      ],
      en: [
        'A full-body massage with coastal lemon oil and sea salt gathered from our coves. Slow rhythm and medium pressure: the goal is not force but breath.',
        'Each session begins with an aromatic preparation and ends with deep hydration, in a cabin with a garden window.',
      ],
    },
    benefits: {
      es: ['Libera tensión muscular', 'Hidrata y suaviza la piel', 'Mejora la circulación', 'Aroma cítrico relajante'],
      en: ['Releases muscle tension', 'Hydrates and softens the skin', 'Improves circulation', 'Calming citrus aroma'],
    },
    includes: {
      es: ['Preparación aromática', 'Protocolo personalizado', 'Hidratación profunda final'],
      en: ['Aromatic preparation', 'Personalized protocol', 'Deep hydration finish'],
    },
    duration: '90 min',
    price: '$145',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80&fit=crop',
  },
  {
    slug: 'idroterapia-termale',
    title: { es: 'Idroterapia Termale', en: 'Thermal Hydrotherapy' },
    description: {
      es: 'Circuito de aguas termales con jets submarinos, piscina fría y sauna de hierbas mediterráneas.',
      en: 'Thermal waters circuit with underwater jets, cold plunge and Mediterranean herb sauna.',
    },
    long: {
      es: [
        'Un circuito de aguas a distintas temperaturas, jets submarinos y sauna de hierbas mediterráneas. Pensado para después de un día de caminata por la costa.',
        'El recorrido sugerido alterna calor y frío tres veces; nuestro equipo te guía según tu nivel de recuperación.',
      ],
      en: [
        'A circuit of waters at different temperatures, underwater jets and a Mediterranean herb sauna. Designed for after a day of coastal walking.',
        'The suggested sequence alternates heat and cold three times; our team guides you according to your recovery level.',
      ],
    },
    benefits: {
      es: ['Recuperación muscular', 'Mejora del sueño', 'Efecto antiinflamatorio', 'Descanso profundo'],
      en: ['Muscle recovery', 'Better sleep', 'Anti-inflammatory effect', 'Deep rest'],
    },
    includes: {
      es: ['Circuito completo de aguas', 'Sauna de hierbas', 'Frutas de temporada y té'],
      en: ['Full water circuit', 'Herb sauna', 'Seasonal fruit and tea'],
    },
    duration: '60 min',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80&fit=crop',
  },
  {
    slug: 'fanghi-del-vesuvio',
    title: { es: 'Fanghi del Vesuvio', en: 'Vesuvian Mud Ritual' },
    description: {
      es: 'Envolturas volcánicas ricas en minerales que purifican y suavizan la piel.',
      en: 'Mineral-rich volcanic wraps that purify and soften the skin.',
    },
    long: {
      es: [
        'Envoltura de barros volcánicos ricos en minerales, seguida de un masaje drenante. La piel queda visiblemente más suave desde la primera sesión.',
        'Recomendado en series de tres sesiones para resultados profundos de purificación.',
      ],
      en: [
        'A wrap with mineral-rich volcanic muds, followed by a draining massage. The skin looks visibly softer after the very first session.',
        'Recommended in series of three for deeper purifying results.',
      ],
    },
    benefits: {
      es: ['Purifica y detoxifica', 'Suaviza la piel', 'Estimula el drenaje linfático', 'Efecto reafirmante'],
      en: ['Purifies and detoxifies', 'Softens the skin', 'Stimulates lymphatic drainage', 'Firming effect'],
    },
    includes: {
      es: ['Envoltura volcánica completa', 'Masaje drenante', 'Lounge de tés botánicos'],
      en: ['Full volcanic wrap', 'Draining massage', 'Botanical tea lounge'],
    },
    duration: '75 min',
    price: '$130',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80&fit=crop',
  },
  {
    slug: 'rituale-marino',
    title: { es: 'Rituale Marino', en: 'Marine Ritual' },
    description: {
      es: 'Exfoliación de sal marina, envoltura de algas y masaje de hidratación profunda.',
      en: 'Sea salt exfoliation, seaweed wrap and deep hydration massage.',
    },
    long: {
      es: [
        'Nuestro ritual más completo: exfoliación de sal marina, envoltura de algas y masaje final de hidratación profunda. Dos horas para reiniciar el cuerpo entero.',
        'Pensado para estadías largas y huéspedes que priorizan recuperación integral sobre tratamientos puntuales.',
      ],
      en: [
        'Our most complete ritual: sea salt exfoliation, seaweed wrap and a final deep-hydration massage. Two hours to reset the whole body.',
        'Designed for longer stays and guests who prioritize full-body recovery over targeted treatments.',
      ],
    },
    benefits: {
      es: ['Renovación completa de la piel', 'Mineraliza el organismo', 'Recuperación integral', 'Relajación duradera'],
      en: ['Complete skin renewal', 'Mineralizes the body', 'Full-body recovery', 'Lasting relaxation'],
    },
    includes: {
      es: ['Exfoliación de sal marina', 'Envoltura de algas', 'Masaje de hidratación profunda', 'Infusión de cierre'],
      en: ['Sea salt exfoliation', 'Seaweed wrap', 'Deep hydration massage', 'Closing infusion'],
    },
    duration: '120 min',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&q=80&fit=crop',
  },
  {
    slug: 'yoga-al-tramonto',
    title: { es: 'Yoga al Tramonto', en: 'Sunset Yoga' },
    description: {
      es: 'Sesión privada de yoga frente al mar al atardecer con meditación guiada.',
      en: 'Private sunset yoga by the sea with guided meditation.',
    },
    long: {
      es: [
        'Una sesión privada en la terraza alta, frente al mar que se apaga. Respiración guiada, posturas suaves y diez minutos de meditación final.',
        'Apta para todos los niveles; no se requiere experiencia previa. Se suspende por lluvia y se reprograma sin cargo.',
      ],
      en: [
        'A private session on the upper terrace, facing the sea as it fades. Guided breathing, gentle postures and ten minutes of closing meditation.',
        'Suitable for all levels; no previous experience required. Cancelled in case of rain and rescheduled at no cost.',
      ],
    },
    benefits: {
      es: ['Reduce el estrés', 'Mejora la flexibilidad', 'Conecta con la respiración', 'Sueño más profundo'],
      en: ['Reduces stress', 'Improves flexibility', 'Connects with breath', 'Deeper sleep'],
    },
    includes: {
      es: ['Sesión privada de 60 minutos', 'Meditación guiada final', 'Blend de hierbas amalfitanas'],
      en: ['Private 60-minute session', 'Closing guided meditation', 'Amalfi herbal blend'],
    },
    duration: '60 min',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=80&fit=crop',
  },
  {
    slug: 'facial-luminoso',
    title: { es: 'Facial Luminoso', en: 'Luminous Facial' },
    description: {
      es: 'Tratamiento facial con limón de Amalfi y aceite de argán para iluminar e hidratar.',
      en: 'Facial treatment with Amalfi lemon and argan oil to brighten and hydrate.',
    },
    long: {
      es: [
        'Un facial sin procedimientos invasivos: limpieza suave, activos de limón de Amalfi y aceite de argán para devolver luz y firmeza.',
        'Incluye diagnóstico de piel al inicio para adaptar los activos a tu tipo de piel y al clima de la temporada.',
      ],
      en: [
        'A facial without invasive procedures: gentle cleansing, Amalfi lemon actives and argan oil to restore radiance and firmness.',
        'Includes a skin diagnosis at the start to adapt the actives to your skin type and the season’s climate.',
      ],
    },
    benefits: {
      es: ['Ilumina la piel', 'Hidrata en profundidad', 'Mejora textura y firmeza', 'Sin invasividad'],
      en: ['Brightens the skin', 'Deep hydration', 'Improves texture and firmness', 'Non-invasive'],
    },
    includes: {
      es: ['Diagnóstico de piel', 'Limpieza y mascarilla activa', 'Hidratación final con argán'],
      en: ['Skin diagnosis', 'Cleansing and active mask', 'Final argan hydration'],
    },
    duration: '60 min',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80&fit=crop',
  },
];
