const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');


const renderPhotoDetails = function ({ url, likes, comments, description }) {
  bigPictureImgElement.src = url;
  bigPictureImgElement.alt = description;
  likesCountElement.textContent = likes;
  commentsCountElement.textContent = comments.length;
  socialCaptionElement.textContent = description;
};

const renderComment = function ({ avatar, name, message}) {

  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const commentAvatarElement = document.createElement('img');
  commentAvatarElement.classList.add('social__picture');
  commentAvatarElement.src = avatar;
  commentAvatarElement.alt = name;
  commentAvatarElement.width = 35;
  commentAvatarElement.height = 35;

  const commentTextElement = document.createElement('p');
  commentTextElement.classList.add('social__text');
  commentTextElement.textContent = message;

  socialCommentsElement.append(commentElement);
  commentElement.append(commentAvatarElement);
  commentElement.append(commentTextElement);
};

const renderComments = function (comments) {
  socialCommentsElement.innerHTML = '';

  comments.forEach((item) => {
    const comment = renderComment(item);
  });
};

export { renderPhotoDetails };
export { renderComments };
