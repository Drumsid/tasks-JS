// Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

// Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

// isHappyTicket.js
// Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

// Примеры использования:

// import isHappyTicket from './isHappyTicket';

// isHappyTicket(385916); // true
// isHappyTicket(231002); // false
// isHappyTicket(128722); // true
// isHappyTicket('054702'); // true
// Подсказки
// Преобразовать число в строку можно с помощью функции String:

// String(1234); // '1234'
// Преобразовать строку в число можно с помощью функции Number:

// Number('456'); // 456
// Чтобы узнать длину строки, используйте свойство length:

// 'welcome'.length; // 7

// мое рещшение

const ticket = (num) => {
  let str = String(num);
  let x = 0;
  let y = 0;

  x = Number(str[0]) + Number(str[1]) + Number(str[2]);
  y = Number(str[3]) + Number(str[4]) + Number(str[5]);

    if ( x == y ) {
        return true;
    } else {
        return false;
    }

};

export default ticket;

console.log(ticket("144451"));

// решение учителя

// BEGIN
export default (_num) => {
    const num = String(_num);
    let balance = 0;
  
    for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
      balance += +num[i] - +num[j];
    }
    return balance === 0;
  };
  // END