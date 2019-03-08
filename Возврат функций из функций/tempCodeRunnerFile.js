const f1 = (a, b) => a ** b;

console.log(f1(2, 3));

const f2 = (a, b) => a - b;

console.log(f2(2, 3));

const f3 = (a, b) => a / b;

console.log(f3(2, 3));
//---------------------------------------
const flip = foo => (b, a) => foo(a, b);

const revers1 = flip(f1);

const revers2 = flip(f2);

const revers3 = flip(f3);

console.log(revers1(2, 3));
console.log(revers2(2, 3));
console.log(revers3(2, 3));