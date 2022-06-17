import {getRandomInt} from './util.js';
import {getRandomArrayElement} from './util.js';
import {COMMENT} from './data.js';
import {NAMES} from './data.js';
import {SURNAMES} from './data.js';
import {PHOTO_DESCRIPTION} from './data.js';
import {USER_POST_COUNTER} from './data.js';
import {MAX_LENGTH_COMMENT} from './data.js';

//проверяет кол-во символов в строке
function isStringMaxLength(checkString, maxStringLength) {
  return checkString.length <= maxStringLength;
}

const comments = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENT),
  name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
});

const storageComments = Array.from({length: USER_POST_COUNTER}, (currentValue, index) => comments(index));

const photoDescription = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION),
  likes: getRandomInt(15, 200),
  comments: storageComments,
});

const getPhotoPost = Array.from({length: USER_POST_COUNTER}, (currentValue, index) => photoDescription(index));

export {getPhotoPost};
