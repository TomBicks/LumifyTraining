class CustomDialog extends React.Component {
	render() {
		var color = "green";
		console.log(this.props.dialogType);
		
		if(this.props.dialogType == "warning") {
			color = "orange";
		} else if(this.props.dialogType == "error") {
			color = "red";
		}
		
		console.log(color);
		
		return(
			<div className = {'bt bt-' + color + ' bg-' + color}>
				<h3 className = "dialog-title">{this.props.title}</h3>
				<div className="dialog-message">{this.props.message}</div>
				<br/>
			</div>
		);
	}
}

class OKDialog extends React.Component {
	render() {
		return(
			<div>
				<CustomDialog dialogType="ok" title="Success" message="Your operation was completely successful"></CustomDialog>
			</div>
		)
	}
}

class WarningDialog extends React.Component {
	render() {
		return(
			<div>
				<CustomDialog dialogType="warning" title="Warning!" message="Your operation was completed but there were a few errors"></CustomDialog>
			</div>
		)
	}
}

class ErrorDialog extends React.Component {
	render() {
		return(
			<div>
				<CustomDialog dialogType="error" title="Error!" message="Your operation failed with errors"></CustomDialog>
			</div>
		)
	}
}

ReactDOM.render(<div>
					<OKDialog/>
					<WarningDialog/>
					<ErrorDialog/>
				</div>, document.getElementById("composition-for-specialisation"));