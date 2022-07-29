import {
  onPreventsDefault,
} from './util.js';

import {
  checkValidateHashtag,
} from './hashtags.js';

import {
  sendPhoto,
} from './api.js';

import {
  loadMessageError,
} from './message.js';

import {
  closeForm,
} from './form.js';

const MAX_LENGTH_COMMENT = 140;
const imgUploadForm = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper', // Элемент, на который будут добавляться классы
  errorClass: 'form__item--invalid', // Класс, обозначающий невалидное поле
  successClass: 'form__item--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'img-upload__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'p', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'pristine__error' // Класс для элемента с текстом ошибки
},
false);
//validateHashtag | validateComments | - функция возвращающие boolean должны иметь соответсвующее название,
function checkValidateComments (value) {
  return value.length >= 0 && value.length <= MAX_LENGTH_COMMENT;
}

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  checkValidateComments,
  `длина комментария не может составлять больше ${MAX_LENGTH_COMMENT} символов`
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  () => checkValidateHashtag(hashtags.value),
  'неправильное значение поле для хештега'
);

hashtags.addEventListener('keydown', onPreventsDefault);

comment.addEventListener('keydown', onPreventsDefault);


imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    sendPhoto(
      closeForm,
      loadMessageError,
      new FormData(evt.target),
    );
  }
});


