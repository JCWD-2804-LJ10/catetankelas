let num1 = 42;
let num2 = 27;
let num3 = 18;

// if(num1 > num2){
//     if(num1 > num3){
//         if(num2 > num3){
//             console.log(num3, num2, num1);
//         } else {
//             console.log(num2, num3, num1);
//         }
//     } else {
//         console.log(num2, num1, num3);
//     }
// } else {
//     if(num2>num3){
//         if(num1>num3){
//             console.log(num3, num1, num2);
//         } else {
//             console.log(num1, num3, num2);
//         }
//     } else {
//         console.log(num1, num2, num3);
//     }
// }

let sortedNumbers = [num1, num2, num3].sort((a,b) => a-b);

console.log(sortedNumbers[0], sortedNumbers[1], sortedNumbers[2]);