export type Treatment = {
  title: { es: string; en: string };
  description: { es: string; en: string };
  details: { es: string; en: string };
  duration: string;
  price: string;
  image: string;
};

export const spaTreatments: Treatment[] = [
  {
    title: { es: 'Massaggio Amalfitano', en: 'Amalfi Massage' },
    description: {
      es: 'Masaje de cuerpo completo con aceite de limón y sal marina de la costa.',
      en: 'Full-body massage with Amalfi lemon oil and coastal sea salt.',
    },
    details: {
      es: 'Incluye preparación aromática, protocolo personalizado y cierre con hidratación profunda.',
      en: 'Includes aromatic preparation, a personalized protocol and a deep hydration finish.',
    },
    duration: '90 min',
    price: '$145',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80&fit=crop',
  },
  {
    title: { es: 'Idroterapia Termale', en: 'Thermal Hydrotherapy' },
    description: {
      es: 'Circuito de aguas termales con jets submarinos, piscina fría y sauna de hierbas mediterráneas.',
      en: 'Thermal waters circuit with underwater jets, cold plunge and Mediterranean herb sauna.',
    },
    details: {
      es: 'Ideal para recuperación muscular y descanso profundo después de un día de costa.',
      en: 'Ideal for muscle recovery and deep rest after a day on the coast.',
    },
    duration: '60 min',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80&fit=crop',
  },
  {
    title: { es: 'Fanghi del Vesuvio', en: 'Vesuvian Mud Ritual' },
    description: {
      es: 'Envolturas volcánicas ricas en minerales que purifican y suavizan la piel.',
      en: 'Mineral-rich volcanic wraps that purify and soften the skin.',
    },
    details: {
      es: 'Se complementa con masaje drenante y recuperación en lounge de tés botánicos.',
      en: 'Paired with a draining massage and recovery in the botanical tea lounge.',
    },
    duration: '75 min',
    price: '$130',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80&fit=crop',
  },
  {
    title: { es: 'Rituale Marino', en: 'Marine Ritual' },
    description: {
      es: 'Exfoliación de sal marina, envoltura de algas y masaje de hidratación profunda.',
      en: 'Sea salt exfoliation, seaweed wrap and deep hydration massage.',
    },
    details: {
      es: 'Pensado para estadías largas y huéspedes que priorizan recuperación integral.',
      en: 'Designed for longer stays and guests prioritizing full-body recovery.',
    },
    duration: '120 min',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&q=80&fit=crop',
  },
  {
    title: { es: 'Yoga al Tramonto', en: 'Sunset Yoga' },
    description: {
      es: 'Sesión privada de yoga frente al mar al atardecer con meditación guiada.',
      en: 'Private sunset yoga by the sea with guided meditation.',
    },
    details: {
      es: 'Incluye blend de hierbas amalfitanas y respiración diafragmática guiada.',
      en: 'Includes an Amalfi herbal blend and guided diaphragmatic breathing.',
    },
    duration: '60 min',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=80&fit=crop',
  },
  {
    title: { es: 'Facial Luminoso', en: 'Luminous Facial' },
    description: {
      es: 'Tratamiento facial con limón de Amalfi y aceite de argán para iluminar e hidratar.',
      en: 'Facial treatment with Amalfi lemon and argan oil to brighten and hydrate.',
    },
    details: {
      es: 'Trabaja textura, luminosidad y firmeza sin procedimientos invasivos.',
      en: 'Targets texture, radiance and firmness without invasive procedures.',
    },
    duration: '60 min',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80&fit=crop',
  },
];
