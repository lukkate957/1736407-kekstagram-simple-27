import { showAlert, isEscapeKey } from './util.js';
import { sendData } from './api.js';
import { onPopupEscKeydown } from './modal.js';
const imageUploadForm = document.querySelector('.img-upload__form');
const uploadSubmitButton = document.querySelector('#upload-submit');

const bodyElement = document.querySelector('body');

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageFragment = document.createDocumentFragment();
const successMessageElement = successMessageTemplate.cloneNode(true);
const successButton = successMessageElement.querySelector('.success__button');
const successMessageDiv = successMessageElement.querySelector('.success__inner');


const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageFragment = document.createDocumentFragment();
const errorMessageElement = errorMessageTemplate.cloneNode(true);
const errorButton = errorMessageElement.querySelector('.error__button');
const errorMessageDiv = errorMessageElement.querySelector('.error__inner');


const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    closeErrorMessage();
  }
};

const onSuccessClickOutside = (evt) => {
  // Проверяем, что клик был произведен за пределами блока сообщения


  if (evt.target !== successMessageDiv) {
    closeSuccessMessage(); // скрываем элемент т к клик был за его пределами
  }
};

const onErrorClickOutside = (evt) => {
  // Проверяем, что клик был произведен за пределами блока сообщения


  if (evt.target !== errorMessageDiv) {
    closeErrorMessage(); // скрываем элемент т к клик был за его пределами
  }
};


function showSuccessMessage() {
  successMessageFragment.appendChild(successMessageElement);
  bodyElement.appendChild(successMessageFragment);
  document.addEventListener('keydown', onSuccessEscKeydown);

  document.addEventListener('click', onSuccessClickOutside);
}

function closeSuccessMessage() {
  successMessageElement.remove();

  document.removeEventListener('keydown', onSuccessEscKeydown);
  document.removeEventListener('click', onSuccessClickOutside);


}

function showErrorMessage() {
  errorMessageFragment.appendChild(errorMessageElement);
  bodyElement.appendChild(errorMessageFragment);
  document.removeEventListener('keydown', onPopupEscKeydown);

  document.addEventListener('keydown', onErrorEscKeydown);

  document.addEventListener('click', onErrorClickOutside);
}

function closeErrorMessage() {
  errorMessageElement.remove();

  document.removeEventListener('keydown', onErrorEscKeydown);
  document.removeEventListener('click', onErrorClickOutside);


}

successButton.addEventListener('click', () => {
  closeSuccessMessage();
});


errorButton.addEventListener('click', () => {
  closeErrorMessage();
});

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload-form__element',
  errorTextParent: 'img-upload-form__element',
  errorTextClass: 'img-upload__form__error-text',
});

const blockSubmitButton = () => {
  uploadSubmitButton.disabled = true;
  uploadSubmitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  uploadSubmitButton.disabled = false;
  uploadSubmitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {

  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();

        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};
