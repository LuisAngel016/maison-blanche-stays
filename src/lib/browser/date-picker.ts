import flatpickr from 'flatpickr';
import { english } from 'flatpickr/dist/l10n/default.js';
import { Spanish } from 'flatpickr/dist/l10n/es.js';

type FlatpickrLike = {
  set: (option: string, value: unknown) => void;
};

const instances = new Map<string, FlatpickrLike>();

export function initDatePickers(root: ParentNode = document) {
  const locale = document.documentElement.lang === 'en' ? english : Spanish;
  const inputs = Array.from(root.querySelectorAll<HTMLInputElement>('[data-date-picker]'));

  inputs.forEach((input) => {
    if (instances.has(input.id)) return;

    const picker = flatpickr(input, {
      dateFormat: 'd / m / Y',
      minDate: input.dataset.minDate ?? 'today',
      disableMobile: true,
      locale,
      onChange(selectedDates) {
        const linkedId = input.dataset.linkedTo;
        if (!linkedId || selectedDates.length === 0) return;

        const linkedPicker = instances.get(linkedId);
        if (!linkedPicker) return;

        const nextDate = new Date(selectedDates[0]);
        nextDate.setDate(nextDate.getDate() + 1);
        linkedPicker.set('minDate', nextDate);
      },
    }) as FlatpickrLike;

    instances.set(input.id, picker);
  });
}
