class PropGreeting extends React.Component {
	render() {
		return(
			<div className = "prop-class">
				<h2>{this.props.message}</h2>
			</div>
		);
	}
}

//Having any non-letter character at the end of the message causes the whole line after to be a string, not just in quotes
//Compiler still recognises it thankfully; may just be a Notepadd++ graphical issue
ReactDOM.render(<PropGreeting message = "Hello React Developer!"/>, document.getElementById("react-prop1"));
ReactDOM.render(<PropGreeting message = "This is a different message, but with the same component! The power of props!"/>, document.getElementById("react-prop2"));
