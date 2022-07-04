import {
  KEY_CODES,
} from './data.js';
import './validate.js';
import './hashtags.js';

const uploadFile = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');


uploadFile.addEventListener('click', () => {
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEY_CODES.esc) {
      imgUpload.classList.add('hidden');
      evt.preventDefault();
      document.body.classList.remove('modal-open');
      uploadFile.innerHTML = '';
    }
  });
});

uploadCancel.addEventListener('click', () => {
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.innerHTML = '';
});

