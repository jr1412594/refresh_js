/*
let keyword is used to initialize variables
that can change later. or mutate.

let can also be used to set a variable with no value
these values can be set up later


const keyword is used to set up a variable
that cannot be changed later

cannot declare empty const variable. 
must be initialized


Var should be completely avoided,
still in use for legacy reasons.
old way to define variables.
works the same as let.


*/

let age = 23;
console.log(age, "first");
age = 31;
console.log(age, "second");



//Below will not work. (TypeError: Assignment to constant variable)
// const name = "jugie";
// console.log(name)
// name = "cant change"