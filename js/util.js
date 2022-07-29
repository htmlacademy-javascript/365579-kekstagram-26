const isEscapeKey = (evt) => evt.key === 'Escape';

const removeStyle = (element) => {
  element.removeAttribute('style');
};

const removeClass = (element) => {
  element.removeAttribute('class');
};

const onPreventsDefault = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    evt.preventDefault();
  }
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, removeStyle, removeClass, onPreventsDefault, debounce};
