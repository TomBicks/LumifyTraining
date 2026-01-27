//File Input is when you choose a file from your device to upload
//NOTE!! File Inputs *don't* work as controlled components; its value can *only* be set by the user, and thus is an uncontrolled component

class FileInputs extends React.Component {
	constructor(props) {
		super(props);
		
		this.fileInputRef = React.createRef();
	}
	
	//NOTE!! In a real application, with server-side code running, this is where you'd make a POST request to the server to upload the file that was selected using this file dialogue, using an AJAX request
	handleSubmit = (event) => {
		event.preventDefault();
		
		var filename = this.fileInputRef.current.files[0].name;
		
		alert(`Are you sure you want to upload - ${filename} file?`);
		
		console.log('File uploaded: ', filename);
	}
	
	render() {
		return(
			<form onSubmit={this.handleSubmit} className="contents">
				<label>
					Select file to upload:<br/><br/>
					<input type="file" ref={this.fileInputRef}/>
				</label>
				<br/>
				<button className="button" type="submit">Upload</button>
			</form>
		)
	}
}

ReactDOM.render(<FileInputs/>, document.getElementById("file-inputs"));