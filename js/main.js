const MAX_LENGTH_COMMENT = 140;

function isStringMaxLength(checkString, maxStringLength)
{
  return checkString.length <= maxStringLength;
}

isStringMaxLength('1560', MAX_LENGTH_COMMENT);

//Функция взята с сайта https://developer.mozilla.org, за исключением условий
function getRandomInt(min, max)
{
  if(min < 0)
  {
    return false;
  }

  if(max <= min)
  {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 5);
