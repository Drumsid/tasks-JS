// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. 
// Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)

// мое решение
// BEGIN (write your solution here)
const isPowerOfThree = (n) => {
  if (n === 1) {
    return true;
  } else if (n % 3 != 0 || n === 0) {
    return false;
  }
  return isPowerOfThree(n / 3);
}

export default isPowerOfThree;
// END





//решение учителя
// BEGIN
export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};
// END