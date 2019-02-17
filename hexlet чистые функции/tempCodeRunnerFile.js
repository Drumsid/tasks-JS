const upperLetter = (str) => {
    let z = "";
    for (let i = 0; i < str.length; i ++) {
        if (str[i] != false && str[i] === str[0]) {
            z = z + str[0].toUpperCase();
        } else if ( str[i] !== false && str[i - 1] == false) {
            z = z + str[i].toUpperCase();
        } else {
            z = z + str[i];
        }
    }
    return z;
};

console.log(upperLetter("hello,   world!"));