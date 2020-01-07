console.log("-------Task 1-------"); // Task 1
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

console.log("-------Task 2-------"); // Task 2
//Declare and asign an integer variable.
//Declare and asign a boolean variable.
//Declare and asign a string variable.
//Use the typeof operator to check the types of all assigned variables.
let intt = 0;
let boo = true;
let str = "sttr";
console.log(typeof(intt), typeof(boo), typeof(str));

console.log("-------Task 3-------"); // Task 3
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

console.log("-------Task 4-------"); // Task 4
//Declare a variable name.
//Assign the variable to your name.
//Declare and assign a variable lastName with the value of your last name.
//Print Hello, and your name and last name in the console from the previous variables.
let damjan  = "Damjan";
let lastName = "Dodevski";
console.log(`Hello ${damjan} ${lastName}`);

console.log("-------Task 5-------"); // Task 5
//Declare two number variables and assign them any number
//Write an if statement that prints the larger one in console
let num1 = 10;
let num2 = 4;
if (num1<num2){
    console.log(`${num2} is larger than ${num1}`)
} else{
    console.log(`${num1} is larger than ${num2}`)
};

console.log("-------Task 6-------"); // Task 6
//Declare a variable and assign any number to it
//Write an if statement that finds out if a number is even OR larger than 100
//If it is print in the console: The number is cool!
let num11 = 100;
if (num11>=100){
    console.log("The number is cool!");
}

console.log("-------Task 7-------");// Task 7
//Write a JavaScript program that will convert denars to euros.
//One euro is 61.5 denars.
let denanrs = 500;
console.log(`${denanrs} dennars are ${denanrs/61.5} euros`);

console.log("-------Task 8-------"); // Task 8
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days
let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let input = "Tuesday";

switch (input){
	case "Monday" || "Wednesday":
		console.log("You're in class");
		default:
			console.log("You're free!");

}

console.log("-------Task 9-------"); // Task 9
let arryT6 = [5,6,15,42]; //Declare and assign an array of 6 integers. Ex 5,6,15,42.
let arryT6Strings = ["Dragan", "Trajan", "Martin"];//Declare and assign an array of strings. Ex Dragan Trajan Martin
console.log(arryT6[0]); //Print the first value of each array.
console.log(arryT6Strings[0]);
console.log(arryT6); //Print the arrays.
console.log(arryT6Strings);
arryT6[0]=10;
console.log(arryT6[0]); //Change the values of the first element in both arrays.

arryT6Strings[99]="test"; //Assign a value to the 100 th member of the first array.
console.log(arryT6Strings.length); //Print how many elements the array has?
console.log(arryT6Strings[99]); //What is the value of the 99th element in the array.
arryT6.push("lighter"); //Write an example of push.
arryT6.pop();//Write an example of pop.
console.log(arryT6.length);
console.log(arryT6[1000]);
console.log(arryT6Strings[1000]); //What is the value of the 1000th element in both arrays?
// 9.Write an if statement that prints "It's a cool number" if
// a number is even or larger than 100


console.log("-------Task 10-------") // Task 10
//Write a while loop that counts from 0 to 10.
//The numbers should be printed in the console.
let i = 1;
let arryT10 = [];
let arryTT10 = [];
while( i <= 10){
	arryT10 = arryT10 + " " + i;
	i++;
 };
console.log(arryT10);

console.log("-------Task 11-------") // Task 11
//Write a for loop that counts from 1 to 20 but skips every second number.
//The numbers should be printed in the console.
arryT11 = [];
for(let i = 1;i <= 20; i++){
	if (i % 2 !== 0){ // "!==" Checks if it's odd, "==" Checks if it's even
		arryT11 = arryT11 + " " + i;
	}
}
console.log(arryT11);

console.log("-------Task 12-------"); // Task 12
//Write a JavaScript program that will find the sum of all items in the given array,
//make it dynamic, so the result will change if the array is changed.
let arryT12 = [1,1,1,1,1,2,5,3,5,true];
let resultt12 = 0;
for(let i = 0; i <= arryT12.length-1; i++){
	resultt12 = resultt12 + arryT12[i];
}
console.log(typeof resultt12);
if (typeof resultt12 !== "string" && typeof resultt12 !== isNaN){
	console.log(`The sum of the numbers in the array is ${resultt12}`);
}
// // // // let arry = [4,3,1,4,5,6,67,4];
// // // // let result = 0;
// // // // function arrSum(){
// // // // for(let i=0; i<arry.length;i++ ){
// // // //     result = result+arry[i];
// // // // }
// // // // return result;
// // // // }
// // // // console.log(`The array has ${arrSum()} items in it`);

console.log("-------Task 13-------");// Task 13
//Write a JavaScript program that will find the sum of all positive numbers in the array.
	var numbers = [2,5,4,8,7,7,6,5,2,1,3,6];
	var sum = 0;

	for(let i = 0; i < numbers.length; i++) {
	  if(numbers[i] % 2==0) {
		sum = sum + numbers[i];
	}

  };

  console.log(`Sum of all the evens in an array = ${sum}`);// sum of all the evens in the array

  var arryT13 = [2,1,2,-2,-5,4,10,15,-16];
  var sumT13 = 0;

  for (let i = 0; i < arryT13.length; i++){
	  if (arryT13[i]>=0){
		  sumT13 = arryT13[i] + sumT13;
	  }
  }
  console.log(`sum of all the positives in an array = ${sumT13}`); // sum of all the positives in the array



  console.log("-------Task 14-------");// Task 14
//Write javascript program that will take the items from a given array
//and make new aray with the same items in revers order.

let arrayT14 = [1,2,3,4,5];
let resultT14 = [];
for (let i = 0; arrayT14.length > i; i++){
    resultT14.unshift(arrayT14[i]);
 }
console.log(resultT14);

console.log("-------Task 15-------");// Task 15
//Write javascript program that will find the average value
//from the all the item values in the given array.

let arrayT15 = [1,2,3,4,5,110,12223];
let resultT15 = 0;
for (let i = 0; arrayT15.length > i; i++){
    resultT15 = resultT15 + arrayT15[i] ;
 }
 resultT15 = resultT15 / arrayT15.length;
console.log(resultT15);

// Same task with function
console.log("The same task using a function and array as declaration");
function myFunc( array ){
	let resultT15F =0;
	for(let i = 0; array.length > i; i ++ ){
		resultT15F = resultT15F + array[i] ;
	}
	let sumT15 =  resultT15F / array.length;
	return sumT15;
}

console.log(myFunc([1,2,3,4,5,110,12223]));

console.log("-------Task 16-------");// Task 16
//Write a function that prints your name in the console
var nameT16 = 'Bob';

function printMyName(name){
    console.log(name);
}
printMyName(nameT16);

console.log("-------Task 17-------");// Task 17
//Write a function that accepts your name as an argument and returns "Hello NAME"
var nameT17 = 'Bob';

function printMyNameT17(name){
    return console.log(`Hello ${name}`);
}
printMyNameT17(nameT17);

console.log("-------Task 18-------");// Task 18
//Write a function that accepts 2 numbers as arguments and returns the sum of the two
function t17(a,b){
	let sum = a + b;
	return sum;
}

console.log(`Function that accepts 2 numbers as arguments and returns the sum = ${t17(5,10)}`);

console.log("-------Task 19-------");// Task 19
//Write a function that takes a number and returns a message that tells you
//if the number is odd or even
function T19(number){
	if(number % 2 == 1){
		return console.log(`The number ${number} is odd`);
	} else if(number % 2 == 0){
		return console.log(`The number ${number} is even`);
	} else {
		return console.log("Error!");
	}
};

T19(15);

console.log("-------Task 20-------");// Task 20
//Write a function that takes an array of numbers and returns the number
//of numbers in the array that are even
function T20 (array){
	let res = [];
	for (let i = 0; array.length > i; i++){

		if(array[i] % 2 == 0){
			res = res + array[i];
		}
	}
	return res.length;
}
console.log(`There are ${T20([2,3,5,6,7,4,2])} even numbers in the array`);


console.log("-------Task 21-------");// Task 21
//Write an HTML h1 element and select it in javascript by id
let T21 = document.getElementById(`header`);
console.log(T21);

console.log("-------Task 22-------");// Task 22
//Write two p elements and select them by class
let paragraph = document.getElementsByClassName(`paraph`);
console.log(paragraph[0]);
console.log(paragraph[1]);

console.log("-------Task 23-------");// Task 23
//Write two h3 elements and select the first one by tag name
let heading3 = document.getElementsByTagName("h3");

console.log(heading3[0]);

console.log("-------Task 24-------");// Task 24
//Write a div and inside it write one h1 and 2 p elements
//Select the second p element through the div element
//Hint: You must select the div element and try to find p from there
let myDiv = document.getElementById("myDiv");
let paragraphs = myDiv.querySelectorAll(".paraph");

console.log(paragraphs[1]);


console.log("-------Task 25-------");// Task 25
//Write a h1 element with some text inside of it
//Change the text inside the h1 with Javascript
let T23 = document.getElementById("header");
T23.innerText = "This is changed thrugh javascript";

console.log("-------Task 26-------");// Task 26
//Write an ul element in HTML
//In the ul element add 5 new li elements with Javascript
let listedElements = document.getElementById("list");
for (let i =0; i < 5; i ++){
	listedElements.innerHTML += "<li>This is added from javascript</li>";
};


console.log("-------Task 27-------");// Task 27
// Create an input, h1 element and a button
// as long as the number in the input is larger than 100 show the h1 element that reads: more than 100
// If the button is clicked but the number is lower hide the h1 element and write ERROR in the console
var inputT27 = document.getElementById("input");
var btn = document.getElementById("btn");
var headingH1 = document.getElementById("heading h1");

btn.addEventListener("click", function(){
	if(inputT27.value>=100){
		headingH1.innerHTML = "More than 100";
	} else {
		console.log("error");
	}
});

console.log("-------Task 28-------");// Task 28
// Create two inpust: Size and Color
// Create a button called order
// When the button is clicked add a new li element in an ul list wiht the title T-Shirt Orders
// In the new element write T-Shirt: Size ( Ex: T-Shirt: Medium )
// Get the size from the input. Also change the color of the text to the color entered.
// Clear the inputs after the button is clicked and a new li element is added
var btn28 = document.getElementById("btn2");
var inputSize = document.getElementById("sizes");
var inputColour = document.getElementById("colours");
var ordersList = document.getElementById("ordersList");

btn28.addEventListener("click", function(){
			ordersList.innerHTML = "";
			ordersList.innerHTML += `<li>T-Shirt size: ${inputSize.value} </li>`;
			ordersList.style.color = inputColour.value;
		}

)



console.log("-------Task 29-------");// Task 29
// Create a simple calculator
// Have 3 inputs: num1, num2 and operation
// Have a button that says calculate
// After the button is clicked have the numbers execute with the operation given
// Show the result in an h1

let number1 = document.getElementById("number1");
let operator = document.getElementById("operator");
let number2 = document.getElementById("number2");
let calcBtn = document.getElementById("calcBtn");
let resultCalc = document.getElementById("result");


calcBtn.addEventListener("click", function(){

	let input1 = parseInt( number1.value );
	let input2 = parseInt( number2.value );

	switch(operator.value){
		case ("%"):
			resultCalc.innerText = input1 % input2;
			break;
		case ("+"):
			resultCalc.innerText = input1 + input2;
			break;
		case ("-"):
			resultCalc.innerText = input1 - input2;
			break;
		case ("*"):
			resultCalc.innerText = input1 * input2;
			break;
		case ("/"):
			resultCalc.innerText = input1 / input2;
			break;
	}
})


console.log("-------Task 30-------");// Task 30
// Create a textarea element
// While typing live count how many words are in the textarea
// Show the result in an h1
// ( while typing means, the number of words is updated every time the user hits any button )
let realInput = document.getElementsByTagName("input")[3];
let btn30 = document.getElementsByTagName("button")[3];
let e = 32;
let countSpaces = 0;
// It needs an update the code to remove or not count double spaces as a word
btn30.addEventListener("click", function(){
    console.log(`The space key has been hit ${countSpaces} number of times in the input!`);
})

realInput.addEventListener("keyup", function(e){
    let numberOfWords = e.currentTarget.value.split(" ").length;
    if(e.currentTarget.value === "") console.log("EMPTY")
    else console.log(`There are ${numberOfWords} words in the input`)
})