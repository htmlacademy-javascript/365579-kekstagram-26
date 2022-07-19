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

  if (effectButtons[1].value === 'chrome') {
    imgUploadPreview.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
  } else if (effectButtons[2].value === 'sepia') {
    imgUploadPreview.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
  } else if (effectButtons[3].value === 'marvin') {
    imgUploadPreview.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;
  } else if (effectButtons[4].value === 'phobos') {
    imgUploadPreview.style.filter = `blur(${sliderElement.noUiSlider.get()}px)`;
  } else if (effectButtons[5].value === 'heat') {
    imgUploadPreview.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;
  }
});

function removeEffect () {
  if (imgUploadPreview.match('.effects__preview--')) {
    imgUploadPreview.classList.remove('');
  }
}

effectButtons.forEach((element) => {

  element.addEventListener('change', () => {


    if (element.value === 'chrome') {
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    } else if (element.value === 'sepia') {
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    } else if (element.value === 'marvin') {
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
    } else if (element.value === 'phobos') {
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    } else if (element.value === 'heat') {
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }
  });
});


