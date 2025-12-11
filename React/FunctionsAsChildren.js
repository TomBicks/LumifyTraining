var names = ['Alice', 'Bob', 'Charlie', 'Darwin', 'Emily', 'Fiona', 'Garrett'];

function Names(props) {
	var namesList = [];
	
	for(var i=0; i <= props.upto; i++) {
		namesList.push(props.children(i, names)); //Here is where props.children is invoked, invoking the children as a function
	}
	
	return <div>{namesList}</div>
}

function NamesList(props) {
	return(
		<Names upto={props.upto}>
			{(index, names) => <div key={index}> {names[index]} </div>}
		</Names>
	)
}

ReactDOM.render(<NamesList upto={3}/>, document.getElementById("functions-as-children"));