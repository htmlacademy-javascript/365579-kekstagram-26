import {
  getPhotoPost,
  storageComments,
} from './create-photo.js';

const picture = document.querySelector('.picture');
const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const pictureElement = getPhotoPost;
const socialCommentsElement = storageComments;
const bigPictureFragment = document.createDocumentFragment();

picture.addEventListener('click', () => {
  bigPicture.classList.remove('hidden');
});

pictureElement.forEach(({url, likes, comments}) => {
  bigPicture.querySelector('.big-picture__img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments;
  bigPictureFragment.appendChild(bigPicture);
});

socialCommentsElement.forEach(({avatar, name, message}) => {
  socialComments.querySelector('.social__picture').src = avatar;
  socialComments.alt = name;
  socialComments.querySelector('.social__text').textContent = message;
  bigPictureFragment.appendChild(socialComments);
});


