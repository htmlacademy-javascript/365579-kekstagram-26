import {
  KEY_CODES,
} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
}

function openBigPicture(url, likes, comments, description) {
  const arrayComments = [];
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  comments.forEach(({avatar, name, message}) => {
    const socialCommentLi = document.querySelector('.social__comment').cloneNode(true);
    socialCommentLi.querySelector('.social__picture').src = avatar;
    socialCommentLi.querySelector('.social__picture').alt = name;
    socialCommentLi.querySelector('.social__text').textContent = message;
    arrayComments.push(socialCommentLi);
  });

  while (commentsList.firstChild) {
    commentsList.removeChild(commentsList.firstChild);
  }

  arrayComments.forEach((el) => {
    commentsList.append(el);
  });

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  bigPictureCancel.addEventListener('click', () => {
    closeBigPicture();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEY_CODES.esc) {
      evt.preventDefault();
      closeBigPicture();
    }
  });
}

export {openBigPicture};
