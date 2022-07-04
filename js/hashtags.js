import {
  imgUploadForm,
} from './validate.js';

import {
  KEY_CODES,
} from './data.js';

function validateHashtag () {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const re = /^#[A-Za-zA-Яа-яЕё0-9]{1,19}$/;
    const hashtags = document.querySelector('.text__hashtags');
    const hashtag = ` ${hashtags.value.toLowerCase()}`;
    const hashtagsSet = hashtag.split(' #');
    const uniqueHashtag = Array.from(new Set(hashtagsSet));
    const tag = uniqueHashtag.shift();
    console.log(tag);
    const maxHachtagsLength = 20;
    const maxHachtagsCount = 5;

    for (let i = 0; i < hashtagsSet.length; i++) {
      if (hashtagsSet.length > maxHachtagsCount) {
        return `Превышено максимальное количество тегов, максимум${maxHachtagsCount}хеш-тегов`;
      }

      if (hashtagsSet[i] === '#') {
        return 'Хеш-тег не может состоять тольк из "#": ';
      } else if (hashtagsSet[i][0] !== '#') {
        return 'Хеш-тег должен начинаться с "#": ';
      }

      if (hashtagsSet[i].length > maxHachtagsLength) {
        return 'Превышена максимальная длина хеш-тега (20 - символов)';
      }

      if (re.test(hashtagsSet)) {
        ;
      } else {
        return('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
      }

      if (hashtags.focus()) {
        imgUploadForm.addEventListener('keydown', () => {
          if (evt.keyCode === KEY_CODES.esc) {
            return false;
          }
        });
      }
    }
  });
}

export {validateHashtag};