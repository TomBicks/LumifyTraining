//Once again, another version of the HotelBookingForm

class HotelBookingForm extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			nameValue: '',
			emailValue: '',
			phoneValue: 0,
			nameOfHotelValue: 'Fantastic Hotels',
		};
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
		alert("Are you sure you want to proceed with this booking? " + this.state.nameOfHotelValue);
		
		console.log("Name submitted: " + this.state.nameValue);
		console.log("Email Id submitted: " + this.state.emailValue);
		console.log("Phone Number submitted: " + this.state.phoneValue);
		console.log("Name of Hotel submitted: " + this.state.nameOfHotelValue);
		
		this.setState({
			nameValue: '',
			emailValue: '',
			phoneValue: 0,
			nameOfHotelValue: 'Fantastic Hotels'
		});
		
		event.preventDefault();
	}
	
	render() {
		return(
			<form className="contents" onSubmit={this.handleSubmit}>
				<TextInput label={"Name :"} name="nameValue" value={this.state.nameValue} handleInputChange={this.handleInputChange}/>
				<TextInput label={"Email :"} name="emailValue" value={this.state.emailValue} handleInputChange={this.handleInputChange}/>
				
				<NumberInput label={"Phone Number :"} name="phoneValue" value={this.state.phoneValue} handleInputChange={this.handleInputChange}/>
				
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
	handleInputChange = (event) => {
		this.props.handleInputChange(event)
	}
	
	render() {
		return(
			<div>
				<div className="label">{this.props.label}</div>
				<input className="input" type="text" name={this.props.name} value={this.props.value} onChange={this.handleInputChange}/>
			</div>
		);
	}
}

class NumberInput extends React.Component {
	handleInputChange = (event) => {
		this.props.handleInputChange(event)
	}
	
	render() {
		return(
			<div>
				<div className="label">{this.props.label}</div>
				<input className="input" type="number" name={this.props.name} value={this.props.value} onChange={this.handleInputChange}/>
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

ReactDOM.render(<HotelBookingForm/>, document.getElementById('form-setup'));