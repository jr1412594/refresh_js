// 1 Calculate the average score for each team, using the test data below
// 2 Compare the teams average scores to determine the winner of the competition, and print it to the console. dont forget
// that there can be a draw, so test for that as well (drew means they have the same average score)
// 3 BOUNUS 1 include a requirement for a minimum score of 100 With this rule, a teamonly wins if it has a higher score than the other team
// and the same time a score of atleast 100 points. HINT: use a logical operator to test for minimum score, as well as multiple else if blocks
// 4 BOUNUS 2 Minimum score also applies to a drew! So a draw only happens when both teams have the same score and both have a score 
// greater or equal 100 points. Otherwise, no team wins the trophy.

//TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91, and 110
//TEST DATA BOUNUS 1: Dolphins score 97, 112 and 101. Koalas 109, 95 abd 123
// TEST DATA BOUNUS 2: Dolphins score 97, 112 and 101 Koalas 109, 95, and 106

const dolphinsG1 = (96 + 108 + 89) / 3;
const dolphinsG2 = (97 + 112 + 101) / 3;    
const dolphinsG3 = (97 + 112 + 101) / 3;

const koalasG1 = (88 + 91 + 110) / 3;
const koalasG2 = (109 + 95 + 123) / 3;
const koalasG3 = (109 + 95 + 106) / 3;

const game1 = dolphinsG1 > koalasG1 // true
const game2 = dolphinsG2 > koalasG2 // false
const game3 = dolphinsG3 > koalasG3 // draw //false




// if (koalasG2 < 100 && dolphinsG2 < 100) {
//     console.log('This game was worthless!')
// } else if (dolphinsG2 > 100 && dolphinsG2 > koalasG2) {
//     console.log("Dolphins Crushed!")
// } else if (koalasG2 > dolphinsG2 && koalasG2 > 100) {
//     console.log("Koalas Win!")
// }

console.log(koalasG3, dolphinsG3)

if (koalasG3 > 100 && dolphinsG3 > 100 && koalasG3 === dolphinsG3) {
    console.log('This game was worthless!')
} else if (dolphinsG3 > 300 && dolphinsG3 > koalasG3) {
    console.log("Dolphins Crushed!")
} else if (koalasG3 > dolphinsG3 && koalasG3 > 100) {
    console.log("Koalas Win!")
}



console.log('game1', game1)
console.log('game2', game2)
console.log('game3', game3)

// console.log('dol', dolphinsG2, 'koa', koalasG2)
