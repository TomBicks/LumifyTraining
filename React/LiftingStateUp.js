//"Where should state be stored?"
//State should be high up as possible in the component tree, allowing to sycnhronize the state across multiple components within the app

//Because in the previous example each NetWorthInput held its own local state, they were not sycnhronized

const currencyNames = {
	d: 'Dollars',
	r: 'Rupees'
}

function toDollars(rupees) {
	return (rupees * 0.014);
}

function toRupees(dollars) {
	return (dollars * 70.95);
}

function tryConvert(money, convert) {
	const input = parseFloat(money);
	
	if(Number.isNaN(input)) {
		return '';
	}
	
	const output = convert(input);
	const rounded = Math.round(output * 100) / 100;
	
	return rounded.toString();
}

function Millionaire(props) {
	if(props.dollars >= 1000000) {
		return <p className="millionaire">A dollar millionare!</p>;
	}
	return <p className="not-millionaire">Not yet a dollar millionare...</p>;
}

class NetWorthInput extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			local_networth: 0
		}
	}
	
	handleChange = (e) => {
		this.props.onNetWorthChange(e.target.value);
	}
	
	render() {
		const networth = this.props.networth;
		const currency = this.props.currency;
		
		return(
			<fieldset className="networth">
				<legend>Enter net worth in {currencyNames[currency]}:</legend>
				<input className="input" defaultValue={networth} onChange={this.handleChange}/>
			</fieldset>
		);
	}
}

class MillionaireCalculator extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			networth: '',
			currency: 'd'
		};
	}
	
	handleDollarChange = (networth) => {
		this.setState({
			currency: 'd',
			networth: networth
		});
	}
	
	handleRupeesChange = (networth) => {
		this.setState({
			currency: 'r',
			networth: networth
		});
	}
	
	render() {
		const networth = this.state.networth;
		const currency = this.state.currency;

		const dollars = currency === 'r' ? tryConvert(networth, toDollars) : networth;
		const rupees = currency === 'd' ? tryConvert(networth, toRupees) : networth;
		
		return(
			<div className="contents">
				<NetWorthInput currency={'d'} networth={dollars} onNetWorthChange={this.handleDollarChange}/>
				<NetWorthInput currency={'r'} networth={rupees} onNetWorthChange={this.handleRupeesChange}/>
				<Millionaire dollars={parseFloat(dollars)}/>
			</div>
		)
	}
}

ReactDOM.render(<MillionaireCalculator/>, document.getElementById("lifting-state-up"));