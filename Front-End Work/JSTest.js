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