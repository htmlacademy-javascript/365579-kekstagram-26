import {
  isEscapeKey,
} from './util.js';

const NUMBER_COMMENTS_OPEN = 5;
const NUMBER_COMMENTS_HIDDEN = 4;
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');

const loadCommentsHandler = () => {
  const onClickCommentsLoader = commentsList.querySelectorAll('.hidden');
  const commentCount = socialCommentCount.querySelector('.comment-count--shown').textContent;

  onClickCommentsLoader.forEach((element, index) => {
    if (index <= NUMBER_COMMENTS_HIDDEN) {
      element.classList.remove('hidden');
    }
  });

  socialCommentCount.querySelector('.comment-count--shown').textContent = parseInt(commentCount, 10) + NUMBER_COMMENTS_OPEN;

  if (onClickCommentsLoader.length <= NUMBER_COMMENTS_OPEN) {
    commentsLoader.classList.add('hidden');
    socialCommentCount.querySelector('.comment-count--shown').textContent = parseInt(commentCount, 10) + onClickCommentsLoader.length;
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.removeEventListener('click', loadCommentsHandler);
};

const closeBigPictureKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (url, likes, comments, description) => {
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

  arrayComments.forEach((el, index) => {
    if (index > NUMBER_COMMENTS_HIDDEN) {
      el.classList.add('hidden');
    }
    commentsList.append(el);
  });

  if (arrayComments.length <= NUMBER_COMMENTS_OPEN) {
    commentsLoader.classList.add('hidden');
    socialCommentCount.querySelector('.comment-count--shown').textContent = arrayComments.length;
  } else {
    commentsLoader.classList.remove('hidden');
    socialCommentCount.querySelector('.comment-count--shown').textContent = 5;
  }

  document.body.classList.add('modal-open');

  commentsLoader.addEventListener('click', loadCommentsHandler);

  bigPictureCancel.addEventListener('click', closeBigPicture);

  document.addEventListener('keydown', closeBigPictureKeydown);
};

export {openBigPicture};
