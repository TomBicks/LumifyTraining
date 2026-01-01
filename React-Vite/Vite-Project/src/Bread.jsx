import React from 'react';
import viteLogo from '/vite.svg';
//import viteLogo from '/assets/bread-empty.jpg';
import breadEmpty from './assets/bread-empty.jpg';

class Bread extends React.Component {
    constructor(props) {
        super(props);
        //Path to default 'empty' bread image
        //this.imgSrc = {viteLogo};
    }

    render() {
        //const logo = require('./bread-empty.svg');

        return(
            //Does this need to be table and table rows istead?
            <div className="breadContainer">
                <img className="breadImg" src={this.props.imgSrc}/>
                <p className="breadDesc">{this.props.desc}</p>
            </div>
        );
    }
}

Bread.defaultProps = {
    imgSrc : breadEmpty //NOTE!! Doesn't work if surrounded in curly braces
}

export default Bread;