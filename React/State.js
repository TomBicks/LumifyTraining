class Circle extends React.Component {
	constructor(props){
		super(props);

		//Thus, this is a stateful component, and van be accessed by all other functions of this component
		this.state = {
			color: 'green',
			backgroundColor : 'pink'
		};
	}

	render() {
		const cirStyle = {
			//Accesses the values of the state object
			color : this.state.color,
			backgroundColor : this.state.backgroundColor
		}

		return(
			<div className="circle" style={cirStyle}>Hello React developers!</div>
		);
	}
}

ReactDOM. render(<Circle/>, document.getElementById("react-state"))