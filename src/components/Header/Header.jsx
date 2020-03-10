import React from 'react';
import '../css/Header/Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({profile,UserLogout}) => {
    return (
        <div className="section-outer">
            <div className="container">
                <div className="section-header">
                    <div className="section-header-logo">
                        <NavLink className="logotype-text" to="/home">social-network</NavLink>
                    </div>
                    <div className="section-header-button">
                        <div className="section-header-profile">
                            <NavLink to="/home/profile" >{profile.login}</NavLink>
                        </div>
                        <button onClick={UserLogout}>Log out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;