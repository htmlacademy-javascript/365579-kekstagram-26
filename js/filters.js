import {
  renderUsersPhotos,
} from './pictures.js';

const COUNT_RANDOM_PHOTOS = 10;

const sortPicturesRandom = (pictures) => {
  const picturesCopy = pictures.slice();

  picturesCopy.sort(() => 0.5 - Math.random());

  return picturesCopy.slice(0, COUNT_RANDOM_PHOTOS);
};

const sortPicturesByComment = (pictures) => {
  const picturesCopy = pictures.slice();

  picturesCopy.sort((a, b) =>
    b.comments.length - a.comments.length
  );
  return picturesCopy;
};

const filterMethods = {
  default: (array) => array,
  random: (array) => sortPicturesRandom(array),
  discussed: (array) => sortPicturesByComment(array),
};

const getFiltersPhoto = (usersPhoto) => {
  const filters = document.querySelector('.img-filters');
  const filtersButtons = filters.querySelectorAll('.img-filters__button');

  filters.classList.remove('img-filters--inactive');

  filtersButtons.forEach((button) => {
    const filterType = button.getAttribute('id').replace('filter-', '');

    button.addEventListener('click', () => {
      const filteredPhotos = filterMethods[filterType](usersPhoto);
      renderUsersPhotos(filteredPhotos);

      const activeButton = document.querySelector('.img-filters__button--active');

      activeButton.classList.remove('img-filters__button--active');
      button.classList.add('img-filters__button--active');
    });
  });
};

export {getFiltersPhoto};
