import {
  sliderMainSettings,
} from './data.js';

import {
  removeStyle,
  removeClass,
} from './util.js';

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level');
const sliderElement = slider.querySelector('.effect-level__slider');
const effectsValue = document.querySelector('.effect-level__value');
const effectButtons = document.querySelectorAll('[name="effect"]');

noUiSlider.create(sliderElement, sliderMainSettings);

sliderElement.noUiSlider.on('update', () => {
  const sliderValue = sliderElement.noUiSlider.get();
  const checkedRadio = document.querySelector('[name="effect"]:checked');

  effectsValue.value = sliderValue;

  if (checkedRadio.value === 'chrome') {
    imgUploadPreview.style.filter = `grayscale(${sliderValue})`;
  }
  if (checkedRadio.value === 'sepia') {
    imgUploadPreview.style.filter = `sepia(${sliderValue})`;
  }
  if (checkedRadio.value === 'marvin') {
    imgUploadPreview.style.filter = `invert(${sliderValue}%)`;
  }
  if (checkedRadio.value === 'phobos') {
    imgUploadPreview.style.filter = `blur(${sliderValue}px)`;
  }
  if (checkedRadio.value === 'heat') {
    imgUploadPreview.style.filter = `brightness(${sliderValue})`;
  }
});

effectButtons.forEach((element) => {

  element.addEventListener('change', () => {
    const settings = {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    };

    removeClass(imgUploadPreview);

    if (element.value === 'marvin') {
      settings.range.max = 100;
      settings.start = 100;
      settings.step = 1;
    }

    if (element.value === 'phobos') {
      settings.range.max = 3;
      settings.start = 3;
    }

    if (element.value === 'heat') {
      settings.range.min = 1;
      settings.range.max = 3;
      settings.start = 3;
    }

    if (element.value === 'none') {
      removeStyle(imgUploadPreview);
      slider.classList.add('hidden');
    } else {
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      slider.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions(settings);
    }
  });
});

export {slider, sliderElement};

