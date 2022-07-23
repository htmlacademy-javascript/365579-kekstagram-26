import {getPhotoPost} from './create-photo.js';
import {openBigPicture} from './big-picture.js';

const userPicture = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureGaleryFragment = document.createDocumentFragment();

getPhotoPost.forEach(({url, likes, comments, description}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureGaleryFragment.appendChild(pictureElement);

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(url, likes, comments, description);
  });
});

userPicture.appendChild(pictureGaleryFragment);
