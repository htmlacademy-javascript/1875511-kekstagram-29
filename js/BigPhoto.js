import { renderPhotoDetails } from './renderBigPhoto.js';

const bigPictureContainer = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPictureContainer.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

function showBigPhoto (picture) {
  bigPictureContainer.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentCount.classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  renderPhotoDetails(picture);
}

function closeBigPhoto () {
  bigPictureContainer.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  commentCount.classList.remove('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButton.addEventListener ('click', () => {
  closeBigPhoto();
});

export { showBigPhoto };
