function parseFeatures(value: string | undefined): string[] {
  if (!value) return [];
  try {
    return JSON.parse(value) as string[];
  } catch {
    return [];
  }
}

export function initRoomShowcases(root: ParentNode = document) {
  const showcases = Array.from(root.querySelectorAll<HTMLElement>('[data-room-showcase]'));

  showcases.forEach((showcase) => {
    if (showcase.dataset.bound === 'true') return;
    showcase.dataset.bound = 'true';

    const buttons = Array.from(showcase.querySelectorAll<HTMLButtonElement>('[data-tab]'));
    const cards = Array.from(showcase.querySelectorAll<HTMLElement>('[data-room-card]'));
    const modal = showcase.querySelector<HTMLElement>('[data-room-modal]');
    const modalImage = showcase.querySelector<HTMLImageElement>('[data-room-modal-image]');
    const modalCategory = showcase.querySelector<HTMLElement>('[data-room-modal-category]');
    const modalName = showcase.querySelector<HTMLElement>('[data-room-modal-name]');
    const modalPrice = showcase.querySelector<HTMLElement>('[data-room-modal-price]');
    const modalDescription = showcase.querySelector<HTMLElement>('[data-room-modal-description]');
    const modalFeatures = showcase.querySelector<HTMLElement>('[data-room-modal-features]');
    const modalClose = showcase.querySelector<HTMLButtonElement>('[data-room-modal-close]');

    if (modal && modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }

    const applyFilter = (tab: string) => {
      cards.forEach((card) => {
        const visible = tab === 'all' || card.dataset.roomCategory === tab;
        card.hidden = !visible;
      });

      buttons.forEach((button) => {
        button.dataset.active = button.dataset.tab === tab ? 'true' : 'false';
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => applyFilter(button.dataset.tab ?? 'all'));
    });

    const openModal = (card: HTMLElement) => {
      if (!modal || !modalImage || !modalCategory || !modalName || !modalPrice || !modalDescription || !modalFeatures) return;

      const roomImage = card.dataset.roomImage ?? '';
      modalImage.src = roomImage;
      modalImage.srcset = roomImage;
      modalImage.sizes = '100vw';
      modalImage.alt = card.dataset.roomName ?? '';
      modalCategory.textContent = card.dataset.roomCategoryLabel ?? '';
      modalName.textContent = card.dataset.roomName ?? '';
      modalPrice.textContent = card.dataset.roomPrice ?? '';
      modalDescription.textContent = card.dataset.roomDescription ?? '';
      modalFeatures.innerHTML = parseFeatures(card.dataset.roomFeatures)
        .map((feature) => `<span class="pill pill-outline">${feature}</span>`)
        .join('');

      modal.hidden = false;
      modal.dataset.open = 'true';
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      if (!modal) return;
      modal.hidden = true;
      modal.dataset.open = 'false';
      document.body.style.overflow = '';
    };

    cards.forEach((card) => {
      const handleOpen = (event?: Event) => {
        const target = event?.target;
        if (target instanceof HTMLElement && target.closest('a, button')) return;
        openModal(card);
      };

      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        handleOpen(event);
      });
    });

    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });

    applyFilter('all');
  });
}
