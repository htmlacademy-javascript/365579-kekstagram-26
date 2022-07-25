import {
  getRandomArrayElement
} from './util.js';
import {
  COUNT_RANDOM_PHOTOS,
  RERENDER_DELAY,
} from './data.js';
import {
  debounce
} from './util.js';
import {
  renderUsersPhotos,
} from './pictures.js';

const imgFiltersElement = document.querySelector('.img-filters');
const filterDefaultElement = document.querySelector('#filter-default');
const filterRandomElement = document.querySelector('#filter-random');
const filterDiscussedElement = document.querySelector('#filter-discussed');
const filters = document.querySelectorAll('.img-filters__button');
const activeButton = 'img-filters__button--active';

// Функция для сортировки фото по убыванию комментариев
function compareCommentNumbers(a, b) {
  return b.comments.length - a.comments.length;
}

// Функция удаляет класс активного фильтра с кнопки
const removeCurrentFilter = () => {
  filters.forEach((element) => {
    if(element.classList.contains(activeButton)) {
      element.classList.remove(activeButton);
    }
  });
};

// Функция возвращает отфильтрованные фото
let photos = [];
const renderComments = (filteredPhotos) => {
  photos = filteredPhotos;
};

// Функция возвращает массив фото исходя из нажатой кнопки
const getFilteredPhotos = (photos, choosenFilter) => {
  let filteredPhotos = [];
  return function () {
    switch(choosenFilter) {
      case filterDefaultElement:
        filterDefaultElement.classList.add(activeButton);
        filteredPhotos = photos.slice();
        break;
      case filterRandomElement:
        filterRandomElement.classList.add(activeButton);
        for(let i = 0; i <= COUNT_RANDOM_PHOTOS; i++) {
          filteredPhotos.push(getRandomArrayElement(photos));
        }
        break;
      case filterDiscussedElement:
        filterDiscussedElement.classList.add(activeButton);

        filteredPhotos = photos.slice().sort(compareCommentNumbers);
        break;
    }
    return filteredPhotos;
  }();
};

const setImgFilters = (photos) => {

  imgFiltersElement.classList.remove('img-filters--inactive');

  imgFiltersElement.addEventListener('click', (evt) => {
    const choosenFilter = evt.target;

    if(choosenFilter.classList.contains('img-filters__button--active') ||
      !choosenFilter.classList.contains('img-filters__button')) {
      return;
    }
    removeCurrentFilter();
    const filteredPhotos = getFilteredPhotos(photos, choosenFilter);
    // Отрисовываем отфильтрованные фото
    debounce(() => renderUsersPhotos(filteredPhotos), RERENDER_DELAY)();

    // Обновляем данные для отрисовки комментариев отфильтрованных фото
    renderComments(filteredPhotos);
  });

};

export {setImgFilters};
