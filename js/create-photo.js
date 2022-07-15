import {
  getRandomInt,
  getRandomArrayElement
} from './util.js';

import {
  COMMENT,
  NAMES,
  SURNAMES,
  PHOTO_DESCRIPTION,
  USER_POST_COUNTER,
} from './data.js';

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

export {getPhotoPost, storageComments};
