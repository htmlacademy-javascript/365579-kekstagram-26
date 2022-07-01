import {
  MAX_LENGTH_COMMENT,
} from './data.js';

const imgUploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper', // Элемент, на который будут добавляться классы
  errorClass: 'form__item--invalid', // Класс, обозначающий невалидное поле
  successClass: 'form__item--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'img-upload__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'pristine__error' // Класс для элемента с текстом ошибки
},
false);

function validateComments (value) {
  return value.length >= 0 && value.length <= MAX_LENGTH_COMMENT;
}

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  validateComments,
  `длина комментария не может составлять больше${  MAX_LENGTH_COMMENT  }символов`
);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
  imgUploadForm.submit();
});

export {imgUploadForm};


