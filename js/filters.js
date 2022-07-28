import {
  getRandomInt,
} from './util.js';
import {
  renderUsersPhotos,
} from './pictures.js';
import {
  COUNT_RANDOM_PHOTOS,
} from './data.js';
////iltersPhoto, sortsPicturesRandom, sortsPicturesByComment, successData - переименованы
const sortPicturesRandom = (pictures) => {
  const picturesCopy = pictures.slice();
  const randomPictures = [];

  for (let i = 0; i < COUNT_RANDOM_PHOTOS; i++) {
    const randomIndex = getRandomInt(0, (picturesCopy.length - 1));
    const picture = picturesCopy.splice(randomIndex, 1)[0];
    randomPictures.push(picture);
  }

  return randomPictures;
};
////iltersPhoto, sortsPicturesRandom, sortsPicturesByComment, successData - переименованы
const sortPicturesByComment = (pictures) => {
  const picturesCopy = pictures.slice();

  picturesCopy.sort((a, b) =>
    a.comments.length - b.comments.length
  );

  return picturesCopy.reverse();
};
//iltersPhoto, sortsPicturesRandom, sortsPicturesByComment, successData - переименованы
const getFiltersPhoto = (usersPhoto) => {
  const filters = document.querySelector('.img-filters');
  const filtersButtons = filters.querySelectorAll('.img-filters__button');

  const filterMethods = {
    default: (array) => array,
    random: (array) => sortPicturesRandom(array),
    discussed: (array) => sortPicturesByComment(array),
  };

  filters.classList.remove('img-filters--inactive');

  filtersButtons.forEach((button) => {
    const filterType = button.getAttribute('id').replace('filter-', '');

    button.addEventListener('click', () => {
      const filteredPhotos = filterMethods[filterType](usersPhoto);
      renderUsersPhotos(filteredPhotos);

      const activeButton = document.querySelector('img-filters__button--active');

      activeButton.classList.remove('img-filters__button--active');
      button.classList.add('img-filters__button--active');
    });
  });
};

export {getFiltersPhoto};
