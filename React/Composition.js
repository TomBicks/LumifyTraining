//Composition is the preferred method for React over Inheritance for code reuse

class Message extends React.Component {
	render() {
		return(
			<div className={'border plain-message ' + this.props.cssClass}>{this.props.message}</div>
		);
	}
}

//We reuse the Message code, but instead of inheritance as a design strategy, we use composition
//Here, we use the spread operator to pass all props further along to the Message component being rendered
class SuccessMessage extends React.Component {
	render() {
		return(
			<Message {...this.props} cssClass='success-message'></Message>
		);
	}
}

class FailureMessage extends React.Component {
	render() {
		return(
			<Message {...this.props} cssClass='error-message'></Message>
		);
	}
}

class Dialog extends React.Component {
	render() {
		return(
			<div>
				<Message message="A plain message"></Message>
				<SuccessMessage message="A success message"></SuccessMessage>
				<FailureMessage message="An error message"></FailureMessage>
			</div>
		);
	}
}

ReactDOM.render(<Dialog/>, document.getElementById("composition"));