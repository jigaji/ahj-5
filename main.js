/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/createPopover.js
function createPopover(event) {
  event.preventDefault();
  const popover = document.createElement('div');
  popover.classList.add('popover');
  popover.innerHTML = `
  <h3 class="popover-header">${event.target.getAttribute('title')}</h3>
  <p class="popover-body">${event.target.dataset.content}</p>`;
  event.target.offsetParent.appendChild(popover);
  popover.style.top = `${event.target.offsetTop - popover.offsetHeight}px`;
  popover.style.left = `${event.target.offsetLeft + event.target.offsetWidth / 2 - popover.offsetWidth / 2}px`;
}
;// CONCATENATED MODULE: ./src/js/pop.js

function pop() {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', event => {
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
;// CONCATENATED MODULE: ./src/js/app.js

pop();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;