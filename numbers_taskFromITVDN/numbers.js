// вывести на экран сумму чисел в промежутке между А и В

let a = 5;
let b = 9;
let sum = 0;

 while (a <= b) {
     sum = sum + a;
     a++;
 }
 console.log(sum);

// вывести на экран все нечетные числа расположеные в промежутки между А и В

let a = 5;
let b = 14;

 while (a <= b) {	
    if (a % 2 != 0) {
        console.log(a);
        a++;
    } else {
        a++;
    }
 }

 //Цикл for вложенный в цикл for. ( Построение квадрата из звездочек - * )
 
 
         for (var i = 0; i < 10; i++) {
             // Выводим одну строку из 10 плиток.
             for (var j = 0; j < 10; j++) {
                document.write("* ");
             }
 
             // Переход на новую строку.
             document.write("<br/>");
         }