const SCROLL_KEY = 'maison-blanche:scroll-y';

export function initHeaderBehavior(root: ParentNode = document) {
  const header = root.querySelector<HTMLElement>('[data-site-header]');
  const langSwitch = root.querySelector<HTMLAnchorElement>('[data-lang-switch]');
  if (!header) return;

  const syncHeader = () => {
    header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
  };

  const restoreScroll = () => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (!saved) return;

    const nextPosition = Number(saved);
    if (!Number.isNaN(nextPosition)) {
      requestAnimationFrame(() => window.scrollTo({ top: nextPosition, behavior: 'auto' }));
    }

    sessionStorage.removeItem(SCROLL_KEY);
  };

  langSwitch?.addEventListener('click', () => {
    if (window.location.hash) {
      langSwitch.href = `${langSwitch.href.split('#')[0]}${window.location.hash}`;
    }
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
  });

  syncHeader();
  restoreScroll();
  window.addEventListener('scroll', syncHeader, { passive: true });
}
