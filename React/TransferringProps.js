class Company extends React.Component {
	render() {
		return(
			<div className = 'company'>
				<div>Company: {this.props.companyName}</div>
				<Employee employeeName={this.props.employeeName} designation={this.props.designation} />
				<Activities committees={this.props.committees} forums={this.props.forums} />
			</div>
		);
	}
}

class Employee extends React.Component {
	render() {
		return(
			<div className = 'employee'>
				<div>Name: {this.props.employeeName}</div>
				<div>Designation: {this.props.designation}</div>
			</div>
		);
	}
}

class Activities extends React.Component {
	render() {
		return (
			<div className = 'activities'>
				<div>Committees: {this.props.committees}</div>
				<div>Forums: {this.props.forums}</div>
			</div>
		);
	}
}

ReactDOM.render(<Company companyName = "Skillsoft"
						employeeName = "John"
						designation = "Analvst"
						committees = "Performance review, Data insights"
						forums = "StackOverflow, DataHelper"/>, document.getElementById("transfer-props"))