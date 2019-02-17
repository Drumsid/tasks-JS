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