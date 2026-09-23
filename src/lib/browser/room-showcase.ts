export function initRoomShowcases(root: ParentNode = document) {
  const showcases = Array.from(root.querySelectorAll<HTMLElement>('[data-room-showcase]'));

  showcases.forEach((showcase) => {
    if (showcase.dataset.bound === 'true') return;
    showcase.dataset.bound = 'true';

    const buttons = Array.from(showcase.querySelectorAll<HTMLButtonElement>('[data-tab]'));
    const cards = Array.from(showcase.querySelectorAll<HTMLElement>('[data-room-card]'));

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

    applyFilter('all');
  });
}
