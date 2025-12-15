//"Where should state be stored?"
//State should be high up as possible in the component tree, allowing to sycnhronize the state across multiple components within the app

//"Acts as an enum" - enumerator; setting currency to 'd' will thus return dollars
const currencyNames = {
	d: 'Dollars',
	r: 'Rupees'
}

function Millionaire(props) {
	if(props.networth >= 1000000) {
		return <p className="millionaire">A millionare!</p>;
	}
	return <p className="not-millionaire">Not yet a millionare...</p>;
}

class NetWorthInput extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			local_networth: 0
		}
	}
	
	//Parses whether the entered value is a valid floating point value; otherwise, returns 0
	handleChange = (e) => {
		this.setState({
			local_networth: parseFloat(e.target.value) || 0
		});
	}
	
	render() {
		const currency = this.props.currency;
		
		return(
			<fieldset className="networth">
				<legend>Enter net worth in {currencyNames[currency]}:</legend>
				<input className="input" defaultValue={this.state.local_networth} onChange={this.handleChange}/>
				<Millionaire networth={this.state.local_networth}/>
			</fieldset>
		);
	}
}

class MillionaireCalculator extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className="contents">
				<NetWorthInput currency={'d'}/>
				<NetWorthInput currency={'r'}/>
			</div>
		)
	}
}

ReactDOM.render(<MillionaireCalculator/>, document.getElementById("local-state"));