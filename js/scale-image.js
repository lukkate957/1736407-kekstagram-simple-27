const imageElement = document.querySelector('.img-upload__preview');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const smallerButtonElement = document.querySelector('.scale__control--smaller');
const scaleInputElement = document.querySelector('.scale__control--value');

let scale = 100;

function setScaleDefault() {
  scale = 100;
  scaleInputElement.value = `${scale}%`;
  updateScale();
}

function updateScale() {
  scale = Math.min(Math.max(scale, 25), 100);
  imageElement.style.transform = `scale(${scale / 100})`;
  scaleInputElement.value = `${scale}%`;
}

biggerButtonElement.addEventListener('click', () => {
  scale += 25;
  updateScale();
});

smallerButtonElement.addEventListener('click', () => {
  scale -= 25;
  updateScale();
});

export {setScaleDefault};
