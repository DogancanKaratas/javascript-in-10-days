let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;

// ! 1-Aritmatik op
// ? +,-,*,/,++,--, %
// result = 10;
result = number1 + number3;
result = number1 - number3;
result = number1 / number3;
result = number1 * number3;
result = number3 % number1;
// result = number1++;
// result = ++number1;

// console.log(result);
// console.log(number1);

// ! 2-Atama op
// ? = += -= /= *= %=
result = number1;
// result =    result +number2
result += number2;
result -= number2;
result /= number2;
result *= number2;
result %= number2;

// console.log(result);
// ! 3- Karşılaştırma op
// ?  == !=  === < > >= <=
result = number1 == number2;
result = number1 !== number2;
result = 10 === "10"; //? tip kontrolü
result = number3 > number2;
result = number3 < number2;
result = number1 >= 10;

// console.log(result);
// !4-Mantıksal op
// ? && ve , || veya , ! tersi

console.log(number1!==number2 && number1>number2);

console.log(number1 > number3 || number1===number1);

console.log(!(number1> number3) && number2 >= number1);
