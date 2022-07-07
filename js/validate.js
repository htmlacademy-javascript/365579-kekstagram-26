import {
  KEY_CODES,
  MAX_LENGTH_COMMENT,
} from './data.js';

import {
  validateHashtag,
} from './hashtags.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper', // Элемент, на который будут добавляться классы
  errorClass: 'form__item--invalid', // Класс, обозначающий невалидное поле
  successClass: 'form__item--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'img-upload__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'p', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'pristine__error' // Класс для элемента с текстом ошибки
},
false);

function validateComments (value) {
  return value.length >= 0 && value.length <= MAX_LENGTH_COMMENT;
}

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  validateComments,
  `длина комментария не может составлять больше ${MAX_LENGTH_COMMENT} символов`
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  validateHashtag,
  'неправильное значение поле для хештега'
);

hashtags.addEventListener('keydown', (evt) => {
  if (evt.keyCode === KEY_CODES.esc) {
    evt.stopPropagation();
    evt.preventDefault();
  }
});

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    imgUploadForm.submit();
  }
});

export {imgUploadForm, hashtags};


