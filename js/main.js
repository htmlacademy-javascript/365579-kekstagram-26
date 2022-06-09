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

//проверяет кол-во символов в строке
function isStringMaxLength(checkString, maxStringLength) {
  return checkString.length <= maxStringLength;
}

isStringMaxLength('1560', MAX_LENGTH_COMMENT);

//Функция взята с сайта https://developer.mozilla.org, за исключением условий
//Ищет случайное число в заданном диапазоне
function getRandomInt(min, max) {
  if(min < 0) {
    return false;
  };

  if(max <= min) {
    return false;
  };
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//получает элемент случайного массива
function getRandomArrayElement (elements) {
  return elements[getRandomInt(0, elements.length -1)];
};

function loadPhoto() {
  return {
    id: ,
    url: ,
    description: '',
    likes: ,
    comments: ,
  };
};
loadPhoto();

let comments = () => {
  return {
    id: 135,
    avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
    message: getRandomArrayElement(COMMENT),
    name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
  };
};

let storageComments = Array.from({length: USER_POST_COUNTER}, comments);

console.log(comments());
console.log(storageComments);

