//"props.children" is a special attribute; doesn't need to know what its children are ahead of time, this value will always point to them

const RedText = (props) => {
	return <div className="red">{props.children}</div>
}

const GreenText = (props) => {
	return <div className="green">{props.children}</div>
}

ReactDOM.render(<RedText>Hello</RedText>, document.getElementById("outer1"));

ReactDOM.render(
	<GreenText>
		Some more nested elements:
		<span><u>This</u></span>
		&amp;
		<span><b><i>That</i></b></span>
	</GreenText>, 
	document.getElementById("outer2"));
	
ReactDOM.render(
	<RedText>
		Yet more Nested Elements: 
		<div>
			Div with
			<span><u>This</u></span>
			&amp;
			<span><b><i>That</i></b></span>
			inside
		</div>
	</RedText>, document.getElementById("outer3"));