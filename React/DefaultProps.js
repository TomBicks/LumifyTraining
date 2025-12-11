class Student extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className='student'>
				<div>Student ID: {this.props.id}</div>
				<div>Name: {this.props.studentName}</div>
				<div>Enrolled: {this.props.enrolled ? 'yes' : 'no'}</div>
			</div>
		);
	}
};

//"defaultProps" is a special attribute for ES6 classes that React looks for to understand the default value
Student.defaultProps = {
	id: Math.floor(Math.random() * 100000000),
	enrolled: true
};

ReactDOM.render(<Student id="12345678" studentName="John Smith" enrolled={false}/>, document.getElementById("default-prop1"));

ReactDOM.render(<Student/>, document.getElementById("default-prop2"));