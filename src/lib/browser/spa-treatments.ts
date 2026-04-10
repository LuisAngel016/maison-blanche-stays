export function initSpaTreatmentCards(root: ParentNode = document) {
  const groups = Array.from(root.querySelectorAll<HTMLElement>('[data-spa-grid]'));

  groups.forEach((group) => {
    if (group.dataset.bound === 'true') return;
    group.dataset.bound = 'true';

    const toggles = Array.from(group.querySelectorAll<HTMLButtonElement>('[data-spa-toggle]'));

    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const detailId = toggle.getAttribute('aria-controls');
        if (!detailId) return;

        const detail = document.getElementById(detailId);
        if (!detail) return;

        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        detail.hidden = expanded;
      });
    });
  });
}
