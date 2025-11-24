//Enabling Strict Mode is better for determining errors and writing more secure code

function navButton(name) {
	this.name = name;
	}
}

function exitButton(name) {
	this.name = name;
}

function Button(type) {
	this.type = type
	this.getNoOfButtonsOfType: function() {
		console.log("This is an example of an inherited function, via prototyping. By having tthis Button object constructor, we can create a prototype of both nav and exit buttons, thus meaning any nav and exit buttons created will have a reference to this Button prototype, and therefore have a reference to the 'getNoOfButtonsOfType' function");
	}
}

var homeButton = new navButton("Home");