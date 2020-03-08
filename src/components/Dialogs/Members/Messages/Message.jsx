import React from 'react';
import '../../../scss/Dialogs/Members/Messages/Message.scss';
import blocker from '../../../../img/default-avatar.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import SendMessage from '../../SendMessage/SendMessage';
import Preloader from '../../../commons/Preloader/Preloader';
import { useCallback } from 'react';


const Message = ({ id, avatar, instance }) => {
    let [mounted, setMounted] = useState(false);
    let [messagesList, setMessagesList] = useState([]);
    let [isSending, setIsSending] = useState(false);
    let [updated, setUpdated] = useState(false);
    const onSubmit = useCallback(async ({ message }) => {
        if (isSending) return
        setIsSending(true)
        await instance.post(`/dialogs/${id}/messages`, { body: message });
        setUpdated(!updated);
        setIsSending(false);
    }, [isSending])
    let myTimeout = setTimeout(function () {
        setUpdated(!updated);
    }, 35000);
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get(`/dialogs/${id}/messages`); // first reponse for normal render
            if (response.status === 200) {
                if (mounted === false) {
                    setMessagesList(response.data.items);
                    setMounted(true);
                } else {
                    if (response.data.items.length !== messagesList.length) {
                        setMessagesList(response.data.items);
                        console.log("STATE UPDATE");
                    }
                    for (let i = 0; i < response.data.items.length; i++) {
                        if (response.data.items[0].id !== messagesList[0].id) { // need effective method
                            setMessagesList(response.data.items);
                            console.log("STATE UPDATE");
                        }
                    }
                }
            }
        }
        fetchData();
        return () => {
            clearTimeout(myTimeout);
        };
    }, [updated, messagesList]);
    if (mounted === false) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    let mainMessageData = messagesList.map((item) => {
        return (item.recipientId === id
            ? <div key={item.id} className="section-dialogs-inner-active-message col-sm-6 col-sm-offset-6">
                <div className="row">
                    <div className="col-sm-10 col-centered">
                        <div className="section-dialogs-inner-active-message-item center-block">
                            <p className="wrapword">{item.body}</p>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="section-dialogs-inner-active-message-avatar">
                            <img className="rounded-circle" src={avatar ? avatar : blocker} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            : <div key={item.id} className="section-dialogs-inner-active-message col-sm-6">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="section-dialogs-inner-active-message-avatar">
                            <img className="rounded-circle" src={avatar ? avatar : blocker} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="section-dialogs-inner-active-message-item center-block">
                            <p>{item.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="section-dialogs-inner-active">
            {mainMessageData}
            <SendMessage onSubmit={onSubmit} />
        </div>
    );
}


const Messages = ({ membersList, instance }) => {
    if (membersList === null) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    let mainDialogsData = membersList.map((user) => (<Route key={user.id} path={`/home/dialogs/${user.id}`} render={() => <Message instance={instance} key={user.id} avatar={user.photos.small} id={user.id} />} />));
    return (
        <>
            <div className="section-dialogs-inner-active">
                {mainDialogsData}
            </div>
        </>
    );
}

export default Messages;