// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0 || max < min) {
    return NaN;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// Функция для проверки максимальной длины строки
const checkStringMaxLength = (str, maxLength) => str.length <= maxLength;

getRandomInteger(5, 10);
checkStringMaxLength('строчка', 30);
