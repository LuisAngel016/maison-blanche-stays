import type { Lang } from '../i18n/utils';

export const restaurantHighlights: Array<{
  id: string;
  image: string;
  cardTitle: Record<Lang, string>;
  cardDescription: Record<Lang, string>;
  modalTitle: Record<Lang, string>;
  modalBody: Record<Lang, string>;
}> = [
  {
    id: 'chef',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&fit=crop',
    cardTitle: { es: 'Chef Marco Elia', en: 'Chef Marco Elia' },
    cardDescription: {
      es: 'Una cocina íntima de producto local, mar y fuego lento.',
      en: 'An intimate kitchen rooted in local produce, sea and slow fire.',
    },
    modalTitle: { es: 'Chef Marco Elia', en: 'Chef Marco Elia' },
    modalBody: {
      es: 'Trayectoria de 15 años en cocina mediterránea de autor. Producto local, técnica precisa y estética editorial.',
      en: '15 years crafting contemporary Mediterranean signature cuisine with local ingredients and precise technique.',
    },
  },
  {
    id: 'menu',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&fit=crop',
    cardTitle: { es: 'Menú degustación', en: 'Tasting menu' },
    cardDescription: {
      es: '8 pasos de temporada con maridaje opcional.',
      en: '8 seasonal courses with optional wine pairing.',
    },
    modalTitle: { es: 'Menú degustación', en: 'Tasting menu' },
    modalBody: {
      es: 'Amuse-bouche, crudo del Tirreno, pasta fresca de la casa, pescado del día y postre cítrico de Amalfi.',
      en: 'Amuse-bouche, Tyrrhenian crudo, house-made pasta, fish of the day and a citrus dessert from Amalfi.',
    },
  },
];
