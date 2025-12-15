//Using context, we can avoid having to messily pass many of the same data through props; context allows this data to be shared to many components
//Thus, this example does away with passing in the theme as a prop, and instead relying on context solely

//NOTE!! context is like global values; use it sparingly, as relying on it too much can result in components that are not coded to be all that reusable
const ThemeContext = React.createContext('green');

class ThemedBorderBackground extends React.Component {
	render() {
		return(
			<div className = {'bt bt-' + this.context + ' bg-' + this.context}>{this.props.children}</div>
		);
	}
}
//In order to be able to access the context from within a React component (accessing using 'this.context'), need to set the context type property for this component
ThemedBorderBackground.contextType = ThemeContext;

class ThemedButton extends React.Component {
	render() {
		return(
			<div>
				<button className = {'button button-' + this.context}>{this.props.label}</button>
			</div>
		);
	}
}
ThemedButton.contextType = ThemeContext;

class ThemedDialog extends React.Component {
	render() {
		return(
			<div className = {'dialog dialog-' + this.context}>
				<h3 className = "dialog-title">{this.props.title}</h3>
				<div className="dialog-message">{this.props.message}</div>
				<br/>
				
				<ThemedButton theme={this.context} label="Ok"></ThemedButton>
			</div>
		);
	}
}
ThemedDialog.contextType = ThemeContext;

//The ThemeContext.Provider allows you to provide a context value to the children of this element, overriding for example the const ThemeContext set up earlier at the top of the page
//It can also support nested elements, even within another ThemeContext.Provider
ReactDOM.render(<div>
					<ThemeContext.Provider value="orange">
						<ThemedBorderBackground>Hello!</ThemedBorderBackground>
						<ThemedButton label="Click me!"></ThemedButton>
						<ThemeContext.Provider value="green">
							<ThemedDialog title="Dialog title here" message="Dialog message here"></ThemedDialog>
						</ThemeContext.Provider>
					</ThemeContext.Provider>
				</div>, document.getElementById("global-properties-with-context"));