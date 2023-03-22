//import {createPosts} from './data.js';
import {renderPictures} from './pictures.js';
import { setUserFormSubmit } from './form.js';
import {closeUserModal} from './modal.js';
import {getData} from './api.js';
import { showAlert } from './util.js';

getData((posts) => {
  renderPictures(posts);
},
() => {
  showAlert('Не удалось загрузить посты от других пользователей. Попробуйте перезагрузить страницу.');
});

setUserFormSubmit(closeUserModal);
