//Enabling Strict Mode is better for determining errors and writing more secure code

function navButton (name) {
	this.name = name;
	navButton.prototype.getNoOfNavButtons: function() {
		console.log("This is a prototyped function, meaning every object of navButton all have pointers to a single function, rather than each having their own copy of the same function. Good if the function would do the same thing for every single instance.")
	}
}

var homeButton = new navButton("Home");