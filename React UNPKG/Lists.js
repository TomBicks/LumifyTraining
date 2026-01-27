class NamesList extends React.Component {
	//Without a unique key for each sibling element, we break best practice for React; without this, React cannot identify one li tag from another, meaning it cannot determine which to re-render and be best performant
	//We can't rely on user provided info to be unique; for example, we can't use the names of the array, because another array may have duplicate values
	//A possible method is to associate an index with each li tag; we can expand the map function to accomadate this; however, using the index is not a robust solution
	//DO NOT use index as keys if the list can be modified by the user; this exposes the fragility of using index as keys, able to even modify incorrect tags, and produce very difficult-to-track issues
	//NOTE!! better solution in next part!
	render() {
		var listItems = this.props.names.map(
			(name, index) => <li key={index}>{name.toUpperCase()}</li>
		);
		
		return(
			<ul className="names">{listItems}</ul>
		);
	}
}

const names = ['Esther', 'Lily', 'Candace', 'Edward', 'Sidney'];

ReactDOM.render(<NamesList names={names}/>, document.getElementById("lists"));