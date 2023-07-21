import { showBigPhoto } from './BigPhoto.js';
import { renderComments } from './renderBigPhoto.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({ comments, description, likes, url,}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);

    thumbnail.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPhoto(picture);
      renderComments(picture.comments);
    });

    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export { renderThumbnails };
