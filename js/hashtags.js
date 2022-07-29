const checkValidateHashtag = (hashtags) => {
  const RE = /^#[A-Za-zA-Яа-яЕё0-9]{1,19}$/;
  const hashtag = ` ${hashtags.toLowerCase()}`;
  const hashtagsSet = hashtag.split(' ');
  hashtagsSet.shift();
  const uniqueHashtag = Array.from(new Set(hashtagsSet));
  const MAX_HACHTAGS_LENGTH = 20;
  const MAX_HACHTAGS_COUNT = 5;


  if (hashtagsSet.length > uniqueHashtag.length) {
    return false;
  }

  if (hashtagsSet.length > MAX_HACHTAGS_COUNT) {
    return false;
  }

  for (let i = 0; i < hashtagsSet.length; i++) {

    if (hashtagsSet[i] === '') {
      return true;
    }

    if (hashtagsSet[i] === '#') {
      return false;
    }

    if (hashtagsSet[i][0] !== '#') {
      return false;
    }

    if (hashtagsSet[i].length > MAX_HACHTAGS_LENGTH) {
      return false;
    }

    if (!RE.test(hashtagsSet[i])) {
      return false;
    }
  }
  return true;
};

export {checkValidateHashtag};
