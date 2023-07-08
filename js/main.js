
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Вася',
  'Коля',
  'Петя',
  'Олег',
  'Саша',
  'Сергей',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComments = function () {
  const randomCommentIdIndex = getRandomInteger(1, 500);
  const randomAvatarIndex = getRandomInteger(1, 6);
  const randomMessageIndex = getRandomInteger(1, MESSAGES.length - 1);
  const randomNameIndex = getRandomInteger(1, NAMES.length - 1);

  return {
    id: randomCommentIdIndex,
    avatar: `'img/avatar-${(randomAvatarIndex)}.svg'`,
    message: MESSAGES[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

const createPhotoDescription = function () {
  const randomIdIndex = getRandomInteger(1, 25);
  const randomUrlIndex = getRandomInteger(1, 25);
  const randomLikesIndex = getRandomInteger(15, 200);
  const randomCommentIndex = getRandomInteger(0, 30);

  return [{
    id: randomIdIndex,
    url: `'photos/${(randomUrlIndex)}.jpg'`,
    description: 'Описание фотографии',
    likes: randomLikesIndex,
    comments: Array.from({length: randomCommentIndex}, createComments),
  }];
};

const createPhotoDescriptions = Array.from({length: 25}, createPhotoDescription);

createPhotoDescriptions();

