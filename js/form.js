import {
  isEscapeKey,
  removeStyle,
  removeClass,
} from './util.js';

import {
  scaleMinValue,
  scaleMaxValue,
  scaleControlMin,
  scaleControlMax,
  imgUploadPreview,
  scaleValue,
  MAX_SCALE,
} from './scale-control.js';

import {
  slider,
  sliderElement,
  sliderMainSettings,
} from './effects.js';

const uploadFile = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');

const removeScaleControl = () => {
  scaleMinValue.removeEventListener('click', scaleControlMin);
  scaleMaxValue.removeEventListener('click', scaleControlMax);
};

const closeForm = (isFormSubmit = false) => {
  if (isFormSubmit) {
    const success = document.querySelector('#success');

    document.body.append(success.content.cloneNode(true));

    const successButton = document.querySelector('.success__button');

    successButton.addEventListener('click', () => closeSuccessButton(successButton));
    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeSuccessButton(successButton);
      }
    });
  }

  function closeSuccessButton(successButton) {
    document.querySelector('.success').remove();
    successButton.removeEventListener('click', closeSuccessButton);
    document.querySelector('#effect-none').checked = true;
    scaleValue.value = `${MAX_SCALE}%`;
    document.querySelector('.text__description').value = '';
    document.querySelector('.text__hashtags').value = '';
  }

  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';

  document.onclick = (element) => {
    if (element.target.className !== '.success') {
      document.querySelector('.success').remove();
    }
  };
};

const resetForm = () => {
  removeScaleControl();
  closeForm();
};

uploadFile.addEventListener('change', (event) => {
  removeStyle(imgUploadPreview);
  removeClass(imgUploadPreview);

  const target = event.target;

  if (!target.files.length) {
    return;
  }

  const fileReader = new FileReader();
  fileReader.onload = () => {
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
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      resetForm();
    }
  });
});

uploadCancel.addEventListener('click', resetForm);

export {closeForm};
