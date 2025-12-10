class Greeting extends React.Component {
	render() {
		var casual = Math.floor(Math.random() * 2) % 2 == 0;
		
		if(casual) {
			return <Hi/>
		}
		else {
			return <Hello/>
		}
	}
}

function Hello() {
	var now = new Date();
	return (
		<div className="pink">Hello! The current year is {now.getFullYear()}</div>
	);
}

function Hi() {
	var now = new Date();
	
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return (
		<div className="blue">Hi! Today is {days[now.getDay()]}</div>
	);
}

ReactDOM.render(<Greeting/>, document.getElementById("function-components"));
