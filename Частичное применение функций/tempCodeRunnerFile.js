const f2 = (a, b) => a ** b;

const half = (fn, b) =>(a) => fn(a, b);

const num = half(f2, 2);

console.log(num(10));