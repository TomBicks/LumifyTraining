class StatusBox extends React.Component {
	constructor(props) {
		//Invokes the super class constructor as well; must do so when using ES6 classes
		super(props);
		
		this.state = {
			enabled: true,
			message: 'State is enabled'
		}
		
		//Binds a function to the current instance
		this.showMessage = this.showMessage.bind(this);
	}
	
	handleClick = (e) => {
		e.preventDefault();
		
		this.setState(state => ({
			enabled: !state.enabled
		}));
	}
	
	//This function is not using arrow notation, which means it's not associated with the current instance by default; we need to explicitly bind it before it can be used, as we did in the constructor
	showMessage() {
		if(this.state.enabled) {
			alert("Are you sure you want to disable this?")
			
			this.setState({
				message: 'State is disabled'
			});
		}
		else {
			alert("Are you sure you want to enable this?")
			
			this.setState({
				message: 'State is enabled'
			});
		}
	}
	
	//Render function should NEVER use the arrow function, as every call to render will then create a new function object, degrading performance massively
	render() {
		return(
			<div>
				<div className="box">{this.state.message}</div>
				<button className="button" 
						onClick={(e) => {
							//Passes the event to handleClick, then runs showMessage, all from the same onClick event
							this.handleClick(e);
							this.showMessage();
						}}>
					{this.state.enabled ? 'Disable' : 'Enable'}
				</button>
			</div>
		);
	}
}

ReactDOM.render(<StatusBox/>, document.getElementById("toggle-state"));