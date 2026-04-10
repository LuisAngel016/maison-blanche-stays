export function initBookingForms(root: ParentNode = document) {
  const forms = Array.from(root.querySelectorAll<HTMLFormElement>('[data-booking-form]'));

  forms.forEach((form) => {
    if (form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const successId = form.dataset.successId;
      if (!successId) return;

      const success = document.getElementById(successId);
      if (!success) return;

      success.dataset.visible = 'true';
      success.removeAttribute('hidden');
      window.setTimeout(() => {
        success.dataset.visible = 'false';
        success.setAttribute('hidden', '');
      }, 3200);
    });
  });
}
