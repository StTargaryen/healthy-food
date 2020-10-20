import tabs from './modules/tabs';
import calc from './modules/calc';
import forms from './modules/forms';
import modal, { showModal } from './modules/modal';
import cards from './modules/cards';
import timer from './modules/timer';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(()=> showModal('.modal', modalTimerId), 50000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items','tabheader__item_active');
  calc();
  modal('[data-modal]','.modal', modalTimerId);
  cards();
  timer('.timer', '2020-10-20');
  slider({
    container:'.offer__slider',
    nextController: '.offer__slider-next',
    prevController: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    slide:'.offer__slide'
  });
  forms('form',modalTimerId);
});