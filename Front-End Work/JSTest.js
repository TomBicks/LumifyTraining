//Enabling Strict Mode is better for determining errors and writing more secure code
"use strict";

console.log("JavaScript File has Loaded");

function navButton(name) {
	this.name = name;
};

function exitButton(name) {
	this.name = name;
};

function Button(type) {
	this.type = type;
	this.getNoOfButtonsOfType = function() {
		console.log("This is an example of an inherited function, via prototyping. By having tthis Button object constructor, we can create a prototype of both nav and exit buttons, thus meaning any nav and exit buttons created will have a reference to this Button prototype, and therefore have a reference to the 'getNoOfButtonsOfType' function");
	};
};

navButton.prototype = new Button("navButton");
exitButton.prototype = new Button("exitButton");

var homeButton = new navButton("Home");
homeButton.getNoOfButtonsOfType();


var Text1 = "' is the symbol!"
var Text2 = "` is the symbol!"

console.log('By using single quotes, we can substitute a value into a string: %s', Text1);
console.log(`By using a backtick, another way to substitute a string is this: ${Text2}`);

let Var1 = "Test"
/*Unlike Var, Let does not permit re-declaration.
once a variable has been declared with let,
it can be updated but not redeclared*/
//let Var1 = "Test2" would return an error

alert("This is an alert message.")

//Gives a prompt to the user
let name = prompt("The prompt message is: \nPlease enter your name: ");
console.log("You have entered" + name)

//Gives a prompt to the user, but with the text input already filled as a default value
let subject = prompt("Please enter your selected subject name", "Front-End Development");
console.log("Your selected subject is " + subject);

let output = confirm("Confirmation message: \nReady to move on to the next demo?");
if(output) {
	console.log("You pressed OK.");
}
else {
	console.log("You pressed Cancel.");
}


var x = 3.123456789;
console.log("Value of x to 3 characters, or 2 decimal places in this case, is: " + x.toPrecision(3));

let sentence = "I \"love\" front-end!"; //backslash before the quotation (\") allows its usage in a string without confusing the compiler.
console.log("String defined with escape characters; ", sentence)

let multiline_string = 
`			This is a
			string which
			spans multiple lines.`;
console.log("Backticks allow for a string that occurs over multiple linesm like this one: \n", multiline_string);


//String Variable and Object Comparison Test
var name_str1 = "David";
var name_str2 = "David";

var name_obj1 = new String("David");
var name_obj2 = new String("David");

//Comparisons
console.log("Is name_str1 == name_str2? ", name_str1 == name_str2);
console.log("Is name_str1 == name_obj1? ", name_str1 == name_obj1);
console.log("Is name_obj1 == name_obj2? ", name_obj1 == name_obj2);
console.log("Is the valeuOf name_obj1 double equal to valeuOf name_obj2? : ", name_obj1.valueOf() == name_obj2.valueOf());

//Strict Comparisons
console.log("Is name_str1 === name_str2? ", name_str1 === name_str2);
console.log("Is name_str1 === name_obj1? ", name_str1 === name_obj1);
console.log("Is name_obj1 === name_obj2? ", name_obj1 === name_obj2);
console.log("Is the valeuOf name_obj1 triple equal to valeuOf name_obj2? : ", name_obj1.valueOf() === name_obj2.valueOf());


//Useful string functions
let empName = "Jane Chang";
console.log("Number of characters in empName is : " + empName.length);
console.log("Index of h is : "+ empName.indexOf("h"));
console.log("'Ch' occurs at position : " + empName. search("Ch"));

//String slices
var line = "Fundamentals of JavaScript";
console.log("Original line: ", line);
console.log("Slice (1, 12): ", line.slice(1,12));
console.log("Slice (-23, -15): ", line.slice(-23, -15));
console.log("Slice (13): ", line.slice(13));

//Substitute substrings into string using replace
console.log("Replacing 'JavaScript' with 'Web Programming'",
line.replace("JavaScript", "Web Programming") );

console.log("Replacing 'javascript' with 'Python'", //Replace is case-sensitive, so this won't replace anything
line.replace("javascript", "Python"));

console.log("Replacing 'javascript/i' with 'Python'", //"/i" makes the substituion case-insensitive
line.replace(/javascript/i, "Python"));

console.log("Default replace of 'a' with 'A': ", //Replace only replaces the first instance of the desired substring
line.replace("a", "A") );

console.log("Global replace of 'a' with 'A': ", //"/g" allows the replacement of all instances of the desired substring
line.replace(/a/g, "A"));

//Splitting a string
console.log("Splitting the line on space: ", line.split(" "));

//Trimming a string
var myString = "                Hey, this is JS                      "; //Doesn't trim any spaces between the words however
console.log("Before the trim operation : " + myString);
console.log("After the trim operation : " + myString.trim());


//Dates
var time = new Date(); //Defaults to the current time, date, timezone, etc. and all other information
console.log("Current time: \n", time);

time = new Date(2019, 9, 10, 15, 21, 43); //Leading 0's are not allowed in strict mode
console.log("Specific time (Year, Month, Dat, Hour, Min, Sec): \n", time);

time = new Date("November 6, 2019");
console.log("Initialized with a date string : \n", time);

time = new Date("2019-10-20");
console.log("Initialized with (yyyy-mm-dd): \n", time);

time = new Date();
console.log("My timezone offset in minutes: ", time.getTimezoneOffset());
console.log("The UTC time is: ", time.toUTCString());


//Functions
function testFunction(number) {
	//Let does not extend to beyond the scope of the for loop, causing an error when trying to call it
	for(let i = 0; i < number; i++) {
		console.log("i: ", i);
	}
	//This will cause an error; this is how to catch errors, using try and catch blocks
	try { console.log("Value of i: ", i); }
	catch(err) { console.log("Error message is: ", err.message); }
	
	
	//Var extends to the scope of the function, meaning it will not cause an error to call it
	for(var j = 0; j < number; j++) {
		console.log("j: ", j);
	}
	console.log("Value of j: ", j);
}
testFunction(5);

//Different way to define an arrow function
let kmToM = km => {
	return km * 1000;
}
var metres = kmToM(5);
console.log("Km to Metres: ", metres);

//Defining an arrow function with an implicit return
let kmToMImplicit = km => km * 1000;
var metres = kmToM(5);
console.log("Km to Metres (Implicit): ", metres);

//Defining an arrow function with two parameters and an implicit return
let triangleArea = (base, height) => base * height * 0.5;
console.log("Area of a triangle with base of 5 and height of 4: ", triangleArea(5, 4));

//Defining an anonymous function; this will allow 'x' to be ran as if it's a function, and return the value by substituting for 'f'
var x = function(f) { return 5 * (f-32) / 9 };
console.log("50 Farenheit to Celsius: ", x(50));


//How to throw our own errors
function isEven() {
	
	var a;
	a = document.getElementById("num").value;

	try {
		if((a % 2) == 0) {
			console. log("The entered number is even");
		}
		else {
			throw "not an even number";
		}
	}
	catch(msg) {
		console. log("The entered value is " + msg);
	}
	finally {
		console.log("This message is sent regardless of try/catch result.");
	}
}


//Arrays
let array1 = [1, 2, "C", "D", 5];
let array2 = new Array("A", "E", "I", "O", "U");
let array3 = []; //0 will be undefined
array3[1] = "A";
array3[2] = "B";
array3[3] = "C";
array3[4] = "D";
array3[5] = "E";

function oldAndNewArraySyntax(array) {
	//Old syntax way to iterate over an array
	for(let i = 0; i < array.length; i++) {
		console.log("Old syntax result: ", array[i]);
	}

	//New ES6 syntax way to iterate over an array
	for(let item of array) {
		console.log("New ES6 syntax result: ", item);
	}
}
oldAndNewArraySyntax(array1);
oldAndNewArraySyntax(array2);
oldAndNewArraySyntax(array3);

//Running a function for each item in an array
let testScores = [3, 64, 81, 91, 39, 73];

function higherThan70(score) {
	if(score > 70) {
		console.log(`The score of ${score} is higher than 70!`);
	}
	else {
		console.log(`The score of ${score} is lower than 70!`);
	}
}
//Runs the function for each item in the array
testScores.forEach(higherThan70);


//Fixed and Rest parameters in JS
let add;

//using "...nums" means we can supply as many arguments as we want, and the function will use them all in an array
function sum(...nums) {
	add = 0;
	for(var num of nums) {
		add += num;
	}
	return add;
}

console.log("Sum of 1, 2, 3 and 4 is: ", sum(1, 2, 3, 4));

//By defining a rest parameter after a fixed parameter, we can use both and distuinguish them from each other
//NOTE!! Rest parameters MUST be the last parameter, nor can there be multipl rest parameters, as they are indistuingihusable from eahc other.
function studentDetails(name, ...courses) {
	console.log("Name of student is: ", name);
	
	let sub;
	for(sub = 0; sub < courses.length; sub++) {
		console.log(courses[sub]);
	}
}

studentDetails("Chris", "JavaScript", "Python", "Scala");