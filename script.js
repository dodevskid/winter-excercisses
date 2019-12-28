// Task 1
//Declare a variable a.
//Assign the variable with the value of 7.
//Declare and asign a variable b with the value of 8.
//Declare a variable c and asign it the value of a + b.
//Print the value in the console.
let a;
a=7;
let b;
b=8;
let c;
c=a+b;
console.log(c);
// Task 2
//Declare and asign an integer variable.
//Declare and asign a boolean variable.
//Declare and asign a string variable.
//Use the typeof operator to check the types of all assigned variables.
let intt = 0;
let boo = true;
let str = "sttr";
console.log(typeof(intt), typeof(boo), typeof(str));
// Task 3
//Declare 2 variables x and y and set them to 10 and 3.
//Declare and asign a variable that would be the result of division of 10 and 3.
//Declare and asign a variable that would be the whole part of the division of 10 and 3.
//Declare and asign a variable that would be the remainder of the division of 10 and 3.
let x =10;
let y = 3;
let res1 = x / y;
let res2 = x % y;
let res3 = Math.floor(x/y);
console.log(res1,res2, res3);
// Task 4
//Declare a variable name.
//Assign the variable to your name.
//Declare and assign a variable lastName with the value of your last name.
//Print Hello, and your name and last name in the console from the previous variables.
let damjan  = "Damjan";
let lastName = "Dodevski";
console.log(`Hello ${damjan} ${lastName}`);
// Task 5
//Declare two number variables and assign them any number
//Write an if statement that prints the larger one in console
let num1 = 10;
let num2 = 4;
if (num1<num2){
    console.log(`${num2} is larger than ${num1}`)
} else{ 
    console.log(`${num1} is larger than ${num2}`)
};
// Task 6
//Declare a variable and assign any number to it
//Write an if statement that finds out if a number is even OR larger than 100
//If it is print in the console: The number is cool!
let num11 = 99;
if (num11>=100){
    console.log("The number is cool!");
}
// Task 7
//Write a JavaScript program that will convert denars to euros.
//One euro is 61.5 denars.
let denanrs = 500;
console.log(`${denanrs} is $`)
// Task 8
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days

// Task 9
//Declare and assign an array of 6 integers. Ex 5,6,15,42.
//Declare and assign an array of strings. Ex Dragan Trajan Martin
//Print the first value of each array.
//Print the arrays.
//Change the values of the first element in both arrays.
//Assign a value to the 100 th member of the first array.
//Print how many elements the array has? 
//What is the value of the 99th element in the array.
//Write an example of push.
//Write an example of pop.
//What is the value of the 1000th element in both arrays?
// 9.Write an if statement that prints "It's a cool number" if
// a number is even or larger than 100

// Task 10
//Write a while loop that counts from 0 to 10.
//The numbers should be printed in the console.

// Task 11
//Write a for loop that counts from 1 to 20 but skips every second number.
//The numbers should be printed in the console.

// Task 12
//Write a JavaScript program that will find the sum of all items in the given array,  
//make it dynamic, so the result will change if the array is changed. 

let arry = [4,3,1,4,5,6,67,4];
let result = 0;
function arrSum(){
for(let i=0; i<arry.length;i++ ){
    result = result+arry[i];
}
return result;
}
console.log(`The array has ${arrSum()} items in it`);

// Task 13
//Write a JavaScript program that will find the sum of all positive numbers in the array.

// Task 14
//Write javascript program that will take the items from a given array 
//and make new aray with the same items in revers order.
let array1 = [1,2,3,4,5];
let array2 = [];
for (let i =array1.length; i>0; i--){
    array2.push(array1[i]);
}
console.log(array2);

// Task 15
//Write javascript program that will find the average value 
//from the all the item values in the given array.

// Task 16
//Write a function that prints your name in the console
var aaa = 'Hello';

function name(name){
    console.log(name);
}
name(aaa);

// Task 17
//Write a function that accepts your name as an argument and returns "Hello NAME"

// Task 18
//Write a function that accepts 2 numbers as arguments and returns the sum of the two

// Task 19
//Write a function that takes a number and returns a message that tells you
//if the number is odd or even

// Task 20
//Write a function that takes an array of numbers and returns the number
//of numbers in the array that are even

let value = document.getElementById(`header`);
console.log(value);

// Task 21
//Write an HTML h1 element and select it in javascript by id

// Task 22
//Write two p elements and select them by class

// Task 23
//Write two h3 elements and select the first one by tag name

// Task 24
//Write a div and inside it write one h1 and 2 p elements
//Select the second p element through the div element 
//Hint: You must select the div element and try to find p from there

// Task 25
//Write a h1 element with some text inside of it
//Change the text inside the h1 with Javascript

// Task 26
//Write an ul element in HTML
//In the ul element add 5 new li elements with Javascript

// Task 27
// Create an input, h1 element and a button
// as long as the number in the input is larger than 100 show the h1 element that reads: more than 100
// If the button is clicked but the number is lower hide the h1 element and write ERROR in the console

// Task 28
// Create two inpust: Size and Color
// Create a button called order
// When the button is clicked add a new li element in an ul list wiht the title T-Shirt Orders
// In the new element write T-Shirt: Size ( Ex: T-Shirt: Medium )
// Get the size from the input. Also change the color of the text to the color entered.
// Clear the inputs after the button is clicked and a new li element is added

// Task 29
// Create a simple calculator
// Have 3 inputs: num1, num2 and operation
// Have a button that says calculate
// After the button is clicked have the numbers execute with the operation given
// Show the result in an h1

// Task 30
// Create a textarea element
// While typing live count how many words are in the textarea
// Show the result in an h1
// ( while typing means, the number of words is updated every time the user hits any button )

