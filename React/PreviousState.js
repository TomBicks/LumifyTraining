class Counter extends React.Component {
	state = {
		count: 0
	}
	
	//Again, by using arrow notation, we can refer to "this" within the function
	//"prevState" allows us to access the previous state of the object, before setState replaces it
	//NOTE!! it's also good practise to do this, rather than access the state directly for previous state
	incrementCount = () => {
		this.setState((prevState, props) => ({
			count: prevState.count + props.increment //Increment is passed via props
		}));
	}
	
	render() {
		//Invokves setTimeout function to invoke incrementCount function every 1.5 seconds
		setTimeout(this.incrementCount, 1500)
		
		return (
			<div>
				<div className="circle">{this.state.count}</div>
			</div>
		);
	}
}

ReactDOM.render(<Counter increment={0.5}/>, document.getElementById("react-previous-state"));