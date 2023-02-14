import {getRandomInteger, getRandomArrayElement} from './util.js';
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


const createPost = () => ({
  id: ++i,
  url: `photos/${i}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX),
});

const createPosts = () => Array.from({length: POSTS_COUNT}, createPost);

export {createPosts};
