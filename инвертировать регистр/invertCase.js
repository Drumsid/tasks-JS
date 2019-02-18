// invertCase.js
// Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.

// invertCase('Hello, World!'); // hELLO, wORLD!
// invertCase('I loVe JS');     // i LOvE js
// Подсказки
// Чтобы узнать длину строки, используйте свойство length:

// 'welcome'.length; // 7
// Чтобы получить строку (или отдельный символ) в верхнем регистре, используйте метод toUpperCase:

// 'foo'.toUpperCase(); // 'FOO';
// 'f'.toUpperCase();   // 'F';
// Чтобы получить строку (или отдельный символ) в нижнем регистре, используйте метод toLowerCase:

// 'BAR'.toLowerCase(); // 'bar';
// 'b'.toLowerCase();   // 'b';


//my decision--------------------------------------------------
const invertCase = (str) => {
    let z = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            z = z + str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            z = z + str[i].toUpperCase();
        } else {
            z = z + str[i];
        }
    }
    return z;
};

//export default invertCase;

console.log(invertCase("Ghost, fisH"));
//my decision end ---------------------------------------------------

//my testing start-------------------------------------------------------
let string = "Ghost, fisH";
let z = "";

for (let i = 0; i < string.length; i++) {
   
     if (string[i].toUpperCase()) {
         z += string[i].toLowerCase();
     }
     else if (string[i].toLowerCase()) {
         z += string[i].toUpperCase();
    } 
     else {
        z += string[i];
    }
}
console.log(z);
//my testing end---------------------------------------

//teacher decision start -------------------------------------

const invertCase = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      const upper = str[i] === str[i].toUpperCase();
      result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
    }
  
    return result;
  };
  
  export default invertCase;
  // END

//teacher decision end ------------------------------------