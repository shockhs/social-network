import React from 'react';
import '../css/Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
/*eslint-disable */

//suppress all warnings between comments
const Navbar = () => {
    return (
        <div className="col-sm-3 fixed-left">
            <nav className="section-menu">
                <ul>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/profile">Profile</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/dialogs">Messages</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/users">Users</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/news">News</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/music">Music</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/groups">Groups</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/settings">Setting</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}
/*eslint-enable */
export default Navbar;