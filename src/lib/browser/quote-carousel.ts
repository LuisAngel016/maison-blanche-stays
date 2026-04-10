export function initQuoteCarousel(root: ParentNode = document) {
  const carousels = Array.from(root.querySelectorAll<HTMLElement>('[data-quote-carousel]'));

  carousels.forEach((carousel) => {
    if (carousel.dataset.bound === 'true') return;
    carousel.dataset.bound = 'true';

    const slides = Array.from(carousel.querySelectorAll<HTMLElement>('[data-quote-slide]'));
    const dots = Array.from(carousel.querySelectorAll<HTMLButtonElement>('[data-quote-dot]'));
    if (slides.length === 0) return;

    let current = 0;
    let timer = 0;

    const paint = (index: number) => {
      current = index;
      slides.forEach((slide, slideIndex) => {
        slide.hidden = slideIndex !== current;
      });
      dots.forEach((dot, dotIndex) => {
        dot.dataset.active = dotIndex === current ? 'true' : 'false';
        dot.setAttribute('aria-pressed', dotIndex === current ? 'true' : 'false');
      });
    };

    const schedule = () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        paint((current + 1) % slides.length);
      }, 5000);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        paint(index);
        schedule();
      });
    });

    paint(0);
    schedule();
  });
}
