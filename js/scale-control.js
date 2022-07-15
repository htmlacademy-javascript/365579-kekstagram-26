const MAX_SCALE = 100;
const MIN_SCALE = 25;

const scaleMinValue = document.querySelector('.scale__control--smaller');
const scaleMaxValue = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
scaleValue.value = 100;
const imgUploadPreview = document.querySelector('.img-upload__preview');

scaleMinValue.addEventListener('click', () => {
  if (parseInt(scaleValue.value, 10) <= MAX_SCALE && parseInt(scaleValue.value, 10) > MIN_SCALE) {
    scaleValue.value = parseInt(scaleValue.value, 10) -+ MIN_SCALE;
  }
});

scaleMaxValue.addEventListener('click', () => {
  if (parseInt(scaleValue.value, 10) === MAX_SCALE) {
    return scaleValue.value;
  } else {
    scaleValue.value = parseInt(scaleValue.value, 10) + MIN_SCALE;
  }
});
