let string = "Ghost, fisH";
let z = "";

for (let i = 0; i < string.length; i++) {
   
     if (string[i].toUpperCase()) {
         z += string[i].toLowerCase();
     }
     else if (string[i].toLowerCase()) {
         z += string[i].toUpperCase();
    } 
     else {
        z += string[i];
    }
}
console.log(z);