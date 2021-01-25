import tabs from './modules/tabs';
import modalWindow from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    let modalTimer = setTimeout(() => openModal('.modal', modalTimer), 10000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modalWindow('[data-modal]', '.modal', modalTimer);
    timer('.timer', '2021-03-27');
    cards();
    calculator();
    forms(modalTimer);
    slider();
})