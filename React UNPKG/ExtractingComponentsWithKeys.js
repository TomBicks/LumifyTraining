//You want every item in your list to have a key, which is a permanent and unique property of that item.
//If there is some unique identifier for that item that you're going to display, that unique identifier should be used as a key.
//Thus, we create our own unique identifier, associated as key-pair combo within an object; within an object, it should also guaruntee it's unique, as it can't have two attributes with the same names
class Name extends React.Component {
	render() {
		return(
			<li /*key={this.props.id} KEY SHOULDN'T BE SPECIFIED HERE*/>{this.props.name.toUpperCase()}</li>
		);
	}
}

//If we try to set the key attribute in the li we return from within the Name render, we don't produce unique keys
//This is because it should be done within a higher-level component; thus, we specificy key *here*, rather than passing it over as a prop to be assigned to key there
//"The key attribute should be associated with the higher level component!"
class NamesList extends React.Component {
	render() {
		var listItems = Object.keys(this.props.names).map(
			(key, index) => <Name key={key} name={names[key]}/>
		);
		return(
			<ul className="names">{listItems}</ul>
		)
	}
}

const names = {
	'id1': 'Esther',
	'id2': 'Lily',
	'id3': 'Candace',
	'id4': 'Edward',
	'id5': 'Sidney'
};

ReactDOM.render(<NamesList names={names}/>, document.getElementById("extracting-components-with-keys"));