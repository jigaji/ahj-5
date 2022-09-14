import createPopover from './createPopover';

export default function pop() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', (event) => {
    const popover = document.querySelector('.popover');
    if (!popover) {
      createPopover(event);
      btn.classList.add('toggle');
    } else {
      popover.remove();
      btn.classList.remove('toggle');
    }
  });
}
