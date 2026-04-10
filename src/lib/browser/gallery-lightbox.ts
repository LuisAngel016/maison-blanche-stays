export function initGalleryLightboxes(root: ParentNode = document) {
  const galleries = Array.from(root.querySelectorAll<HTMLElement>('[data-gallery-root]'));

  galleries.forEach((gallery) => {
    if (gallery.dataset.bound === 'true') return;
    gallery.dataset.bound = 'true';

    const items = Array.from(gallery.querySelectorAll<HTMLButtonElement>('[data-lightbox-trigger]'));
    const lightbox = gallery.querySelector<HTMLElement>('[data-lightbox]');
    const image = gallery.querySelector<HTMLImageElement>('[data-lightbox-image]');
    const prev = gallery.querySelector<HTMLButtonElement>('[data-lightbox-prev]');
    const next = gallery.querySelector<HTMLButtonElement>('[data-lightbox-next]');
    const close = gallery.querySelector<HTMLButtonElement>('[data-lightbox-close]');
    if (!lightbox || !image || items.length === 0) return;

    let current = 0;

    const show = (index: number) => {
      const normalized = (index + items.length) % items.length;
      const target = items[normalized];
      image.src = target.dataset.lightboxSrc ?? '';
      image.alt = target.dataset.lightboxAlt ?? '';
      lightbox.hidden = false;
      lightbox.dataset.open = 'true';
      current = normalized;
      document.body.style.overflow = 'hidden';
    };

    const hide = () => {
      lightbox.dataset.open = 'false';
      lightbox.hidden = true;
      document.body.style.overflow = '';
    };

    items.forEach((item, index) => item.addEventListener('click', () => show(index)));
    prev?.addEventListener('click', () => show(current - 1));
    next?.addEventListener('click', () => show(current + 1));
    close?.addEventListener('click', hide);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) hide();
    });
    document.addEventListener('keydown', (event) => {
      if (lightbox.hidden) return;
      if (event.key === 'Escape') hide();
      if (event.key === 'ArrowLeft') show(current - 1);
      if (event.key === 'ArrowRight') show(current + 1);
    });
  });
}
