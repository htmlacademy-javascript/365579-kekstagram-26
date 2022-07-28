const URL_GET = 'https://26.javascript.pages.academy/kekstagram/data';
const URL_SEND = 'https://26.javascript.pages.academy/kekstagram';
const DATA_GET_ERROR = 'Не удалось загрузить фотографии';
const DATA_POST_ERROR = 'Не удалось отправить форму. Попробуйте еще раз';

const getUsersPhotos = async (onSuccess, onFail) => {
  try {
    const response = await fetch(URL_GET);

    if(!response.ok) {
      throw new Error(DATA_GET_ERROR);
    }

    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

const sendPhoto = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(URL_SEND,
      {
        method: 'POST',
        body,
      }
    );

    if(!response.ok) {
      throw new Error(DATA_POST_ERROR);
    }

    onSuccess(true);
  } catch (error) {
    onFail(error.message);
  }
};

export {getUsersPhotos, sendPhoto};


