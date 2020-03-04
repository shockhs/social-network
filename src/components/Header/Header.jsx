import React from 'react';
import '../css/Header/Header.css';
import logo from '../../img/logoin.png'
import { NavLink } from 'react-router-dom';

const Header = ({profile,UserLogout}) => {
    return (
        <div className="section-outer">
            <div className="container">
                <div className="section-header">
                    <div className="section-header-logo">
                        <NavLink to="/home"><img className="img-responsive" src={logo} alt="" /></NavLink>
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