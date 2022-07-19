import {
  imgUploadPreview,
} from './scale-control.js';

const sliderElement = document.querySelector('.effect-level__slider');
sliderElement.value = `${100}%`;
const effectsValue = document.querySelector('.effect-level__value');
const effectButtons = document.querySelectorAll('[name="effect"]');

sliderElement.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

const sliderValue = sliderElement.noUiSlider.get();

sliderElement.noUiSlider.on('update', () => {
  effectsValue.value = sliderValue;

  if (effectButtons[1].value === 'chrome') {
    imgUploadPreview.style.filter = `grayscale(${sliderValue})`;
  }
  if (effectButtons[2].value === 'sepia') {
    imgUploadPreview.style.filter = `sepia(${sliderValue})`;
  } else if (effectButtons[3].value === 'marvin') {
    imgUploadPreview.style.filter = `invert(${sliderValue}%)`;
  }
  if (effectButtons[4].value === 'phobos') {
    imgUploadPreview.style.filter = `blur(${sliderValue}px)`;
  }
  if (effectButtons[5].value === 'heat') {
    imgUploadPreview.style.filter = `brightness(${sliderValue})`;
  }
  if (effectButtons[0].value === 'none') {
    imgUploadPreview.style.filter = `none(${sliderValue})`;
  }
});

function removeEffect () {
  effectButtons.addEventListener('change', (evt) => {
    const currentPictureClass = imgUploadPreview.match('.effects__preview--');
    if (currentPictureClass) {
      currentPictureClass.classList.remove('effects__preview--');
    }

    imgUploadPreview.classList.add(`effects__preview--${evt.value}`);
  });
}

effectButtons.forEach((element) => {

  element.addEventListener('change', () => {

    if (element.value === 'none') {
      sliderElement.classList.add('hidden');
    } else if (element.value === 'chrome') {
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      sliderElement.classList.remove('hidden');
      if (imgUploadPreview.includes('.effects__preview--')) {
        for(let i = 0; i < effectButtons.length; i++) {
          imgUploadPreview.classList.remove(`effects__preview--${element.value}`);
        }
      }
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
      sliderElement.classList.remove('hidden');
      if (imgUploadPreview.includes('.effects__preview--')) {
        for(let i = 0; i < effectButtons.length; i++) {
          imgUploadPreview.classList.remove(`effects__preview--${element.value}`);
        }
      }
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
      sliderElement.classList.remove('hidden');
      if (imgUploadPreview.includes('.effects__preview--')) {
        for(let i = 0; i < effectButtons.length; i++) {
          imgUploadPreview.classList.remove(`effects__preview--${element.value}`);
        }
      }
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
      sliderElement.classList.remove('hidden');
      if (imgUploadPreview.includes('.effects__preview--')) {
        for(let i = 0; i < effectButtons.length; i++) {
          imgUploadPreview.classList.remove(`effects__preview--${element.value}`);
        }
      }
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
      sliderElement.classList.remove('hidden');
      if (imgUploadPreview.includes('.effects__preview--')) {
        for(let i = 0; i < effectButtons.length; i++) {
          imgUploadPreview.classList.remove(`effects__preview--${element.value}`);
        }
      }
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


