
// Type Conversiont
const inputYear = '1991';
// console.log(typeof Number(inputYear), typeof inputYear);
console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'))//NaN = invalid number
console.log(typeof String(23))

//type coercion

console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - '3')// produces 10

// strings and numbers around + will coerce the
// number to a string 

// (- * / >) around strings will coerce them into numbers

let n = "1" + 1; // "11" string
n = n - 1; // 10 number

console.log(n, typeof n)

