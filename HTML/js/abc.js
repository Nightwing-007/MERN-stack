var a = 20;
let b = 30;
const c = 40;

const addTwoNumbers = (p1, p2) => {
    console.log(p1, p2);
    let num1 = p1 || 10;
    let num2 = p2 || 10;
    let sum = num1 + num2;
    console.log("The sum of two numbers is: ", sum);
};

addTwoNumbers(10, 50);
addTwoNumbers(40, 50);
addTwoNumbers();