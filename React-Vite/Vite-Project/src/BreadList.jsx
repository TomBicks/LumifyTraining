import React from 'react';
import Bread from './Bread';

class BreadList extends React.Component {
    render() {
        var index=0;
        return(
            <div className='commentList'>
                {
                    this.props.listOfBread.map(
                        (message) => <Bread key={index} message={message} index={index++} {...this.props}/>
                    )
                }
            </div>
        );
    }
}

export default BreadList