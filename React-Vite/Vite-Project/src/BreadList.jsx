import React from 'react';
import Bread from './Bread';

class BreadList extends React.Component {
    render() {
        var index=0;
        return(
            <div className='breadList'>
                {
                    this.props.listOfBread.map(
                        //Created bread with a key, passes in the rest of the bread values (so nothing undefined) and then passes the onClick function
                        (bread) => <Bread key={bread.id} {...bread} selectBread={this.props.selectBread}/>
                    )
                }
            </div>
        );
    }
}

export default BreadList