import React from 'react';
import breadEmpty from './assets/bread-empty.jpg';

class SelectedBread extends React.Component {
    //Check if the image source is valid; else, use default empty image
    //...

    render() {
        if(this.selectedBread != "") {
            return(
                //Does this need to be table and table rows istead?
                <div className="breadContainer" onClick={this.selectBread}>
                    <img className="breadImg" src={this.props.imgSrc}/>
                    <h3>{this.props.name}</h3>
                    <p className="breadDesc">{this.props.desc}</p>
                </div>
            );
        }
    }
}

/*Bread.defaultProps = {
    imgSrc : breadEmpty //NOTE!! Doesn't work if surrounded in curly braces
}*/

export default SelectedBread;