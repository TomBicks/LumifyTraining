class DetailsBox extends React.Component {
	//By initialising the state object outside of "constructor", we don't need a reference to "this"
	state = {
		name: 'John',
		color: 'green',
		backgroundColor: 'pink',
		subject: 'Pyschology'
	}
	
	//The arrow notation is preferred for functions that belong to ES6 classes
	//This automatically binds the functions to "this"; the current instance of the component
	pickRandomNames = () => {
		var names = ['Alice','Bob','Carl','Dora','Elisa'];
		
		var nameIndex = Math.floor(Math.random() * names.length);
		
		//Special component that updates the state of this component
		//NOTE!! Always use setState to update the state, to ensure components are re-rendered!
		//Accepts an object with the states we want updated
		this.setState({name: names[nameIndex]});
	}
	
	pickRandomColour = () => {
		var colours = ['red', 'orange', 'blue', 'green']
		
		var colourIndex = Math.floor(Math.random() * colours.length);
		
		this.setState({color: colours[colourIndex]});
	}
	
	pickRandomBackgroundColour = () => {
		var colours = ['yellow', 'pink', 'purple', 'brown']
		
		var colourIndex = Math.floor(Math.random() * colours.length);
		
		this.setState({backgroundColor: colours[colourIndex]});
	}
	
	pickRandomSubject = () => {
		var subject = ['Technology', 'Health', 'Science', 'Maths']
		
		var subjectIndex = Math.floor(Math.random() * colours.length);
		
		this.setState({subject: subject[subjectIndex]});
	}
}

ReactDOM. render(, document.getElementById("react-update-state"))
