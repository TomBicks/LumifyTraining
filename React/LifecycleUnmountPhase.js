class EmployeeList extends React.Component {
	constructor(props) {
		super(props);
		
		console.log('1. constructor', props.initialNames);
		
		
		//Best practise; lift state up to the highest level possible
		//Have state in higher-level components and pass that state information down to lower-level components using props
		this.state = {
			names: props.initialNames
		};
	}
	
	deleteRandom = () => {
		var index = Math.floor(Math.random() * this.state.names.length);
		
		this.setState(function(prevState) {
			//Best practise to make copies of the list to change, make changes to the copy, then return the changed copied list
			//NOTE!! If the list is very long, maybe rethink this strategy
			var names = prevState.names.concat();
			
			names.splice(index, 1); //Removes a name at index
			
			return {
				names: names
			}
		});
	}
	
	render() {
		var index = 0;
		return (
			<div>
				{this.state.names.map(
					(name) => <Employee 	key={index++} 
											name={name} 
											//NOTE!! This is how to pass functions from a higher-level component to a lower-level component as part of the props
											deleteRandom={this.deleteRandom}/>
				)}
				<button className="button" onClick={this.deleteRandom}>Delete random employee</button>
			</div>
		);
	}
}

class Employee extends React.Component {
	constructor(props) {
		super(props);
		console.log('1. constructor: ' + this.props.name);
	}
	
	render() {
		console.log('2. render: ' + this.props.name);
		
		return(
			<div>
				<div className="employee">{this.props.name}</div>
			</div>
		)
	}
	
	componentDidMount() {
		console.log('3. componentDidMount', this.props.name);
	}
	
	//Sometimes will show the element removed, but keeps a different element and renames it to be the element that was deleted
	//I admittedly don't understand it well
	componentWillUnmount() {
		console.log('4. componentDidUnmount', this.props.name);
	}
}

ReactDOM.render(<EmployeeList initialNames={['Doug','Ron', 'Kim', 'Adam']}/>, document.getElementById("lifecycle-unmount-phase"))