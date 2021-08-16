//Challenge 1

//test 1
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2)
let johnBMI = johnWeight / (johnHeight ** 2)

// console.log(markBMI, 'mark')
// console.log(johnBMI, 'john')

let markHigherBmi = markBMI > johnBMI
console.log(markHigherBmi, "test 1")

//test 2
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight ** 2)
johnBMI = johnWeight / (johnHeight ** 2)

markHigherBmi = markBMI > johnBMI
console.log(markHigherBmi, 'test 2')