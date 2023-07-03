
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomComment() {
  const comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const randomIndex = generateRandomNumber(0, comments.length - 1);
  return comments[randomIndex];
}

function generateRandomAvatar() {
  const avatarNumber = generateRandomNumber(1, 6);
  return `img/avatar-${avatarNumber}.svg`;
}

function generateRandomComments() {
  const numComments = generateRandomNumber(0, 30);
  const comments = [];

  for (let i = 0; i < numComments; i++) {
    const comment = {
      id: generateRandomNumber(1, 1000),
      avatar: generateRandomAvatar(),
      message: generateRandomComment(),
      name: 'Имя комментатора'
    };

    comments.push(comment);
  }

  return comments;
}

function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Описание фотографии',
      likes: generateRandomNumber(15, 200),
      comments: generateRandomComments()
    };

    photos.push(photo);
  }

  return photos;
}

generatePhotos();


