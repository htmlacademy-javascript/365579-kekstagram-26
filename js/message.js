import {
  isEscapeKey,
} from './util.js';

const showAlert = (message) => {
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

const loadMessageError = () => {
  const errorTemplate = document.querySelector('#error');

  document.body.append(errorTemplate.content.cloneNode(true));

  const closeAlertButton = document.querySelector('.error__button');

  function pushCloseButton() {
    document.querySelector('.error').remove();

    closeAlertButton.removeEventListener('click', pushCloseButton);
    closeAlertButton.removeEventListener('keydown', loadMessageError);
  }

  closeAlertButton.addEventListener('click', pushCloseButton);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      pushCloseButton();
    }
  });

  document.onclick = (element) => {
    if (element.target.className !== '.error') {
      document.querySelector('.error').remove();
    }
  };
};

export {showAlert, loadMessageError};
