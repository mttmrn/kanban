import React from 'react';
import Logout from './logout'


const Header = () => {
    return (
        <div className="centered header">
            <div className="centered f-start logo-container">
                Logo
                </div>
            <div className="centered f-end navlink-container">
                <Logout />
            </div>
        </div>
    )
}

export default Header