import {isEscapeKey} from './util.js';
import {setEffectDefault} from './effect-image.js';
import { setScaleDefault } from './scale-image.js';

const inputImageElement = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const userModalCloseElement = userModalElement.querySelector('#upload-cancel');
const bodyElement = document.querySelector('body');
const commentsElement = document.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  setEffectDefault();
  setScaleDefault();
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  inputImageElement.value = '';
  commentsElement.textContent = '';
  userModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

inputImageElement.addEventListener('change', (evt) => {
  if (evt.target.value !== '') {
    openUserModal();
  }
}
);

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});
