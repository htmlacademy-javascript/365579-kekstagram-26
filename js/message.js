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

const messageFragment = document.createElement('div');
const errorTemplate = document.querySelector('#error');
const successTemplate = document.querySelector('#success');
const closeAlertButton = document.querySelectorAll('.error__button');
const successButton = document.querySelectorAll('.success__button');

const successMessage = () => {
  messageFragment.append(successTemplate.content.cloneNode(true));
  document.body.append(messageFragment);
  messageFragment.style.zIndex = '100';

  successButton.addEventListener('click', () => {
    messageFragment.remove();
  });
};


const errorLoadMessage = () => {
  messageFragment.append(errorTemplate.content.cloneNode(true));
  document.body.append(messageFragment);
  messageFragment.style.zIndex = '100';

  closeAlertButton.addEventListener('click', () => {
    messageFragment.remove();
  });
};


export {showAllert, successMessage, errorLoadMessage};
