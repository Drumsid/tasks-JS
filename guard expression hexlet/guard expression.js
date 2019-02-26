// (Убедитесь в том, что вы решили хотя бы несколько дополнительных практик после курса "Введение в программирование")

// Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. Например: радар, топот.

// isPalindrome.js
// Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.

// Примеры использования:
// import isPalindrome from './isPalindrome';

// isPalindrome('radar'); // => true
// isPalindrome('a');     // => true
// isPalindrome('abs');   // => false
// Один из способ реализовать эту функцию — попарно сравнить буквы, стоящие зеркально относительно центра. Если они совпадают, то перед нами палиндром.

// Алгоритм
// Если строка короче двух символов, то считается, что это палиндром.
// Проверяем, совпадают ли первый и последний символы. Если нет, то это не палиндром. Если совпадают, то вызываем функцию рекурсивно, передавая внутрь строку минус первый и последний символ.
// Разбор на примере: radar (палиндром)

// Первый и последний символ r. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем ada
// Первый и последний символ a. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем d
// Так как длина строки d меньше двух символов, возвращаем true
// Разбор на примере: rador (не палиндром)


// my decision-------------------------------------------------------------
const isPalindrome = (str) => {
    let a = 0;
    let b = str.length - 1;
    if ( str.length <= 1 ) {
        return true;
    }
    if ( str[a] !== str[b] ) {
        return false;
    } else {
        str = str.slice(1, b)
        return isPalindrome(str);
    }
};

export default isPalindrome;

console.log(isPalindrome("aibohapohobia"));
// my decision-------------------------------------------------------------




// let z = "radar";
// let b = z.length - 1;
// console.log( z.slice(1, b));






// teacher from hexlet decision-------------------------------------------------------------

// BEGIN
const isPalindrome = (string) => {
    if (string.length <= 1) {
      return true;
    }
  
    const firstSymbol = string[0];
    const lastSymbol = string[string.length - 1];
  
    if (firstSymbol !== lastSymbol) {
      return false;
    }
  
    const stringWithoutFirstAndLastSymbols = string.substring(1, string.length - 1);
  
    return isPalindrome(stringWithoutFirstAndLastSymbols);
  };
  
  export default isPalindrome;
  // END

  // teacher from hexlet decision-------------------------------------------------------------