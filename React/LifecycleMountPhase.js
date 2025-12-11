class Employees extends React.Component {
	constructor(props) {
		super(props);
		
		console.log('1. constructor', props.initialNames);
		
		//Good practise to, instead of hard-coding E.g. names to display, they're passed in via props
		this.state = {
			names: props.initialNames,
			mounted: false
		};
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



ReactDOM.render(, document.getElementById("lifecycle-mount-phase"))