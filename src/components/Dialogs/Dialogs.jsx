import React from 'react';
import '../css/Dialogs//Dialogs.css';
import Members from './Members/Members';
import Message from './Members/Messages/Message';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import * as axios from 'axios';
import { useSelector } from 'react-redux';

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "9832db98-b9d3-460c-9cab-5d06ff193b07" },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

const Dialogs = () => {
    let [membersList, setMembersList] = useState([]);
    let [profile, setProfile] = useState(null);
    const value = useSelector(state => state.authPage.id);
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get(`/profile/${value}`);
            if (response.status === 200) {
                setProfile(response.data);
            }
        }
        fetchData();
        return () => {
        };
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get(`/dialogs`);
            if (response.status === 200) {
                setMembersList(response.data);
            }
        }
        fetchData();
        return () => {
            setMembersList([]);
        };
    }, [])
    return (
        <BrowserRouter>
            <div className="section-dialogs">
                <div className="section-dialogs-inner">
                    <div className="col-sm-4">
                        <Members instance={instance} />
                    </div>
                    <Message profile={profile} instance={instance} membersList={membersList} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Dialogs;