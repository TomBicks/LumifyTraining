import React from 'react';
import breadEmpty from './assets/bread-empty.jpg';

class Bread extends React.Component {
    selectBread = () => {
        this.props.selectBread(this.props.id);
    }

    render() {
        return(
            //Does this need to be table and table rows istead?
            <div className="breadContainer" onClick={this.selectBread}>
                <img className="breadImg" src={this.props.imgSrc}/>
                <p className="breadDesc">{this.props.name}</p>
            </div>
        );
    }
}

Bread.defaultProps = {
    imgSrc : breadEmpty //NOTE!! Doesn't work if surrounded in curly braces
}

export default Bread;