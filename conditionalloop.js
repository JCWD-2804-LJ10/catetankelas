let Fibonacci = 5;
let num1 = 1;
let num2 = 1;
let sum = 0;

if (Fibonacci ===1 || Fibonacci === 2){
    sum = 1;
}
else{
for (let i = 1; i <= Fibonacci-2; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}
}

console.log(sum);