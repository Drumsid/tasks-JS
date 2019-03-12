let arr = {};

console.log(typeof arr);

arr.name = 'John';
arr.age = 34;
arr.heigth = '1.70cm'

console.log(arr);
console.log(arr.name + ':' + arr.age);

delete arr.heigth;
console.log(arr);

if ('name' in arr) {
    console.log('Есть такое свойство');
}
if ('heigth' in arr) {
    console.log('Есть такое свойство');
} else {
    console.log('Такого свойства нет');
}

arr['Любимый стиль музыки панк-рок!'] = 'punk-rock'

console.log(arr);

let prop = 'Любимый стиль музыки панк-рок!';

console.log(arr[prop]);

let user = {
    name: 'Tania',
    age: 23,
    size: {
        top: 90,
        middle: 60,
        bottom: 90
    }
};

console.log(user);
console.log(user.name);
console.log(user.size.top);