import React, { Component } from 'react';
import fire from './config/auth.js';
import Header from './components/header.js';


class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="bg">
                <Header />
                <div className="">+</div>
            </div>
        );

    }

}

export default Home;