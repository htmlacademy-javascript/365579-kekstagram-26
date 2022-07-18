import {
  imgUploadPreview,
} from './scale-control.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectNone = document.querySelector('#effect-none');
const effectsList = document.querySelector('.effects__list');
const effectButtons = document.querySelectorAll('[name="effect"]');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

effectButtons.forEach((element) => {
  console.log(effectButtons.value);
  element.change = function () {
  console.log(effectButtons.value);
  };
});


