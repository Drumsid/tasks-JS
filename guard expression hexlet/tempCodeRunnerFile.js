const fx = (a, b, c) => {
    if ( b == undefined || c == undefined) {
        return a;
    }
    if ( c == 0 || b > a.length ) {
        return "";
    }
    if ( c < 0) {
        c = 1;
    }
    if ( (b + c) > a.length ) {
        c = a.length;
    }
    if ( b < 0 ) {
        b = 0;
    }
    if ( b == 1 && c < a.length) {
        c = c + 1;
    } 

    let result = "";

    while ( b < c ) {
        result = result + a[b];
        b++;
    }
    return result;
    
}

//let h = 'khguyhg';
console.log(fx('abba', 2, 1));