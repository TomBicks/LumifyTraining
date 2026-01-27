//The makers of the React library recommend that you use controlled components, as far as possible, to work with forms. However, there might be certain conditions where you're forced to use uncontrolled components. 
//Uncontrolled components are where the form elements manage their own data. That is, form data is handled by the DOM itself; you don't need to write an event handler for every state change or every input update that the user makes.You'll simply accept the input directly from the form element that has the actual value.

//Uncontrolled components are an advanced feature, uncommonly used, but still useful to know *how* to use
class HotelBookingForm extends React.Component {
	constructor(props) {
		super(props);
		
		//NOTE!! Usually, we avoid interacting with the DOM directly as much as possible; You'll prefer to work with React components
		//However, if necessary you can create and use Refs to access DOM nodes or React elements that have been created within the render method of a component
		//This is needed when you're working with uncontrolled components; form elements where React does not manage state
		this.nameRef = React.createRef();
		this.emailRef = React.createRef();
		this.nameOfHotelRef = React.createRef();
	}
	
	//When using uncontrolled components, we don't need to wire up event handlers for every edit the user makes in any of the form elements, because there is no React component state to update for changes.
	//However, we do need to handle the submission of the form, here using handleSubmit
	handleSubmit = (event) => {
		alert("Are you sure you want to proceed with the booking? " + this.nameOfHotelRef.current.value);
		
		console.log("Name submitted: " + this.nameRef.current.value);
		console.log("Email Id submitted: " + this.emailRef.current.value);
		console.log("Name of Hotel submitted: " + this.nameOfHotelRef.current.value);
		
		event.preventDefault();
	}
	
	//For each element, we set the ref, to get a reference to each of the DOM nodes
	render() {
		return(
			<form onSubmit={this.handleSubmit} className="contents">
				<div className="label">Name: </div>
				<input className="input" ref={this.nameRef}/>
				
				<div className="label">Email Id: </div>
				<input className="input" ref={this.emailRef}/>
				
				<div className="label">Name of Hotel:</div>
				<select ref={this.nameOfHotelRef} defaultValue="Comfortable Hotels">
					<option value="Fantastic Hotels">Fantastic Hotels</option>
					<option value="Wonderful Hotels">Wonderful Hotels</option>
					<option value="Comfortable Hotels">Comfortable Hotels</option>
					<option value="Pretentious Hotels">Pretentious Hotels</option>
				</select>
				
				<input className="button" type="submit" value="Submit"/>
			</form>
		);
	}
}

ReactDOM.render(<HotelBookingForm/>, document.getElementById("uncontrolled-components"));