let str = 'list-style-image';

console.log(str.split('-'));
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

let strCamel = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] == '-') {
        strCamel += str[i + 1].toUpperCase();
        i++;
    } else {
        strCamel += str[i];
    }
}

console.log(strCamel);
//----------------------------------------------------my solution
const camelize = (string) => {
    let strCamel = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] == '-') {
            strCamel += string[i + 1].toUpperCase();
            i++;
        } else {
            strCamel += string[i];
        }
    } 
    return strCamel;
};

let out = camelize('-webkit-transition');
console.log(out);
//----------------------------------------------------my solution
//------------------------------------------------------------------------------------
//----------------------------------------------------teacher solution

// Идея
// Задача может быть решена несколькими способами. Один из них – разбить строку по дефису str.split('-'), затем последовательно сконструировать новую.

// Решение
// Разобьем строку в массив, а затем преобразуем его элементы и сольём обратно:

 function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

alert( camelize("background-color") ); // backgroundColor
alert( camelize("list-style-image") ); // listStyleImage
alert( camelize("-webkit-transition") ); // WebkitTransition

//----------------------------------------------------teacher solution