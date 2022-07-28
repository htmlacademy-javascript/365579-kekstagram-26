import {openBigPicture} from './big-picture.js';
import {getFiltersPhoto} from './filters.js';

const userPicture = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureElements = userPicture.querySelectorAll('.picture');
pictureElements.forEach((element) => {
  element.remove();
});

const renderUsersPhotos = (usersPhoto) => {
  const pictureGaleryFragment = document.createDocumentFragment();

  usersPhoto.forEach(({url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureGaleryFragment.append(pictureElement);

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture(url, likes, comments, description);
    });
  });

  userPicture.append(pictureGaleryFragment);
};

const successData = (usersPhoto) => {
  getFiltersPhoto(usersPhoto);
  renderUsersPhotos(usersPhoto);
};

export {successData, renderUsersPhotos};
