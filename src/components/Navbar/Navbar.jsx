import React from 'react';
import '../css/Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios, * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "9832db98-b9d3-460c-9cab-5d06ff193b07" },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

const Navbar = () => {
    let [updated, setUpdated] = useState(0);
    useEffect(() => {
        let source = Axios.CancelToken.source();
        const fetchNewData = async () => {
            try {
                const response = await instance.get(`/dialogs/messages/new/count`, {
                    cancelToken: source.token
                });
                if (response.status === 200) {
                    if (response.data === updated) {
                        setUpdated(response.data);
                    }
                }
            } catch (error) {
                if (Axios.isCancel(error)) {
                    console.log('cancel request Navbar');
                } else {
                    throw error;
                }
            }
        }
        let timer = setInterval(function () {
            fetchNewData();
        }, 15000);
        fetchNewData();
        return () => {
            clearInterval(timer);
            source.cancel();
        };
    }, [updated]);
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

export default Navbar;