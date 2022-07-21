import {
  KEY_CODES,
  sliderMainSettings,
} from './data.js';
import './validate.js';
import './hashtags.js';
import {
  scaleMinValue,
  scaleMaxValue,
  scaleControlMin,
  scaleControlMax,
  imgUploadPreview,
} from './scale-control.js';
import {
  slider,
  sliderElement,
} from './effects.js';

const uploadFile = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');

uploadFile.addEventListener('change', () => {
  imgUploadPreview.removeAttribute('style');
  imgUploadPreview.removeAttribute('class');

  slider.classList.add('hidden');
  sliderElement.noUiSlider.updateOptions(sliderMainSettings);

  scaleMinValue.addEventListener('click', scaleControlMin);
  scaleMaxValue.addEventListener('click', scaleControlMax);

  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEY_CODES.esc) {
      imgUpload.classList.add('hidden');
      evt.preventDefault();
      document.body.classList.remove('modal-open');
      scaleMinValue.removeEventListener('click', scaleControlMin);
      scaleMaxValue.removeEventListener('click', scaleControlMax);
      uploadFile.value = '';
    }
  });
});

uploadCancel.addEventListener('click', () => {
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  scaleMinValue.removeEventListener('click', scaleControlMin);
  scaleMaxValue.removeEventListener('click', scaleControlMax);
  uploadFile.value = '';
});
