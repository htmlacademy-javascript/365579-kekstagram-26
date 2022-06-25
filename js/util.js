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


//получает случайный элемент массива
function getRandomArrayElement (elements) {
  return elements[getRandomInt(0, elements.length -1)];
}

export {getRandomInt, getRandomArrayElement};
