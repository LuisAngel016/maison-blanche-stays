const SCROLL_KEY = 'maison-blanche:scroll-y';

export function initHeaderBehavior(root: ParentNode = document) {
  const header = root.querySelector<HTMLElement>('[data-site-header]');
  const langSwitch = root.querySelector<HTMLAnchorElement>('[data-lang-switch]');
  const menuToggle = root.querySelector<HTMLButtonElement>('[data-mobile-menu-toggle]');
  const mobileMenu = root.querySelector<HTMLElement>('[data-mobile-menu]');
  const mobileBackdrop = root.querySelector<HTMLElement>('[data-mobile-menu-backdrop]');
  const mobileLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-mobile-menu-link]'));
  if (!header) return;

  const setMenuState = (open: boolean) => {
    if (!mobileMenu || !mobileBackdrop || !menuToggle) return;

    mobileMenu.hidden = !open;
    mobileBackdrop.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    header.dataset.menuOpen = open ? 'true' : 'false';
    document.body.style.overflow = open ? 'hidden' : '';
  };

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
    setMenuState(false);
  });

  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  mobileBackdrop?.addEventListener('click', () => setMenuState(false));
  mobileLinks.forEach((link) => link.addEventListener('click', () => setMenuState(false)));

  syncHeader();
  restoreScroll();
  window.addEventListener('scroll', syncHeader, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      setMenuState(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuState(false);
    }
  });
}
