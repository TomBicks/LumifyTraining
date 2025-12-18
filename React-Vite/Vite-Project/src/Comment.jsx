import React, { Component } from 'react';
import viteLogo from '/vite.svg';

class Comment extends React.Component {
    render() {
        return(
            <table className='comment'>
                <tbody>
                    <tr>
                        <td className='photo'><img src={viteLogo}></img></td>
                        <td className='message'>{this.props.message}</td>
                        <td className='delete'><img src={viteLogo}></img></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Comment