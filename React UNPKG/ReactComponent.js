class TestReactComponent extends React.Component {
	render() {
		return (
			<div>
				<h2 className = "ReactComponent">Hello world from a component!</h2>
			</div>
		);
	}
}

class FruitList extends React.Component {
	render() {
		const orange_str = "Orange";
		const apple_str = "Apple";
		const banana_str = "Banana";
		
		var items = ["Jackfruit", "Mango", "Strawberry", "Grapes", "Peach"];
		var randomItem = items[Math.floor(Math.random() * items.length)];
		//console.log(`Random fruit is ${randomItem}`)
		
		const fruit_list = (
			<div>
				<h1 key="header" className="myFruit">Welcome to the world of React!</h1>
				<h2 key="clock">Current time: {new Date().toLocaleTimeString()}</h2>
				<ul>
					<li key="O-key">{orange_str}</li>
					<li key="A-key">{apple_str}</li>
					<li key="B-key">{banana_str}</li>
					<li key="R-key">{randomItem}</li>
				</ul>
			</div>
		);
		
		return fruit_list;
	}
}

ReactDOM.render(<TestReactComponent/>, document.getElementById("react-component"));

function on_tick() {
	ReactDOM.render(<FruitList/>, document.getElementById("fruit-list"));
}

setInterval(on_tick, 2000);