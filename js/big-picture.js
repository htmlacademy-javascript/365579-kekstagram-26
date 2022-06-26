import {
  getPhotoPost,
  storageComments,
} from './create-photo.js';

const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

pictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    getPhotoPost.forEach(({url, likes, comments, description}) => {
      bigPicture.querySelector('.big-picture__img').src = url;
      bigPicture.querySelector('.likes-count').textContent = likes;
      bigPicture.querySelector('.comments-count').textContent = comments.length;
      bigPicture.querySelector('.social__caption').textContent = description;
    });

    storageComments.forEach(({avatar, name, message}) => {
      socialComments.querySelector('.social__picture').src = avatar;
      socialComments.getAttribute.alt = name;
      socialComments.querySelector('.social__text').textContent = message;
    });

    if (bigPicture !== '.hidden') {
      commentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      document.body.classList.add('modal-open');

      bigPictureCancel.addEventListener('click', () => {
        bigPicture.classList.add('hidden');
      });
    }

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        bigPicture.classList.add('hidden');
      }
    });
  });
});
