const validateHashtag = (hashtags) => {
  const re = /^#[A-Za-zA-Яа-яЕё0-9]{1,19}$/;
  const hashtag = ` ${hashtags.toLowerCase()}`;
  const hashtagsSet = hashtag.split(' ');
  hashtagsSet.shift();
  const uniqueHashtag = Array.from(new Set(hashtagsSet));
  const maxHachtagsLength = 20;
  const maxHachtagsCount = 5;


  if (hashtagsSet.length > uniqueHashtag.length) {
    return false;
  }

  if (hashtagsSet.length > maxHachtagsCount) {
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

    if (hashtagsSet[i].length > maxHachtagsLength) {
      return false;
    }

    if (!re.test(hashtagsSet[i])) {
      return false;
    }
  }
  return true;
}

export {validateHashtag};
