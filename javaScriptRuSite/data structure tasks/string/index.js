let str = 'string';

let char1 = str.charAt(1);

let char2 = str[1];

let compare = char1 == char2;

let space = '';

let char3 = space.charAt(0);

let char4 = space[0];

console.log(char1);
console.log(char2);
console.log(compare);

console.log('"' + char3 + '"' + ' charAt(0) - возвращает пустую строку');
console.log('"' + char4 + '"' + ' space[0] - возвращает undefined');

console.log();