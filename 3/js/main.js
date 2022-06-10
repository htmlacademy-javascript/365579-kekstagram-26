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
  }

  if(max <= min) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//получает элемент случайного массива
function getRandomArrayElement (elements) {
  return elements[getRandomInt(0, elements.length -1)];
}


const comments = () => ({
  avatar: `img/avatar-${  getRandomInt(1, 6)  }.svg`,
  message: getRandomArrayElement(COMMENT),
  name: `${getRandomArrayElement(NAMES)  } ${  getRandomArrayElement(SURNAMES)}`,
});

const storageComments = Array.from({length: USER_POST_COUNTER}, comments);

storageComments.forEach((element, index) => {
  element.id = index + 1;
});


const getPhotoDescription = (new Array(25)).fill(undefined).map(
  (_,index)=> ({
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomInt(15, 200),
    comments: storageComments
  })
);

console.log(getPhotoDescription);


