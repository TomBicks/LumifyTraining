function Todo(props) {
	return <li>TODO: {props.item}</li>
}

function List(props) {
	var list = ['clear desk', 'complete email', 'shopping', 'exercise'];
	
	return(
		<ul>{list.map((todo) => <Todo key={todo} item={todo}/>)}</ul>
	);
}

ReactDOM.render(<List/>, document.getElementById("expression-props"));