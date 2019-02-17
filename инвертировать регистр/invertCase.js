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

const invertCase = (str) => {
    let z = "";
    for (let i = 0; i < str.lenth; i++) {
        if (str[i].toUpperCase()) {
            z = z + str[i].toLowerCase();
        } else if (str[i].toLowerCase()) {
            z = z + str[i].toUpperCase();
        } else {
            z = z + str[i];
        }
    }
    return z;
};

//export default invertCase;

console.log(invertCase("Ghost, fisH"));

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
