import {renderUsersPhotos} from './pictures.js';

const getUsersPhotos = async (onSuccess, onFail) => {
  try {
    const response = await fetch(
      'https://26.javascript.pages.academy/kekstagram/data'
    );

    if(!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }

    const offers = await response.json();
    renderUsersPhotos(offers);
  } catch (error) {
    onFail(error.message);
  }
};

export {getUsersPhotos,};
