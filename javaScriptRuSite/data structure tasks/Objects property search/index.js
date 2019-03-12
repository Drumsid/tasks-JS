let menu = {
    width: 200,
    height: 100,
    count: 3,
    name: 'top-menu'
}

for (let key in menu) {
    console.log('Ключ: ' + key + ' значение: ' + menu[key]);
}

//------------------------
let num = 0;
for (let key in menu) {
    num++;
}
console.log('В массиве ' + num + ' свойства');

//-------------------------------------------------------
//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
let testArr = {};

const isEmpty = (obj) => {
    let n = 0;
    for (let key in obj) {
        n++;
    }
    return n != 0 ? false : true;
}

console.log(isEmpty(testArr));

//let f = 2;
//console.log((f != 0 ? false : true))

//----------------------------------------------------------------------------

// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

// Если объект пустой, то результат должен быть 0.

let salaries = {
    'Bob': 100,
    'John': 300,
    'Fill': 400
}

let emptyArr = {};

const contUsersAndSalaries = (obj) => {
let salarCount = 0;
let countUser = 0;
for (let key in obj) {
    countUser++;
    salarCount += salaries[key];
}
return countUser == 0 ? countUser : salarCount;
}
console.log(contUsersAndSalaries(salaries));
console.log(contUsersAndSalaries(emptyArr));

//---------------------------------------------------

// const f5 = num => console.log(num);
// f5('test');

//------------------------------------------------------------
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

// Если объект пустой, то пусть он выводит «нет сотрудников».

let salaries2 = {
    'Bob': 100,
    'John': 300,
    'Fill': 400
}

const whoHaveBiggestSalaries = (obj) => {
let num2 = 0;
let name2 = '';
for (let key in obj) {
    if (obj[key] > num2) {
        num2 = obj[key];
        name2 = key;
    }
}
return name2;
};

console.log(whoHaveBiggestSalaries(salaries2));


//----------------------------------------

//копирывание обьектов примитивным способом
let arrTestClone = {
    name: 'Bob',
    age: 34,
    color: 'white'
};

for (let key in arrTestClone) {
    console.log(arrTestClone[key])
}

let cloneArr = {};
console.log(cloneArr);
for (let key in arrTestClone) {
    cloneArr[key] = arrTestClone[key];
}
console.log(cloneArr);

arrTestClone.name = 'John'; //заменили свойство в первом обьекте
console.log(arrTestClone);// в первом объекте свойство поменялось
console.log(cloneArr);// во втором не поменялось