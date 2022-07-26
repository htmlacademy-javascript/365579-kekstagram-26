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
  const errorTemplate = document.querySelector('#error'); // находим template с ошибкой

  document.body.append(errorTemplate.content.cloneNode(true)); // вставляем его содержимое прям в конец body (не надо в div вставлять а потом div в body, нет никакого смысла, сразу вставляем элемент в body и всё)

  const closeAlertButton = document.querySelector('.error__button'); // и ТОЛЬКО когда вставили в конец body – ищем эту кнопку

  function closeButton() {
    document.querySelector('.error').remove(); // удаляем именно так, а не невесть как. Это новый элемент на странице, нам не надо шаблон удалять (что ты и делал, пытался удалить errorTemplate зачем-то). Нам надо удалить вставленную форму, а она с классом error.

    closeAlertButton.removeEventListener('click', closeButton);
    closeAlertButton.removeEventListener('keydown', errorLoadMessage);
  }

  closeAlertButton.addEventListener('click', closeButton);
};

export {showAllert, errorLoadMessage};
