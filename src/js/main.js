import sliders from './modules/sliders';
import modal from './modules/modal';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    sliders('.slider__inner', '.prev', '.next');
    modal();
    forms();
});