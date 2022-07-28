const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomInt = (min, max) => (min < 0 || max <= min)
  ? false
  : Math.floor(Math.random() * (max - min + 1)) + min;

const removeStyle = (element) => {
  element.removeAttribute('style');
};

const removeClass = (element) => {
  element.removeAttribute('class');
};
//getRandomArrayElement, debounce ( почему-то не используется, что не соответствует главному критерию по ТЗ ) и другие переменные / функции
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, getRandomInt, removeStyle, removeClass, debounce};
