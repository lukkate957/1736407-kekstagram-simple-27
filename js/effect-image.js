const effectRadioButtonsElements = document.querySelectorAll('.effects__radio');
const sliderFieldsetElement = document.querySelector('.img-upload__effect-level');
const imageElement = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');
const effectOriginal = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

const effects = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

sliderValueElement.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  sliderValueElement.value = sliderElement.noUiSlider.get();

  if (imageElement.classList.contains(effects[1])) {
    sliderFieldsetElement.removeAttribute('hidden');
    imageElement.style.filter = `grayscale(${sliderValueElement.value})`;
  } else if (imageElement.classList.contains(effects[2])) {
    sliderFieldsetElement.removeAttribute('hidden');
    imageElement.style.filter = `sepia(${sliderValueElement.value})`;
  } else if (imageElement.classList.contains(effects[3])) {
    sliderFieldsetElement.removeAttribute('hidden');
    imageElement.style.filter = `invert(${sliderValueElement.value}%)`;
  } else if (imageElement.classList.contains(effects[4])) {
    sliderFieldsetElement.removeAttribute('hidden');
    imageElement.style.filter = `blur(${sliderValueElement.value}px)`;
  } else if (imageElement.classList.contains(effects[5])){
    sliderFieldsetElement.removeAttribute('hidden');
    imageElement.style.filter = `brightness(${sliderValueElement.value})`;
  } else {
    setEffectDefault();
  }
});


function changeEffect () {
  for (let i = 0; i < effectRadioButtonsElements.length; i++) {
    if (effectRadioButtonsElements[i].checked) {
      imageElement.classList.add(effects[i]);
    } else {
      imageElement.classList.remove(effects[i]);
    }
  }
}

function changeSlider(evt) {
  if (evt.target === effectChrome) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
  } else if (evt.target === effectSepia) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (evt.target === effectMarvin) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  } else if (evt.target === effectPhobos) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else if (evt.target === effectHeat) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  }
}

function setEffectDefault() {
  if (effectRadioButtonsElements[0].checked) {
    imageElement.style.filter = '';
    sliderFieldsetElement.setAttribute('hidden', true);
    changeEffect();
  }
}

function toggleRadio(evt) {
  changeEffect();
  changeSlider(evt);

}
effectRadioButtonsElements.forEach((button) => {
  button.addEventListener('change', toggleRadio);
});

export { setEffectDefault };
