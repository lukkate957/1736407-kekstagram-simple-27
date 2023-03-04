const picturesListElement = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesListFragment = document.createDocumentFragment();


const renderPictures = (pictures) => {
  pictures.forEach(({url, likes, comments}) => {
    const pictureElement = userPictureTemplate.cloneNode(true);
    pictureElement.querySelector('img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    picturesListFragment.appendChild(pictureElement);
  });

  picturesListElement.appendChild(picturesListFragment);
};
export {renderPictures};
