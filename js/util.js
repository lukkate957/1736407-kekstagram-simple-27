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

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getRandomInteger,
  getRandomArrayElement,
  isEscapeKey,};
