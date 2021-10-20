// let age = 16

// let a = age >= 20
// let b = age < 30

// console.log(!a)
// console.log(!b)

const hasDriversLisence = true;
const hasGoodVision = true;

console.log(hasDriversLisence && hasGoodVision)
console.log(hasDriversLisence || hasGoodVision)
// console.log(hasDriversLisence || hasGoodVision)
console.log(!hasDriversLisence)

// if (hasDriversLisence || hasGoodVision) {
//     console.log("this chick can drive!")
// } else {
//     console.log("Get in the back.")
// }

const isTired = false; // C
console.log(hasDriversLisence && hasGoodVision && isTired)


if (hasDriversLisence && hasGoodVision && !isTired) {
    console.log("this chick can drive!")
} else {
    console.log("Get in the back.")
}


