//Once again, another version of the HotelBookingForm
//Main take here is its good practise to catch invalid submissions on the client-side, before they're even submitted to the server for validation. For example, checking if a email address has an '@' symbol, barring submission if it doesn't

class HotelBookingForm extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			nameValue: '',
			emailValue: '',
			nameOfHotelValue: 'Fantastic Hotels',
		};
		
		//Assume these inputs contain an error, unless *explicitly* told otherwise!
		this.errors = {
			name: true,
			email: true
		}
	}
	
	//If name is empty or less than 5 characters, return error and false
	validateName = (name) => {
		if(!name || name.length < 5) {
			this.errors.name = true;
			return false;
		}
		
		this.errors.name = false;
		return true;
	}
	
	//Checks email against a regular expression for a valid email; if doesn't match the pattern, return error and false
	validateEmail = (email) => {
		if(!/.+@.+\..+/.test(email)) {
			this.errors.email = true;
			return false;
		}
		
		this.errors.email = false;
		return true;
	}
	
	handleInputChange = (event) => {
		const name = event.target.name;
		var value = event.target.value;
		console.log("Event name: " + name + ", Event value: " + value);
		
		if(name == 'nameValue') {
			value = value.toUpperCase();
		}
		
		//Set state value based on the name returned from an input
		this.setState({[name]: value});
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		
		if(this.errors.email) {
			alert("Please enter a valid email address");
			return; //Exit the code block early
		} else if(this.errors.name) {
			alert("Please enter a name having a minimum of 5 characters");
			return; //Exit the code block early
		}
		
		alert("Are you sure you want to proceed with this booking? " + this.state.nameOfHotelValue);
		
		console.log("Name submitted: " + this.state.nameValue);
		console.log("Email Id submitted: " + this.state.emailValue);
		console.log("Name of Hotel submitted: " + this.state.nameOfHotelValue);
		
		this.setState({
			nameValue: '',
			emailValue: '',
			nameOfHotelValue: 'Fantastic Hotels'
		});
	}
	
	//By passing along the validation functions, the lower-level components don't actually need to know how to validate things; we provide that from on high
	render() {
		return(
			<form className="contents" onSubmit={this.handleSubmit}>
				<TextInput label={"Name :"} name="nameValue" value={this.state.nameValue} handleInputChange={this.handleInputChange} validate={this.validateName}/>
				<TextInput label={"Email :"} name="emailValue" value={this.state.emailValue} handleInputChange={this.handleInputChange} validate={this.validateEmail}/>
				
				<SelectInput label={"Name of Hotel: "} name="nameOfHotelValue" value={this.state.nameOfHotelValue} options={this.props.hotelNamesOptions} handleInputChange={this.handleInputChange}/>
				
				<input className="button" type="submit" value="Submit"/>
			</form>
		);
	}
}

//A list of options of hotels to choose from, passed via default props of HotelBookingForm to the SelectInput
HotelBookingForm.defaultProps = {
	hotelNamesOptions: [
		"Fantastic Hotels",
		"Wonderful Hotels",
		"Comfortable Hotels",
		"Pretentious Hotels"
	]
};

class TextInput extends React.Component {
	//NOTE!! When a higher-level component indicates this component has an error, the constructor block is responsible for displaying an appropriate error message
	constructor(props) {
		super(props);
		this.state = {
			errorMessage: ''
		};
	}
	
	handleInputChange = (event) => {
		var errorMessage = '';
		
		if(!this.props.validate(event.target.value)) {
			errorMessage = '* Invalid';
		}
		
		this.props.handleInputChange(event);
		
		//Because this is now a stateful component, we need to start using setState to re-render it
		this.setState({errorMessage: errorMessage});
	}
	
	render() {
		return(
			<div>
				<div className="label">{this.props.label}</div>
				<input className="input" type="text" name={this.props.name} value={this.props.value} onChange={this.handleInputChange}/>
				
				<ErrorMessage message={this.state.errorMessage}/>
			</div>
		);
	}
}

//Returns an option for each hotal name passed via this.props.options, each mapped to option elements
class SelectInput extends React.Component {
	handleInputChange = (event) => {
		this.props.handleInputChange(event)
	}
	
	render() {
		return(
			<div>
				<div className="label">{this.props.label}</div>
				<select value={this.props.value} name={this.props.name} onChange={this.handleInputChange}>
					{
						this.props.options.map(
							(option) => <option key={option} value={option}>{option}</option>
						)
					}
				</select>
			</div>
		);
	}
}

//Only responsible for displaying an error message in a span element
class ErrorMessage extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<span className="error">{this.props.message}</span>
		)
	}
}


ReactDOM.render(<HotelBookingForm/>, document.getElementById('form-validation'));