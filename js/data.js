const MAX_LENGTH_COMMENT = 140;
const USER_POST_COUNTER = 25;
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];
const COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const PHOTO_DESCRIPTION = [
  'Описание фотографии 1',
  'Описание фотографии 2',
  'Описание фотографии 3',
  'Описание фотографии 4',
  'Описание фотографии 5',
  'Описание фотографии 6'
];

const KEY_CODES = {esc: 27};

const sliderMainSettings = {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
};

const COUNT_RANDOM_PHOTOS = 10;

const RERENDER_DELAY = 500;

export {COMMENT, NAMES, SURNAMES, PHOTO_DESCRIPTION, USER_POST_COUNTER, MAX_LENGTH_COMMENT, KEY_CODES, sliderMainSettings, COUNT_RANDOM_PHOTOS, RERENDER_DELAY};
