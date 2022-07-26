import {
  KEY_CODES,
} from './data.js';

const showAllert = (message) => {
  const ALERT_SHOW_TIME = 5000;
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

const errorLoadMessage = () => {
  const errorTemplate = document.querySelector('#error');

  document.body.append(errorTemplate.content.cloneNode(true));

  const closeAlertButton = document.querySelector('.error__button');

  function closeButton() {
    document.querySelector('.error').remove();

    closeAlertButton.removeEventListener('click', closeButton);
    closeAlertButton.removeEventListener('keydown', errorLoadMessage);
  }

  closeAlertButton.addEventListener('click', closeButton);
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEY_CODES.esc) {
      evt.preventDefault();
      closeButton();
    }
  });
};

export {showAllert, errorLoadMessage};
