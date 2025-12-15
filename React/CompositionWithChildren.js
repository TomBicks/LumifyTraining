//This is a component that allows me to customize the background color as well asthe border for any children components nested within this component.
//CustomBorderBackground extends the base React.Component class and within the render function, it simply applies some css styles to its children.
//This component here allows us to customize the border for any child component, we can specify a certain color for the border using this.props.color, the color property is passed into this component.

//What this is basically doing is, we have styles such as for bt-green or bg-red, and we can pass along the color "red" to this to wrap it in a red border

class CustomBorderBackground extends React.Component {
	render() {
		return(
			<div className={'bt bt-' + this.props.color + ' bg-' + this.props.color}>
				{this.props.children}
			</div>
		);
	}
}

class Greeting extends React.Component {
	render() {
		return(
			<div>
				<CustomBorderBackground color="green">
					<h1 className = 'greeting-title'>Good morning!</h1>
					<i className = 'greeting-message'>Have a great day!</i>
				</CustomBorderBackground>
			</div>
		);
	}
}

class EmailForm extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			emailValue: ''
		};
	}
	
	handleEmailChange = (e) => {
		this.setState({emailValue: e.target.value});
	}
	
	handleSubmit = (e) => {
		console.log("Email address submitted: " + this.state.emailValue);
		
		this.setState({emailValue: ''});
		
		e.preventDefault();
	}
	
	render() {
		return(
			<CustomBorderBackground color="red">
				<form onSubmit={this.handleSubmit}>
					<div className="label">Email Address:</div>
					<input className="input" type="text" value={this.state.emailValue} onChange={this.handleEmailChange}/>
					<input className="button" type="submit" value="Submit"/>
				</form>
			</CustomBorderBackground>
		)
	}
}

ReactDOM.render(<div>
					<Greeting/>
					<br/>
					<EmailForm/>
				</div>, document.getElementById("composition-with-children"));