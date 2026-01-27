//Inheritance is possible, but not preferred within React
//Composition is better, but that will be in the next example
//This is just to show how inheritance *might* be done if used

class Message extends React.Component {
	constructor(props) {
		super(props);
		this.className = 'border plain-message';
	}
	
	render() {
		return(
			<div className={this.className}>{this.props.message}</div>
		);
	}
}

//Largely identical to Message class; inheritance could save on code redundancy
//Instead, we can extend it from Message, rather than from React.Component
class SuccessMessage extends Message {
	constructor(props) {
		super(props);
		this.className = this.className + ' success-message'; //Without this space ahead of 'success', this would fail, as the class names would be smushed together, resulting in 'plain-messagesuccess-message'
	}
	
	render() {
		return(
		<div>{super.render()}</div>
		);
	}
}


//What SuccessMessage looked like originally
/*class SuccessMessage extends React.Component {
	constructor(props) {
		super(props);
		this.className = 'border success-message';
	}
	
	render() {
		return(
			<div className={this.className}>{this.props.message}</div>
		);
	}
}*/

class FailureMessage extends Message {
	constructor(props) {
		super(props);
		this.className = this.className + ' error-message'; //Without this space ahead of 'error', this would fail, as the class names would be smushed together, resulting in 'plain-messageerror-message'
	}
	
	render() {
		return(
		<div>{super.render()}</div>
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

ReactDOM.render(<Dialog/>, document.getElementById("inheritance"));