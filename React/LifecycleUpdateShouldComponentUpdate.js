class Number extends React.Component {
	render() {
		return(
			<div className="number">{this.props.number}</div>
		);
	}
}

class EvenNumber extends React.Component {
	constructor(props) {
		super(props);
		
		console.log('1. constructor')
	}
	
	//"shouldComponentUpdate" is a way to check whether, based on the input passed into this component, whether this component should be updated and re-rendered (true or false)
	//For example, allows for a choice before re-rendering a complex component that takes so long that it freezes the browser window
	//This is also only called during the update phase, NOT when the component is first rendered
	shouldComponentUpdate(nextProps, nextState) {
		console.log("2. ShouldComponentUpdate", nextProps, nextState);
		return true; //Temporary for now
	}
	
	//Render method is also part of the update phase
	render() {
		console.log("3. render");
		
		return(
			<div className="evennumber">{this.props.number}</div>
		);
	}
	
	//Not as commonly used as shouldComponentUpdate - DOM has *not* been updated, but the state *has*
	//required to return either null or some kind of information you want preserved even after the component is updated
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("4. getSnapshotBeforeUpdate", prevProps, prevProps); //??? Not sure why they're here twice
		
		return prevProps.number;
	}
	
	//This goes with getSnapshotBeforeUpdate; it *must* be added alongside it, or React will throw an error
	//Called immediately after the component has been updated and re-rendered to the DOM
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('5. componentDidUpdate');
		console.log('The previous number was: ', snapshot);
	}
}

class StreamingNumbers extends React.Component {
	state = {
		index: 0
	}
	
	next = () => {
		this.setState(function(prevState) {
			return {
				index: prevState.index + 1
			}
		});
	}
	
	render() {
		var nextNumber = this.props.numbers[this.state.index];
		
		return(
			<div className="box">
				<EvenNumber number={nextNumber}/>
				<Number number={nextNumber}/>
				<button className="button" onClick={this.next}>Get Next</button>
			</div>
		)
	}
}

StreamingNumbers.defaultProps = {
	numbers: [3, 2, 5, 4, 11, 12, 9, 16, 13, 14, 12, 20, 19, 23, 26, 35, 29, 27, 1, 2, 45]
}

ReactDOM.render(<StreamingNumbers/>, document.getElementById("lifecycle-update-shoulder-component-update-phase"))