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


//Spreading arrays - transforms arrays into a spread of numbers, thereby making them not an array
let array4 = [21,11,43,7];
console.log("array4 without spread: ", array4);
console.log("array4 with spread: ", ...array4);

//The function, much like sum above, is expecting a rest parameter; an array will not function here, so spreading out the numbers will mean they can be added back into an array within the function
console.log("Min of array4 (without spread): ", Math.min(array4)); //returns NaN (Not a Number)
console.log("Min of array4 (with spread): ", Math.min(...array4)); //Returns 7

//Multiple arrays can be spread together, as they are now just a series of numbers, made into one
let array5 = [13, 68, 9, 2];
console.log("Min of array4 and array5: ", Math.min(...array4, ...array5));
console.log("Min of array4 and array5 and more: ", Math.min(...array4, ...array5, 1));

//Not only arrays can be spread; strings can be too
let myName = "Thomas Bickley";
console.log("My name (spread): ", ...myName);

//We can also create arrays from, for example, spread strings, using Array.from()
console.log("Array formed with Array.from(myName):", Array.from(myName));


//Destructuring arrays via spreading
let numbers = [10, 20, 30, 40];

//Matches the values to each index
let [a, b, c, d] = numbers;
console. log("Values after the first assignment (no rest parameters) : \n")
console. log("Value of a : " + a);
console. log("Value of b : " + b);
console. log("Value of c : " + c) ;
console. log("Value of d : " + d);

//Grabs the first three values
[a, b, c] = numbers;
console. log("Values after the second assigment (no rest parameters) : \n")
console. log("Value of a : " + a);
console. log("Value of b : " + b);
console. log("Value of c : " + c);

//a grabs the first value, and the rest are grabbed by b
[a, ...b] = numbers;
console. log("Values after [a, ...b] = numbers:\n")
console. log("Value of a : " + a);
console. log("Value of b : " + b);

//Ignores the first value, and the rest are grabbed by a/g
[,...a] = numbers;
console. log("Values after [, ...a] = numbers:\n")
console. log("Value of a : " + a);


//Shallow and Deep Copies of Arrays
let prices = new Array(10, 20, 36, 40, 47);

//This acts as a shallow copy, essentially being a pointer back to the original prices array
//This is done by default, as creating an entirely new array each time would be taxing memory-wise
let shallowCopy = prices;
console.log("Before changing shallowCopy, prices = \n", prices);

shallowCopy [0] = 70;
console.log("After changing shallowCopy, prices = \n", prices);

//Using array.slice, we can create an entirely new copy of the array
let deepCopy = prices.slice();
console.log("Before changing deepCopy, prices = \n", prices);

deepCopy[0] = "Eighty";
console.log("After changing deepCopy, prices = \n", prices);


//Array manipulation
//Push - Adds a value to the back of the array
prices.push(1000);
console.log("Contents of prices after push: ", prices);

//Unshift - Adds a value to the front of the array
prices.unshift(0);
console.log("Contents of prices after unshift: ", prices);

//Pop - Removes the last value from the array
prices.pop();
console.log("Contents of prices after pop: ", prices);

//Shift - Removes the value index from the array
prices.shift();
console.log("Contents of prices after shift: ", prices);

//Delete - Empties a value from a specific index (this doesn't mean the index is gone, but rather the value is 'empty')
delete prices[2];
console.log("Contents of prices after delete at index 2: ", prices);


//Array Splicing Function Parameters
let dogBreeds = ['Labrador', 'Beagle', 'Golden Retriever','Doberman', 'German Shepherd', 'Boxer'];
console. log("Original contents of dogBreeds: \n", dogBreeds);

/*Splice arguments are;
- index from which values should be inserted at, 
- number of elements that need to be removed from the index given, 
- rest parameter of all the values to insert*/
dogBreeds.splice(3, 0, 'Poodle', 'Dalmatian');
console. log("dogBreeds after splice(3, 0, 'Poodle', 'Dalmation': \n", dogBreeds);

dogBreeds.splice(1, 2, 'Indi');
console. log("dogBreeds after splice(1, 2, 'Indi': \n", dogBreeds);

//We can also slice a portion of the dogBreeds array, to create our own array, with only the portion of indexes we want
//Slice(3) will grab the array from index 3 onwards, as a now seperate array
let slice0fDogBreeds = dogBreeds.slice(3);
console. log("dogBreeds.slice(3) =\n", slice0fDogBreeds);

//Slice(3,5) will grab the array from index 3, up to but *not* including index 5
slice0fDogBreeds = dogBreeds.slice(3, 5);
console.log("dogBreeds.slice(3,5) = \n", slice0fDogBreeds);

//Slice(-3,-1) will grab the array 3rd from last index (here, index 4) up to but *not* including the last index (so including index 5)
slice0fDogBreeds = dogBreeds.slice(-3, -1);
console. log("dogBreeds.stice(-3, -1) = \n", slice0fDogBreeds);


//Concatenating and Sorting Arrays
//Concat orders the array from - calling array, first argument array, second argument array, etc
let europeOffices = ['Bucharest', 'Prague', 'Rome'];
let africaOffices = ['Durban', 'Nairobi'];
let oceaniaOffices = ['Christchurch', 'Sydney'];

let allOffices = africaOffices.concat(oceaniaOffices, europeOffices);
console.log("Offices after concat: ", allOffices); //Concat produces another array entirely
console.log("African offices after concat: ", africaOffices); //Untouched
console.log("Oceanic offices after concat: ", oceaniaOffices); //Untouched
console.log("European offices after concat: ", europeOffices); //Untouched

//Sorting arrays
//Sorting strings will be sorted in alphabetical order
let sortedOffices = allOffices.sort();
console.log("Sorted offices: ", sortedOffices);
console.log("allOffices after sorting sortedOffices (a sorted copy of allOffices): ", allOffices); //Has been sorted too, because sortedOffices is a shallow copy

//If we want to keep the original order, there are two main methods
allOffices = africaOffices.concat(oceaniaOffices, europeOffices); //Undo previous changes

//We can use the spread syntax to break down the array into items and sort them like that
console.log("Sorted copy of allOffices using spread syntax: \n", [ ...allOffices].sort());

//We can also use array.slice to create a deep copy, and sort that, now knowing it's a seperate array from allOffices
console.log("Sorted copy of allOffices using slice: \n", allOffices.slice().sort());

console.log("allOffices after sorting: \n", allOffices); //Untouched


//Sorting numbers, by default, doesn't work how you'd expect
let numArray = [20, 50, 3, 10, 35];
console.log("numArray after sorting: \n", numArray.slice().sort()); //Sorts in order of the first character, then the next, outputting [10, 20, 3, 35, 50] - Not likely what we want

//By giving sort an anonymous compare function, we can sort; if the function returns a negative, it means a is less than be and should therefore appear before b, and so on
numArray.sort(function(a,b) { return a-b; });
console.log("numArray after sorting with compare function: \n", numArray);

//This same principle can be applied in reverse to give us a reverse sort
numArray.sort(function(a,b) { return b-a; });
console.log("numArray after reverse sorting with compare function: \n", numArray);


//JavaScript Object Basics - not unlike associative arrays, or even dictionaries
let firstItem = {id: 1, name: "laptop", price: 500}; //This is a JS object, representing an item (a laptop)
let secondItem = {id: 2, name: "watch", price: 240, brand: "Sonical"};

console.log(`firstItem has a name of ${firstItem.name} and a price of ${firstItem.price}.`);
console.log(`secondItem has a name of ${secondItem["name"]} and a price of ${secondItem["price"]}.`);
console.log(`The brand of firstItem is ${firstItem.brand} whilst that of secondItem is ${secondItem.brand}.`);

const USD_to_EUR = 0.9;
//We can't just make calculations with properties when assigning them; the properties' value will be NaN
let thirdItem = {id: 3, name: "headphones", price: 84, brand: "Sonical", priceEUR: this.price * USD_to_EUR};
console.log("Price of thirdItem in Euros: ", thirdItem.priceEUR);

//Instead, we can give the value as a function, that will calculate the value when called
let fourthItem = {id: 4, name: "glasses", price: "150", 
	priceEUR: function() { return this.price * USD_to_EUR; }, //fourthItem.priceEUR() will now call a function to return the converted price
	priceEURES6() { return this.price * USD_to_EUR; }}; //fourthItem.priceEURES6() will now call a function (using ES6 syntax) to return the converted price
	
console.log("Price of fourthItem in Euros: ", fourthItem.priceEUR());
console.log("Price of fourthItem in Euros: ", fourthItem.priceEURES6());

//We can also create blank objects like this
let fifthItem = new Object();
fifthItem.id = 5;
fifthItem.name = "phone";
fifthItem.price = 450;

console.log("The fifthItem is: ", fifthItem);

//We can also delete properties too, using .delete (it doesn't just leave an empty value like it does with arrays)
delete fifthItem.price;
console.log("The fifthItem (after deleting price) is: ", fifthItem);


//This Keyword
//Using this in a global context points to the global window object
console.log("Is this === window?: ", this === window);
console.log("What is 'this'?: ", this);

//Variables declared in a global context (outside an object or a function) are actually made properties of window
var age = 35;
console.log("window.age: ", window.age);
console.log("this.age: ", this.age);

this.age = 55;
console.log("window.age: ", window.age);
console.log("this.age: ", this.age);

//Using this in an object points to the object itself
let myCar = {make: "Volvo", model: "S60", price: 42000,
	printDetails() {
		console.log(`
			Make: ${this.make}
			Model: ${this.model}
			Price: $${this.price}`);
	},
	engine: {
		cylinders: 4,
		displacement: 2000,
		horsepower: 250,
		printDetails() {
			console.log(`
				Displacement: ${this.displacement}cc
				Horsepower: ${this.horsepower}bhp`);
		}
	}
};

console.log("The fields of myCar: ");
myCar.printDetails();

console.log("The details of myCar.engine: ");
myCar.engine.printDetails();

//However, we can also instead seperate the function definition from the object and instead still have the 'this' keyword reference a particular object by explicitly linking the object to the function call
function printCarDetails() {
	console.log(`
		Make: ${this.make}
		Model: ${this.model}
		Price: $${this.price}`);
}

function printEngineDetails() {
	console.log(`
		Displacement: ${this.displacement}cc
		Horsepower: ${this.horsepower}bhp`);
}

//We can link functions to an object via three specific methods
//1. The Call Function - means this, within the function, will refer to the object being called
//Benefits are that the function can be reused for different objects (any properties from the function not in the object will be undefined however)
console.log("Car details using call function: \n");
printCarDetails.call(myCar);
console.log("Engine details using call function: \n");
printEngineDetails.call(myCar.engine);

//2. Object Constructors - as done before, objects can be created with a property that points to a single function, rather than copies of a function for each instance of an object
function Car(make, model, price, engine) {
	this.make = make;
	this.model = model;
	this.price = price;
	this.engine = engine;
	this.details = function() {
		console.log(`
		Make: ${this.make}
		Model: ${this.model}
		Price: $${this.price}`);
	}
	this.engine.details = function() {
		console.log(`
		Displacement: ${this.displacement}cc
		Horsepower: ${this.horsepower}bhp`);
	}
}

let s60Engine = {
	cylinders: 4,
	displacement: 2000,
	horsepower: 250
}
let myCar2 = new Car("Volvo", "S60", 42000, s60Engine);
console.log(`My car is a ${myCar2.make} ${myCar2.model}.`);
console.log("My car details: \n");
myCar2.details();
console.log("My car engine details: \n");
myCar2.engine.details();

let caymanEngine = {
	cylinders: 4,
	displacement: 2500,
	horsepower: 350
}
let yourCar = new Car("Porsche", "718", 61000, caymanEngine);
console.log(`Your car is a ${yourCar.make} ${yourCar.model}.`);
console.log("Your car details: \n");
yourCar.details();
console.log("Your car engine details: \n");
yourCar.engine.details();

//Not dissimilar to working with classes, and in fact JS allows for classes to be defined (as a different syntax for the same thing)
//This is functionally identical to the Car constructor we defined previously
class Vehicle {
	constructor(make, model, price, engine) {
		this.make = make;
		this.model = model;
		this.price = price;
		this.engine = engine;
	}
	
	details = function() {
		console.log(`
		Make: ${this.make}
		Model: ${this.model}
		Price: $${this.price}`);
	}
}

let myCar3 = new Vehicle("Volvo", "S60", 42000, s60Engine);
console.log("My vehicle details (created using a class): \n");
myCar3.details(); //Identical!

//3. Classes??? WILL BE STARTED LATER!!


//Creating New Objects from Existing Objects
let myCar4 = {
	make: "Volvo", 
	model: "S60", 
	price: 42000,
	color: "Grey",
	seats: {
		material: "Leather",
		color: "Brown"
	}
};

console.log("My car: ", myCar4);

//As we can see, simply making a variable point to another object, creates a shallow copy; any changes made to yourCar2 will also be applied to myCar4, as it's just pointing back to myCar4, rather than its own object
var yourCar2 = myCar4;
yourCar2.seats.color = "Grey";
yourCar2.tyres = "Pirelli";

console.log("Your car after changes: ", yourCar2);
console.log("My car after changes to your car: ", myCar4);

//To make what is a partial deep copy of yourCar2, we need to use Object.assign
//This method copies over the fields from a source object over to a target, almost like merging two objects together
//Thus, the source is myCar4, and the target is an empty object, which will thus just be a copy of myCar4
var hisCar = Object.assign({}, myCar4);
hisCar.color = "Red";
hisCar.seats.color = "Neon Green";

//With Object.assign however, the copy isn't entirely a deep copy; whilst the top-level fields are independent, nested objects, such as seats within hisCar and myCar, are pointing to the *same* object
//Thus, the changes made to the car's color are independent, but the changes made to the seat's color apply to both of the objects
console.log("His car after changes (with Object.assign): ", hisCar);
console.log("My car after changes (with Object.assign) to his car: ", myCar4);

//Assigning an object using spread to a variable works similarly to the Object.assign method, creating an only partially deep copy
var yourCar2 = {...myCar4};

console.log("My car: ", myCar4);
yourCar2.seats.color = "Blue";
yourCar2.windows = "Glazed";

//As we can see, the windows only apply to yourCar2, but the seats of both are blue; only the top level fields are independent
console.log("Your car after changes: ", yourCar2);
console.log("My car after changes to your car: ", myCar4);

//Deep copes of objects are possible however
//Redefine the myCar2 object back to its default values
myCar4 = {
	make: "Volvo", 
	model: "S60", 
	price: 42000,
	color: "Grey",
	seats: {
		material: "Leather",
		color: "Brown"
	}
};

//Using JSON.stringify, it converts the object into a string representation, including even the nested objects
//To then create an object from that string, we use JSON.parse to do so, creating an entirely new object from myCar2; a deep copy
yourCar2 = JSON.parse(JSON.stringify(myCar4));

console.log("My car: ", myCar4);
console.log("Your car: ", yourCar2);

yourCar2.seats.color = "Blue";
yourCar2.windows = "Glazed";
//As we can see, both the changes to top-level fields and fields of nested object seats are only applied to yourCar2; it's a deep copy
//NOTE!! This method of creating deep copies of objects does *not* work with objects with attribute values of functions, as functions are not recognised by JSON, and will be lost when they're parsed back into objects
console.log("My car after changes (using JSON): ", myCar4);
console.log("Your car after changes (using JSON): ", yourCar2);


//Object Methods
const myCar5 = {
	make: "Volvo", 
	model: "S60", 
	price: 42000,
	color: "Grey",
	seats: {
		material: "Leather",
		color: "Brown"
	}
};

var samsCar = Object.create(myCar5); //In effect, creates object samsCar, using myCar5 as a prototype
//However, this means changes to this object *will* affect the original myCar5 object, making it not a deep copy

samsCar.seats.color = "White";
console.log("The effect of Object.create():");
console.log("My car: ", myCar5);
console.log("Sam's car: ", samsCar);

//Returns the string name of each of the attributes
console.log("What are the Object's keys?:");
console.log(Object.keys(myCar5));

//Returns the values of each of the attributes
console.log("What are the Object's values?:");
console.log(Object.values(myCar5));

//Returns an array of arrays of each key-value pair
console.log("What are the Object's pairs?:");
console.log(Object.entries(myCar5));

/*let s60Engine = {
	cylinders: 4,
	displacement: 2000,
	horsepower: 250
}*/

//This will merge the two objects together, returning myCar5 with the engine field added to it
let yourCar3 = Object.assign(myCar5, {engine: s60Engine});

//They are exactly the same, with the engine having been added to both
//This means Object.assign doesn't change the fact this is only a paartial deep copy
console.log("The effect of Object.assign():");
console.log("Your car: ", yourCar3);
console.log("My car: ", myCar5);


//Freezing Objects
//We cannot modify or add top-level fields of a frozen object
//However, we can modify or add top-level fields of a nested object, in this case, herCar.seats
let herCar = Object.freeze(myCar5);

//Modify a top-level field
try { herCar.color = "Yellow"; } //Error!
catch(err) { console.log("Error message is: ", err.message); }

//Modify a nested object's field
try { herCar.seats.color = "Red"; } //No error!
catch(err) { console.log("Error message is: ", err.message); }

//Add a field to a nested object
try { herCar.seats.bucket = true; } //No error!
catch(err) { console.log("Error message is: ", err.message); }

//We see all the changes to the nested object have applied to both herCar and the prototype myCar; partial deep-copy, but prevents changes to the fields which would be independent; the top-level fields
console.log("Her car: ", herCar);
console.log("My car: ", myCar5);

//Object.seal is very similiar to Object.freeze, especially with Strict Mod turned on.
//In fact, freeze actually does a little bit more than seal; "It prevents modifying any existing properties"