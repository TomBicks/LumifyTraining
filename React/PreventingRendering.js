class Warning extends React.Component {
	//With this condition, the component will return nothing to render if props.warn is false
	render() {
		if(!this.props.warn) {
			return null;
		}
		
		return(
			<div className="comment">
				<span className="photo">
					<p>Warning Image</p>
				</span>
				<span className="message">
					Something wasn't right, you might need to debugger.
				</span>
			</div>
		);
	}
}

class Display extends React.Component {
	state = {
		warn: true
	}
	
	//Invert warn state
	toggle = () => {
		this.setState(function(prevState) {
			return {
				warn: !prevState.warn
			}
		});
	}
	
	//The button uses a ternary operator to decide whether to have the Hide or Show text; much quicker and simpler!
	render() {
		return(
			<div>
				<h1>Hello!</h1>
				<button className="button" onClick={this.toggle}>{this.state.warn ? 'Hide' : 'Show'}</button>
				<Warning warn={this.state.warn}/>
			</div>
		);
	}
}

ReactDOM.render(<Display/>, document.getElementById("preventing-rendering"));