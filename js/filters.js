import {getRandomInt} from './util.js';
import {renderUsersPhotos} from './pictures.js';
import {COUNT_RANDOM_PHOTOS} from './data.js';

const filtersPhoto = (usersPhoto) => {
  const filters = document.querySelector('.img-filters');
  const filtersButtons = filters.querySelectorAll('.img-filters__button');

  const sortsPicturesRandom = (pictures) => {
    const picturesCopy = pictures.slice();
    const randomPictures = [];

    for (let i = 0; i < COUNT_RANDOM_PHOTOS; i++) {
      const randomIndex = getRandomInt(0, (picturesCopy.length - 1));
      const picture = picturesCopy.splice(randomIndex, 1)[0];
      randomPictures.push(picture);
    }

    return randomPictures;
  };

  const sortsPicturesByComment = (pictures) => {
    const picturesCopy = pictures.slice();

    picturesCopy.sort((a, b) =>
      a.comments.length - b.comments.length
    );

    return picturesCopy.reverse();
  };

  const filterMethods = {
    default: (array) => array,
    random: (array) => sortsPicturesRandom(array),
    discussed: (array) => sortsPicturesByComment(array),
  };

  filters.classList.remove('img-filters--inactive');

  filtersButtons.forEach((button) => {
    const filterType = button.getAttribute('id').replace('filter-', '');

    button.addEventListener('click', (evt) => {
      const filteredPhotos = filterMethods[filterType](usersPhoto);
      renderUsersPhotos(filteredPhotos);
      evt.preventDefault();

      filtersButtons.forEach((el) => {
        el.classList.remove('img-filters__button--active');
      });

      button.classList.add('img-filters__button--active');
    });
  });
};

export {filtersPhoto};
