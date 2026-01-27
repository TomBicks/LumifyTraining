function Circle(props) {
	const cirStyle = {
		backgroundColor: props.color
	};
	
	return <div className="circle" style={cirStyle}></div>
}

function PurpleCircle(props) {
	return <Circle color="purple"></Circle>
}

function GreenCircle(props) {
	return <Circle color="green"></Circle>
}

function RedCircle(props) {
	return <Circle color="red"></Circle>
}

function BlackCircle(props) {
	return <Circle color="black"></Circle>
}

//Dynamically sets color by selecting a circle based on index passed in
function RandomCircle(props) {
	const Circles = [PurpleCircle, GreenCircle, RedCircle, BlackCircle];
	
	const SomeCircle = Circles[props.index];
	
	return <SomeCircle/>;
}

ReactDOM.render(<Circle color="pink"/>, document.getElementById('react-dynamic-prop1'));

ReactDOM.render(<PurpleCircle />, document.getElementById('react-dynamic-prop2'));

ReactDOM.render(<GreenCircle />, document.getElementById('react-dynamic-prop3'));

ReactDOM.render(<RedCircle />, document.getElementById('react-dynamic-prop4'));

ReactDOM.render(<BlackCircle />, document.getElementById('react-dynamic-prop5'));

ReactDOM.render(<RandomCircle index={Math.floor(Math.random() * 4)}/>, document.getElementById('react-dynamic-prop6'));