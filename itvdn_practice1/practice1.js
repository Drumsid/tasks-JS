//создал допотопный калькулятор, это дз из Itvdn

const counted = (fnum, snum, operator) => {
    fnum = +prompt("Введите первое число");
    operator = prompt("Выберите операцию - сложение, вычитание, деление, умножение. Для этого введите знак в поле ниже + - / * ");
    snum = +prompt("Введите второе число");
    let result = 0;


    switch (operator) {
        case "+":
            result = fnum + snum;
            alert("Ваша операцияя выполнена, получилось число " + result);
            break;
        case "-":
            result = fnum - snum;
            alert("Ваша операцияя выполнена, получилось число " + result);
            break;
        case "/":
            if (snum == 0) {
                alert("Ошибка! На ноль делить нельзя! В школе проходили же .. )");
                break;
            } else {
            result = fnum / snum;
            alert("Ваша операцияя выполнена, получилось число " + result);
            break;
            }
        case "*":
            result = fnum * snum;
            alert("Ваша операцияя выполнена, получилось число " + result);
            break;
    }
};

// var arrcount = [
//     4,
//     6
// ];

// const countArrNum = (arrcount, operator ) => {
//     let result = 0;
//     fnum = arrcount[0];
//     snum = arrcount[1];
//     operator = "*";
//     return console.log(fnum + operator + snum);
// };
// countArrNum();
// console.log(arrcount);