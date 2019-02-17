//создать функцию которая принимае три значения и выводит их среднеарифметическое------------------------------

const threeCount = (a, b, c) => {
    return (a * b * c) / arguments.length;
};

console.log(threeCount(2, 3, 4));

//создать функции которые считают значения-------------------------------------------------------------------------------------

const sumNumber = () => {
    let z = 0, a, operator, b;
    a = +prompt("Enter a first number");
    //operator = prompt("Enter operation");
    b = +prompt("Enter a second number");
    z = a + b;
    alert("the sum of numbers is " + z);
};

const subNumber = () => {
    let z = 0, a, operator, b;
    a = +prompt("Enter a first number");
    //operator = prompt("Enter operation");
    b = +prompt("Enter a second number");
    z = a - b;
    alert("the sub of numbers is " + z);
};

const multNumber = () => {
    let z = 0, a, operator, b;
    a = +prompt("Enter a first number");
    //operator = prompt("Enter operation");
    b = +prompt("Enter a second number");
    z = a * b;
    alert("the mult of numbers is " + z);
};
const divisionNumber = () => {
    let z = 0, a, operator, b;
    a = +prompt("Enter a first number");
    //operator = prompt("Enter operation");
    b = +prompt("Enter a second number");
    if (b == 0) {
        b = +prompt("Enter a second number, but not zero!");
    }
    z = a / b;
    alert("the division of numbers is " + z);
};

// функция должна принимать число и проверять -------------------------------------------------------------------------------------
// положительное оно или нет
// является ли число простым
// делится ли оно на 2,3,5,6,9

const numberOption = (x) => {
    if (x < 0) {
        alert("Число " + x + " является отрицательным");
    }
    else {
        alert("Число " + x + " является положительным"); 
    }

    //функция определена внизу под функцией numberOption
    natural(x, 2);
    

    if (x % 2 == 0) {
        alert("Число " + x + " делиться на 2 без остатка"); 
    }
    if (x % 3 == 0) {
        alert("Число " + x + " делиться на 3 без остатка"); 
    }
    if (x % 5 == 0) {
        alert("Число " + x + " делиться на 5 без остатка"); 
    }
    if (x % 6 == 0) {
        alert("Число " + x + " делиться на 6 без остатка"); 
    }
    if (x % 9 == 0) {
        alert("Число " + x + " делиться на 9 без остатка"); 
    }
};


//функция определяет являеться ли число простым

const natural = (d, n) => {
    if (d == n ) {
        return alert("Чсло " + d + " натуральное"); // true;
    } else if (d % n == 0) {
        return alert("Чсло " + d + " не натуральное");// false;
    } else {
        return natural(d, n + 1);
    }

};

console.log(natural(23, 2));