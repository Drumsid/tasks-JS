//         1 вариант
for (let x = 1; x <= 100; x++) {
	if (x % 3 == 0 && x % 5 == 0) {
		console.log("FizzBuzz");
	} else if ( x % 3 == 0) {
		console.log("Fizz");
	} else if (x % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(x);
	}
}


//       2 вариант с функцией
const fizzBuzz = (x, y) =>  {
		for (; x <= y; x++) {
		if (x % 3 == 0 && x % 5 == 0) {
			console.log("FizzBuzz");
		} else if ( x % 3 == 0) {
			console.log("Fizz");
		} else if (x % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(x);
		}
	}
}


//           3 вариант с <br>
for (let x = 1; x <= 100; x++) {
	if (x % 3 == 0 && x % 5 == 0) {
		document.write("FizzBuzz<br>");
	} else if ( x % 3 == 0) {
		document.write("Fizz<br>");
	} else if (x % 5 == 0) {
		document.write("Buzz<br>");
	} else {
		document.write(x + "<br>");
	}
}


//еще один вариант))
const fizzBuzz = (x, y) => {
		for (; x <= y; x++) {
		if (x % 3 == 0 && x % 5 == 0) {
			document.write("FizzBuzz<br>");
		} else if ( x % 3 == 0) {
			document.write("Fizz<br>");
		} else if (x % 5 == 0) {
			document.write("Buzz<br>");
		} else {
			document.write(x + "<br>");
		}
	}
}


// решение учителя 

// BEGIN
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0;
    const hasBuzz = i % 5 === 0;
    const fizzPart = hasFizz ? 'Fizz' : '';
    const buzzPart = hasBuzz ? 'Buzz' : '';
    console.log(hasFizz || hasBuzz ? `${fizzPart}${buzzPart}` : i);
  }
};

export default fizzBuzz;
// END