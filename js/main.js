//Функция взята с сайта https://developer.mozilla.org, за исключением условий
function getRandomInt(min, max)
{
  if (min < 0)
  {
    return false;
  }

  if (max <= min)
  {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 5);


const MAX_COMMENT = 140;

function maxLength(commentLength, maxCommentLength) {
  return commentLength.length <= maxCommentLength;
}
maxLength('1560', MAX_COMMENT);
