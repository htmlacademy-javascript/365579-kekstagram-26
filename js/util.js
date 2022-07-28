const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomInt = (min, max) => {
  if(min < 0) {
    return false;
  }

  if(max <= min) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {isEscapeKey, getRandomInt, debounce};
