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