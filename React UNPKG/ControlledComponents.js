//Controlled components are components that contain form elements, such as input, text area and select
//These typically maintain their own state and update it based on user input

//When you sync up the state object with the internal data held in form elements and use React to control the state of the form, that is a controlled component
//You're controlling form elements using the React components' state; thus a controlled component

class EmailForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailValue: '',
		};
		
		//Bind the functions to this
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleEmailChange(e) {
		this.setState({emailValue: e.target.value});
	}
	
	handleSubmit(e) {
		console.log("Email address submitted: " + this.state.emailValue);
		
		alert("Here is the email address you submitted! " + this.state.emailValue);
		
		this.setState({emailValue: ""});
		
		e.preventDefault();
	}
	
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="label">Email Address:</div>
				<input className="input" type="text" value={this.state.emailValue} onChange={this.handleEmailChange}/>
				<input className="button" type="submit" value="Submit"/>
			</form>
		)
	}
};

ReactDOM.render(<EmailForm/>, document.getElementById("controlled-components"))