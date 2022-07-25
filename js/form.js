import {
  KEY_CODES,
  sliderMainSettings,
} from './data.js';
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
import {
  successMessage,
} from './message.js';

const uploadFile = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');

function closeForm(data = '') {
  if (data.length !== 0) {
    successMessage();
  }
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
}

uploadFile.addEventListener('change', (event) => {
  imgUploadPreview.removeAttribute('style');
  imgUploadPreview.removeAttribute('class');

  const target = event.target;

  if (!target.files.length) {
    return;
  }

  const fileReader = new FileReader();
  fileReader.onload = function() {
    imgUploadPreview.src = fileReader.result;
  };

  fileReader.readAsDataURL(target.files[0]);

  slider.classList.add('hidden');
  sliderElement.noUiSlider.updateOptions(sliderMainSettings);

  scaleMinValue.addEventListener('click', scaleControlMin);
  scaleMaxValue.addEventListener('click', scaleControlMax);

  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEY_CODES.esc) {
      evt.preventDefault();
      scaleMinValue.removeEventListener('click', scaleControlMin);
      scaleMaxValue.removeEventListener('click', scaleControlMax);
      closeForm();
    }
  });
});

uploadCancel.addEventListener('click', () => {
  scaleMinValue.removeEventListener('click', scaleControlMin);
  scaleMaxValue.removeEventListener('click', scaleControlMax);
  closeForm();
});

export {closeForm};
