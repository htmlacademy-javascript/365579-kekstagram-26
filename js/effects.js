import {
  imgUploadPreview,
} from './scale-control.js';

const sliderElement = document.querySelector('.effect-level__slider');
sliderElement.value = `${100}%`;
const effectsValue = document.querySelector('.effect-level__value');
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

sliderElement.noUiSlider.on('update', () => {
  effectsValue.value = sliderElement.noUiSlider.get();
});

function removeEffect () {
  if (imgUploadPreview.match('.effects__preview--')) {
    imgUploadPreview.classList.remove('');
  }
}

effectButtons.forEach((element) => {

  element.addEventListener('change', () => {

    if (element.value !== 'none') {
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
    } else {
      sliderElement.noUiSlider.destroy();
    }
    if (element.value === 'chrome') {

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      imgUploadPreview.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
    }
  });
});

