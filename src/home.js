import React, { Component } from 'react';
import fire from './config/auth.js';
import Header from './components/header.js';
import Card from './components/card'


class Home extends Component {



    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="bg centered">
                <Header />
                <div className="centered main">
                    <Card addColumn={this.props.addColumn} />
                    {this.props.columns}
                </div>
            </div>
        );

    }

}

export default Home;