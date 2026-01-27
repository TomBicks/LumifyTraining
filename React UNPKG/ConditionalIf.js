function Circle(props) {
	const cirStyle = {
		backgroundColor: props.color
	};
	
	return <div className="circle" style={cirStyle}></div>
}

class ToggleCircle extends React.Component {
	state = {
		go: true
	}
	
	//Invert go state
	toggle = () => {
		this.setState(function(prevState) {
			return {
				go: !prevState.go
			}
		});
	}
	
	//Conditional rendering by only rendering based on the results of the if statement; if go is true or not
	//In this example, renders a green circle if true, or a different red one if false
	//Also has to render two different buttons though...but they do have two different texts
	render() {
		if(this.state.go) {
			return(
				<div>
					<Circle color='green'/>
					<button className="button" onClick={this.toggle}>Stop</button>
				</div>
			);
		}
		return(
			<div>
				<Circle color='red'/>
				<button className="button" onClick={this.toggle}>Go</button>
			</div>
		);
	}
}

ReactDOM.render(<ToggleCircle/>, document.getElementById("conditional-if"));