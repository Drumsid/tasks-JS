// Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

// solution('hello, world!'); // Hello, World!
// Подсказки
// Вычисление длины строки: length(str).
// Перевод строки/буквы в верхний регистр: toUpperCase(str).


//мое решение 
const upperLetter = (str) => {
    let z = "";
    for (let i = 0; i < str.length; i ++) {
        if (str[i] != false && str[i] === str[0]) {
            z = z + str[0].toUpperCase();
        } else if ( str[i] !== false && str[i - 1] == false) {
            z = z + str[i].toUpperCase();
        } else {
            z = z + str[i];
        }
    }
    return z;
};

export default upperLetter;

console.log(upperLetter("hello,   world!"));


// решение учителя

// BEGIN
export default (str) => {
    let result = '';
    for (let i = 0; i < length(str); i += 1) {
      const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
      result += shouldBeBig ? toUpperCase(str[i]) : str[i];
    }
  
    return result;
  };
  // END