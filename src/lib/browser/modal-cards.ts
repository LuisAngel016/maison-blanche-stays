export function initModalCards(root: ParentNode = document) {
  const groups = Array.from(root.querySelectorAll<HTMLElement>('[data-modal-card-group]'));

  groups.forEach((group) => {
    if (group.dataset.bound === 'true') return;
    group.dataset.bound = 'true';

    const triggers = Array.from(group.querySelectorAll<HTMLElement>('[data-modal-trigger]'));
    const modal = group.querySelector<HTMLElement>('[data-modal]');
    const title = modal?.querySelector<HTMLElement>('[data-modal-title]');
    const body = modal?.querySelector<HTMLElement>('[data-modal-body]');
    const close = group.querySelector<HTMLButtonElement>('[data-modal-close]');
    if (!modal || !title || !body) return;

    const open = (trigger: HTMLElement) => {
      title.textContent = trigger.dataset.modalTitle ?? '';
      body.textContent = trigger.dataset.modalBody ?? '';
      modal.hidden = false;
      modal.dataset.open = 'true';
      document.body.style.overflow = 'hidden';
    };

    const hide = () => {
      modal.hidden = true;
      modal.dataset.open = 'false';
      document.body.style.overflow = '';
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => open(trigger));
      trigger.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        open(trigger);
      });
    });

    close?.addEventListener('click', hide);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) hide();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') hide();
    });
  });
}
