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

arrTestClone.name = 'John';
console.log(arrTestClone);
console.log(cloneArr);