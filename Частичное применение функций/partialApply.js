// это я тренировался
const f1 = (a, b, c) => a + b + c;

//const partialApply = (fn, a) =>(b, c) => fn(a, b, c); все работает работает

const sum = partialApply(f1, 3);

const count = sum(2, 1);

console.log(count);
// это я тренировался


//------------------------------------------------------------------------------


//----------------------------------------------------это мое решение
const f2 = (a, b) => a ** b;

const half = (fn, b) =>(a) => fn(a, b);  // дубль функции partialApply но с другими параметрами

const num = half(f2, 2);

console.log(num(10));
//----------------------------------------------------это мое решение


//-----------------------------------------------------------------------------


//----------------------------------------------------это решение учителя с хекслета
// BEGIN
export default (f, second) => first => f(first, second);
//----------------------------------------------------это решение учителя с хекслета