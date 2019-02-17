const ticket = (num) => {
  let str = String(num);
  let x = 0;
  let y = 0;

  x = Number(str[0]) + Number(str[1]) + Number(str[2]);
  y = Number(str[3]) + Number(str[4]) + Number(str[5]);
//   for (let i = 0; 0 < str.length; i++) {
//     if ( str[i] < 3) {
//         x = x + str[i];
//     } else {
//         y = y + str[i];
//     }
//   }
//   if (x == y) {
//       return true;
//   } else {
//       return false;
//   }
if ( x == y ) {
    return true;
} else {
    return false;
}

}
console.log(ticket("144451"));