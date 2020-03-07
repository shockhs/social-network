import React from 'react';
import '../../../scss/Dialogs/Members/Messages/Message.scss';
import blocker from '../../../../img/default-avatar.png'
import { useState } from 'react';
import { useEffect } from 'react';
import * as axios from 'axios';
import { Route } from 'react-router-dom';
import SendMessage from '../../SendMessage/SendMessage';
import Preloader from '../../../commons/Preloader/Preloader';

const Message = ({ id, avatar }) => {
    const instance = axios.create({
        withCredentials: true,
        headers: { "API-KEY": "9832db98-b9d3-460c-9cab-5d06ff193b07" },
        baseURL: "https://social-network.samuraijs.com/api/1.0/"
    });
    let [mounted, setMounted] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get(`/dialogs/${id}/messages`);
            if (response.status === 200) {
                setMessagesList(response.data.items);
                setMounted(true);
            }
        }
        fetchData();
    }, []);
    let [messagesList, setMessagesList] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get(`/dialogs/${id}/messages`);
            if (response.status === 200) {
                setMessagesList(response.data.items);
            }
        }
        setTimeout(() => {
            fetchData();
        }, 5000)
    }, [messagesList]);
    if (mounted === false) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    let mainMessageData = messagesList.map((item) => {
        return (
            <div key={item.id} className="section-dialogs-inner-active-message">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="section-dialogs-inner-active-message-avatar">
                            <img className="rounded-circle" src={avatar ? avatar : blocker} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="section-dialogs-inner-active-message-item center-block">
                            {item.body}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="section-dialogs-inner-active">
            {mainMessageData}
            <SendMessage mounted={mounted} id={id} />
        </div>
    );
}


const Messages = ({ membersList }) => {
    if (membersList === null) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    let mainDialogsData = membersList.map((user) => (<Route exact path={"/home/dialogs/" + user.id} render={() => <Message key={user.id} avatar={user.photos.small} id={user.id} />} />));
    return (
        <>
            <div className="section-dialogs-inner-active">
                {mainDialogsData}
            </div>
        </>
    );
}

export default Messages;