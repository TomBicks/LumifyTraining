class Employee extends React.Component {
	render() {
		return(
			<div className="employee">
				<span className="name">{this.props.firstname}</span>
				<span className="name">{this.props.lastname}</span>
			</div>
		);
	}
}

class Company extends React.Component {
	get_name () {
		return {'firstname': 'Alice', 'lastname': 'Chang'}
	}
	
	render() {
		return (
			<div className = "company">
				<Employee firstname = "John" lastname = "Rivers" />
				<Employee firstname = {"Emily"} lastname = {"Hill"} />
				<Employee firstname = {"Ni" + "na"} lastname = {"Mat" + "thew"} />
				<Employee firstname = {this.get_name().firstname} lastname = {this.get_name().lastname} />
			</div>
		);
	}
}

ReactDOM.render(<Company/>, document.getElementById("nested-props"));