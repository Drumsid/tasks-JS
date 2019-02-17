const length = (str) => {
	return  str.length;
}

// document.write(length("zYzxcasdf"));

const toUpperCase = (str) => {
	return str.toUpperCase();
}
 
//console.log(toUpperCase("sadas"));

// Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.

// Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

// Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.

// Примеры:

// greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
// greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
// lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
// isEqual('liSp', 'lisP'); // true
// comparers.js
// Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.

// Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

// Если в первой строке больше заглавных символов, то возвращается 1.
// Если во второй строке больше заглавных символов, то возвращается -1.
// Иначе возвращается 0.
// Подсказки
// Функция bigLettersCount должна принимать на вход строку str и высчитывать количество заглавных символов в ней.
// Вычисление длины строки: length(str).
// Перевод строки в верхний регистр: toUpperCase(str).
// Проверка на то, что символ в верхнем регистре: toUpperCase(char) === char;


//написал ниже конструкцию чтоб понять как работает функция.
//const bigLettersCount = (str) => {
let string = "try TYTty";
    let out = 0;
    let stringUp = string.toUpperCase();
    let num = string.length;
    
    
    for (let x = 0; x < num; x++) {      
        if (string[x] === stringUp[x]) {   
            out += 1;
          
        } else if (string[x] === " ") {
            out += 1;
        }

    }
   
document.write(out);
  //};
  
  
  //console.log(bigLettersCount("EsTdW"));




// начало упражнения
//а вот сама функция для задания - это мое решение задачи

const bigLettersCount = (str) => {
let num = str.length;
let isString = str;
let upper = str.toUpperCase();
let z = 0;

for (let x = 0; x < num; x++) {
		if(isString[x] === upper[x] || isString[x] === " ") {
       		z += 1;
       } 
	}
   return z;

};
	
//console.log(bigLettersCount("GfgS I"));

const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);
  
    if (firstCount > secondCount) {
        return 1;
    } else if (firstCount < secondCount) {
        return -1;
    } else {
        return 0;
    }

  };
// конец упражнения

// далее решение учителя, скопировал с хекслета



import { length, toUpperCase } from './strings';

export const length = str => str.length;
export const toUpperCase = str => str.toUpperCase();

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    if (toUpperCase(str[i]) === str[i]) {
      result += 1;
    }
  }

  return result;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }

  return 0;
  // END
};

export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) =>
  compare(first, second) === 0;



























// const bigLettersCount = (str) => {
// 	let num = str.length - 1;
// 	let strUp = str.toUpperCase();
//     // let x = 0;
//     // let y = 0;
    
//     for ( let x = 0, y = 0; x < num; x++, y++) {
        
//     } 
   

    // while (x < num) {
    //    if (str[x] === strUp[y]) {
    //        return 1;
    //    } return 0;
    //     x++;
    //     y++;

    // }
    
    
   
// };

// console.log(bigLettersCount("REs sd"));

