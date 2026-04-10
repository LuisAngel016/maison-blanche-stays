const INITIAL_OFFSET = 24;

function reveal(element: HTMLElement, delay = 0) {
  element.style.transition = `opacity 560ms ease ${delay}ms, transform 560ms ease ${delay}ms`;
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
}

function prepare(element: HTMLElement) {
  element.style.opacity = '0';
  element.style.transform = `translateY(${INITIAL_OFFSET}px)`;
  element.style.willChange = 'opacity, transform';
}

export function initScrollAnimations(root: ParentNode = document) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const singles = Array.from(root.querySelectorAll<HTMLElement>('[data-animate]'));
  const groups = Array.from(root.querySelectorAll<HTMLElement>('[data-stagger]'));

  if (reduceMotion) {
    singles.forEach((element) => reveal(element));
    groups.forEach((group) => Array.from(group.children).forEach((child) => reveal(child as HTMLElement)));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;
        if (element.dataset.stagger !== undefined) {
          Array.from(element.children).forEach((child, index) => reveal(child as HTMLElement, index * 80));
        } else {
          reveal(element);
        }

        observer.unobserve(element);
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  );

  singles.forEach((element) => {
    prepare(element);
    observer.observe(element);
  });

  groups.forEach((group) => {
    Array.from(group.children).forEach((child) => prepare(child as HTMLElement));
    observer.observe(group);
  });
}
