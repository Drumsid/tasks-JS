// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

// var obj = {
//   className: 'open menu'
// };
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

// obj = {
//   className: 'my menu menu'
// };
// removeClass(obj, 'menu');
// alert( obj.className ); // 'my'
// Лишних пробелов после функции образовываться не должно.

//определяем обьект
let testObj = {
    className: 'open your your eyes'
}
//записываем ключ  и значение ключа в переменные
let objKey = '';
let objKeyVol = '';
for (let key in testObj) {
    objKey = key;
    objKeyVol = testObj[key];
}
//создаем переменную в которую заносим значение ключа объекта в виде массива
let classes = testObj[objKey].split(' ');
console.log(classes);
// создаем переменную с классом и проверяем если такой класс есть в массиве, удаляем его
let testClass = 'your';
for (let i = 0; i < classes.length; i++ ) {
    if (classes[i] == testClass) {
        classes.splice(i, 1);
        i = 0;
    } 
}
//заносим в ключ обекта новое значение
testObj.className = classes.join(' ');

console.log(classes);
console.log(testObj.className);

//--------------------------------------------------------my solution

let testObj2 = {
    className: 'one two two three'
};

const removeClass = (obj, cls) => {
    let objKey = '';
    let objKeyVol = '';
    for (let key in obj) {
        objKey = key;
        objKeyVol = obj[key];
    }

    let classes = obj[objKey].split(' ');

    for (let i = 0; i < classes.length; i++ ) {
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i = 0; // i--; это было решением учителя,мне понравилось
        } 
    }

     obj[objKey] = classes.join(' ');
};

removeClass(testObj2, 'two');
console.log(testObj2);
//--------------------------------------------------------my solution



