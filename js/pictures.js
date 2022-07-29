import {
  openBigPicture,
} from './big-picture.js';
import {
  getFiltersPhoto,
} from './filters.js';

const userPicture = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderUsersPhotos = (usersPhoto) => {
  const pictureGalleryFragment = document.createDocumentFragment();

  const pictureElements = userPicture.querySelectorAll('.picture');
  pictureElements.forEach((element) => {
    element.remove();
  });

  usersPhoto.forEach(({url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureGalleryFragment.append(pictureElement);

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture(url, likes, comments, description);
    });
  });

  userPicture.append(pictureGalleryFragment);
};

const SuccessDataHandler = (usersPhoto) => {
  getFiltersPhoto(usersPhoto);
  renderUsersPhotos(usersPhoto);
};

export {SuccessDataHandler, renderUsersPhotos};
