class Employees extends React.Component {
	constructor(props) {
		super(props);
		
		console.log('1. constructor', props.initialNames);
		
		//Good practise to, instead of hard-coding E.g. names to display, they're passed in via props
		this.state = {
			names: props.initialNames,
			mounted: false
		};
		
		//Triggers when component has been mounted
		window.addEventListener('mountedEvent', function() {
			console.log('Invoked when component has mounted');
			this.setState((prevState) => {
				var names = prevState.names.concat();
				
				names.push('Imogene');
				names.push('Yvette');
				names.push('Chavonda');
				names.push('Gregory');
				names.push('Marvin');
				
				return { names: names };
			});
			
			//Using multiple of these doesn't really affect performance, due to React's performance saving measures, such as collating state updates to occur asynchronously
			this.setState({ mounted: true })
		}.bind(this)); //Binds the function to "this", so that we can sue "this.setState"
	}
	
	render() {
		//There are more special methods between constructor and render, but are not touched upon yet by this study
		console.log('2. render');
		
		//NOTE!! It's not good practise to have the index serve as the key for the elements displayed in the form of a list; the index is fragile, and subtle bugs may arise. But it server for this demo for now; just don't do it in production
		var index = 0;
		return (
			<div>
				<div>
					{this.state.names.map(
						(name) =>
							<div className="employee" key={index++}>{name}</div>
						)
					}
				</div>
				<div>{this.state.mounted ? "Component mounted" : "Component not yet mounted"}</div>
			</div>
		);
	}
	
	componentDidMount() {
		console.log('3. componentDidMount');
		
		setTimeout(function() {
			window.dispatchEvent(new Event('mountedEvent'));
		}, 5000);
	}
}



ReactDOM.render(<Employees initialNames={['Dean', 'Raj']}/>, document.getElementById("lifecycle-mount-phase"))