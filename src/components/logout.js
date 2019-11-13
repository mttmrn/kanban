import React, { Component } from 'react';
import fire from '../config/auth.js';

class Logout extends Component {

    logout() {
        fire.auth().signOut();
    }

    render() {

        const style = {
            background: 'none',
            border: '1px solid #fff',
            borderRadius: '3px',
            color: '#fff',
            width: '100%',
            height: '2rem',
            fontSize: '1rem',
            margin: '1rem',
            cursor: 'pointer'
        }

        return (
            <div>
                <button style={style} onClick={this.logout}>Log out</button>
            </div>
        )
    }
}

export default Logout