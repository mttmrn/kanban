import React, { Component } from 'react';

class Card extends Component {

    render() {
        const style = {
            border: '1px solid #fff',
            borderRadius: '2px',
            color: '#fff',
            width: '15rem',
            height: '10rem',
            fontSize: '2rem',
            margin: '1rem',
            cursor: 'pointer'
        }

        return (
            <div style={style} onClick={this.props.addColumn} className="centered">
                +
            </div>
        )
    }
}

export default Card