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
	pickRandomName = () => {
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
		
		var subjectIndex = Math.floor(Math.random() * subject.length);
		
		this.setState({subject: subject[subjectIndex]});
	}
	
	render() {
		const style = {
			color: this.state.color,
			backgroundColor: this.state.backgroundColor
		}
		
		return(
			<div>
				<div className="details" style={style}>
					Name: {this.state.name}<br/>
					Subject: {this.state.subject}
				</div>
				<button className="button" onClick={this.pickRandomName}>Change Student Name</button>
				<button className="button" onClick={this.pickRandomColour}>Change Text Colour</button>
				<button className="button" onClick={this.pickRandomBackgroundColour}>Change Background Colour</button>
				<button className="button" onClick={this.pickRandomSubject}>Change Subject</button>
			</div>
		);
	}
}

ReactDOM. render(<DetailsBox/>, document.getElementById("react-update-state"))
