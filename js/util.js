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

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export {getRandomInt, getRandomArrayElement, debounce};
