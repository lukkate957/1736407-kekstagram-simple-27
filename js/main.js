/**
 id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

 url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

 description, строка — описание фотографии. Описание придумайте самостоятельно.

 likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

 comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.
 */
const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 0,
  MAX: 200,
};

const POSTS_COUNT = 25;
let i = 0;

const DESCRIPTIONS = [
  'Природа — это лучший художник',
  'Невероятный закат на пляже',
  'Люблю свою команду! Работаем над новым проектом',
  'Только что попробовал лучший кофе в городе',
  'Красивейшее место на Земле',
  'Настоящая зимняя сказка',
  'Путешествие – это жизнь!',
  'Время обеда! Попробовали местную кухню',
  'Солнечный день в парке',
  'Каждый новый день – это новая возможность'
];

// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0) {
    return NaN;
  }

  if (max < min) {
    const temp = min;
    min = max;
    max = temp;
  }

  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// Функция для проверки максимальной длины строки
const checkStringMaxLength = (str, maxLength) => str.length <= maxLength;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPost = () => ({
  id: ++i,
  url: `photos/${i}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX),
});

const createPosts = () => {
  Array.from({length: POSTS_COUNT}, createPost);
};

checkStringMaxLength('строчка', 30);
createPosts();
