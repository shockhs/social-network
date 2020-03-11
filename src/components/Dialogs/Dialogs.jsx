import React from 'react';
import '../css/Dialogs//Dialogs.css';
import Members from './Members/Members';
import MessagesContainer from './Members/Messages/MessagesContainer';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios, * as axios from 'axios';
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
        let source = Axios.CancelToken.source(); // axios cancel control
        const fetchData = async () => {
            try {
                const dialogs = await instance.get(`/dialogs`, {
                    cancelToken: source.token
                });
                const profile = await instance.get(`/profile/${value}`, {
                    cancelToken: source.token
                });
                if (dialogs.status === 200) {
                    setMembersList(dialogs.data);
                }
                if (profile.status === 200) {
                    setProfile(profile.data);
                }
            } catch (error) {
                if (Axios.isCancel(error)) {
                    console.log('cancel request Dialogs');
                } else {
                    throw error;
                }
            }
        }
        fetchData();
        return () => {
            source.cancel();
        };
    }, [value])
    return (
        <BrowserRouter>
            <div className="section-dialogs">
                <div className="section-dialogs-inner">
                    <div className="col-sm-4">
                        <Members members={membersList} instance={instance} />
                    </div>
                    <MessagesContainer profile={profile} instance={instance} membersList={membersList} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Dialogs;