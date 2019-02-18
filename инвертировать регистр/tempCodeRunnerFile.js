const invertCase = (str) => {
    let z = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            z = z + str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            z = z + str[i].toUpperCase();
        } else {
            z = z + str[i];
        }
    }
    return z;
};

//export default invertCase;

console.log(invertCase("Ghost, fisH"));