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
				<div>Campus: {this.props.campus}</div>
				<div>Major: {this.props.major}</div>
				<div>Courses: {this.props.courses}</div>
			</div>
		);
	}
};

//"propTypes" is a special attribute assigned to a JS object, which React looks for, to perform type checking/validation
Student.propTypes = {
	id: PropTypes.number,
	studentName: PropTypes.string,
	enrolled: PropTypes.bool,
	campus: PropTypes.oneOf(['North', 'South']), //The prop can only be one of two values
	major: PropTypes.string.isRequired, //Not an optional prop
	
	//Allows for custom rules to be specified (such as here, throwing an error if courses is Statistics or Philosophy)
	courses(prop, propName) {
		var propValue = prop[propName];
		
		if(propValue == "Statistics" || propValue == "Philosophy") {
			throw Error("Sorry, this course is not offered currently");
		}
	}
}

//"defaultProps" is a special attribute for ES6 classes that React looks for to understand the default value
Student.defaultProps = {
	id: Math.floor(Math.random() * 100000000),
	enrolled: true
};

//Without major being specified, this will throw an error
ReactDOM.render(<Student campus="North" major="Computer Science"/>, document.getElementById("validate-prop"));