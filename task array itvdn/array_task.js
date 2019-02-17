var firstArray = [3, 4, 7, 2, 8, 19];
console.log(firstArray.reverse());


//создаем массив и выводим самое большое число
var testArray = [4, 23, 7, 1, 9, 21, 9, 5, 44];
var maxNum = 0;
for (var i = 0; i < testArray.length; i++ ) {
    if ( testArray[i] > maxNum) {
        maxNum = testArray[i];
    } 
}
console.log(maxNum);

//создаем массив и выводим самое меньшее число
var testArray = [2, 54, 0, 7, -5, 12, 56, 91];
var minNumber = 0;
for ( var i = 0; i < testArray.length; i++) {
    if ( testArray[i] < minNumber) {
        minNumber = testArray[i];
    }
};
console.log(minNumber);

//создаем массив и выводим общую сумму элементов
var testArray = [2, 54, 0, 7, -5, 12, 56, 91];
var countNumber = 0;
for ( var i = 0; i < testArray.length; i++) {
    countNumber += testArray[i];
};
console.log(countNumber);

//создаем массив и выводим среднеарифметическое всех элементов
var testArray = [2, 54, 0, 7, -5, 12, 56, 91];
var midCount = 0;
for ( var i = 0; i < testArray.length; i++) {
    midCount += testArray[i];
};
midCount = midCount / testArray.length;
console.log(midCount);


//создаем массив и выводим все нечетные значения
var testArray = [2, 54, 0, 7, -5, 12, 56, 91];
for ( var i = 0; i < testArray.length; i++) {
    if (testArray[i] % 2 == 1 || testArray[i] % 2 == -1) {
        console.log(testArray[i]);
    }
};


//создать двумерный массив 5х5 

var table = new Array(5);

for ( var i = 0; i < table.length; i++) {
    table[i] = new Array(5);
}
//console.log(table[0][0]);

for (var row = 0; row < table.length; row++ ) {
    for (var col = 0; col < table[row].length; col++) {
        if ((row + col) % 2 == 1)
        table[row][col] = "1";
        else
        table[row][col] = "0";
        console.log(table[row][col]);
    } 
    console.log("<br/>>")
}