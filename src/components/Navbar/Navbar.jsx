import React from 'react';
import '../css/Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as axios from 'axios';
/*eslint-disable */

//suppress all warnings between comments

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "9832db98-b9d3-460c-9cab-5d06ff193b07" },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

const Navbar = () => {
    let [updated, setUpdated] = useState(0);
    let [mounted, setMounted] = useState(false);
    let myTimeout = setTimeout(function () {
        setMounted(!mounted);
    }, 15000);
    useEffect(() => {
        const fetchNewData = async () => {
            const response = await instance.get(`/dialogs/messages/new/count`);
            if (response.status === 200) {
                setUpdated(response.data);
            }
        }
        fetchNewData();
        return () => {
            clearTimeout(myTimeout);
        };
    }, [mounted]);
    return (
        <div className="col-sm-3 fixed-left">
            <nav className="section-menu">
                <ul>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/profile">Profile</NavLink></li>
                    {updated
                        ? <>
                            <div className="wrapper">
                                <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/dialogs">Messages</NavLink></li>
                                <span className="updated">{updated}</span>
                            </div>
                        </>
                        : <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/dialogs">Messages</NavLink></li>}
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/users">Users</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/news">News</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/music">Music</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/groups">Groups</NavLink></li>
                    <li className="section-menu-li"><NavLink className="section-menu-li-url" to="/home/settings">Setting</NavLink></li>
                </ul>
            </nav>
        </div >
    );
}
/*eslint-enable */

export default Navbar;