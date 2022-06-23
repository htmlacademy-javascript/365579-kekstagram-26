import {getPhotoPost} from './create-photo.js';

const userPicture = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const pictureGalery = getPhotoPost;
const pictureGaleryFragment = document.createDocumentFragment();

pictureGalery.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureGaleryFragment.appendChild(pictureElement);
});

userPicture.appendChild(pictureGaleryFragment);
