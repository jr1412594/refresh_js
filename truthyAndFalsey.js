//Falsey values are values that are not 
//exaclty false, but will become false
//when we try to convert them to a boolean

// 5 falsey values
// 0
// ""
// undefined
// null
// NaN

// console.log(Boolean(0)) //false
// console.log(Boolean(undefined)) //false
// console.log(Boolean('Junior')) //true
// console.log(Boolean({})) //true
// console.log(Boolean(NaN)) //false
// console.log(Boolean(null)) //false
// console.log(Boolean(1)) //true

const money = 10;

if (money) {
    console.log('dont spend it all')
} else {
    console.log('You should get a job!')
}

let height = 0;

if(height) {
    console.log('its defined')
} else {
    console.log('undefined')
}