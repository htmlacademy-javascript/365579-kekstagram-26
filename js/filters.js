import {getRandomInt} from './util.js';
import {renderUsersPhotos} from './pictures.js';

const filtersPhoto = (usersPhoto) => {
  const filters = document.querySelector('.img-filters');
  const filtersButtons = filters.querySelectorAll('.img-filters__button');
  const filterMethods = {
    default: (array) => array, // это просто возвращает то же что нам пришло
    random: (array) => sortsPicturesRandom(array), // это возвращает random
    discussed: (array) => sortsPicturesByComment(array), // это возвращает те что комментируются
  };

  filters.classList.remove('img-filters--inactive'); // просто показываем фильры

  filtersButtons.forEach((button) => { // бегаем по кнопкам фильтров
    const filterType = button.getAttribute('id').replace('filter-', ''); // у кнопки есть id и он равен значению filter-random как пример. Я просто отрезаю filter- от него и остается random.

    button.addEventListener('click', (evt) => { // каждой кнопке вешаем слушатель
      const filteredPhotos = filterMethods[filterType](usersPhoto); // вызываем нужный нам фильтр
      renderUsersPhotos(filteredPhotos); // выводим то что получилось после фильтрации (ну естественно вместо console.log надо отрендерить все картинки, то есть по сути надо сделать универсальную функцию рендера и её вызывать и тут и там где у тебя рендерятся картинки сразу после загрузки данных)

      // просто работаем с кнопочками
      evt.preventDefault();

      filtersButtons.forEach((el) => { // нам надо у всех кнопок удалить класс активности и присвоить нынешней кнопке этот класс. Собственно вплоть до 28 строки включительно я это и делаю. Это мы делали кучу раз
        el.classList.remove('img-filters__button--active');
      });

      button.classList.add('img-filters__button--active');
    });
  });
};

const sortsPicturesRandom = (pictures) => {
  const picturesCopy = pictures.slice(); // нам ужна копия чтоб не менять непосредственно параметр функции.
  const randomPictures = [];

  for (let i = 0; i < pictures.length; i++) {
    const randomIndex = getRandomInt(0, (picturesCopy.length - 1)); // я думаю тут очевидная вещь происходит и не нуждается в описании))
    const picture = picturesCopy.splice(randomIndex, 1)[0]; // кого-то выбираем из массива фоток
    randomPictures.push(picture); // вставляем этого кого-то
  }

  return randomPictures;
};

const sortsPicturesByComment = (pictures) => {
  const picturesCopy = pictures.slice(); // опять же чтоб не менять параметр

  picturesCopy.sort((a, b) =>  // изучаем как работает sort. Там всё просто
    a.comments.length - b.comments.length
  );

  return picturesCopy.reverse(); // почему reverse – вывести без него и смотреть как выведется (в обратную сторону из-за особенностей sort).
};

export {filtersPhoto};
