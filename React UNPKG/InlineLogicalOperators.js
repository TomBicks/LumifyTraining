class Warning extends React.Component {
	render() {
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

class Ok extends React.Component {
	render() {
		return(
			<div className="comment">
				<span className="photo">
					<p>Ok Image</p>
				</span>
				<span className="message">
					Everything looks good, please carry on!
				</span>
			</div>
		);
	}
}

//Uses an inline logical operator to display an Ok or Error message based on warning prop
//What this means is if that in brackets is true, Warning will be rendered; if false, Ok will be rendered
class Display extends React.Component {
	render() {
		return(
			<div>
				<h1>Hello!</h1>
				{ (this.props.warning && <Warning/>) || (<Ok/>) }
			</div>
		)
	}
}

//If warning is set to true, warning message will be displayed; otherwise, it will display the ok message
ReactDOM.render(<Display warning={true}/>, document.getElementById("inline-logical-operators"));