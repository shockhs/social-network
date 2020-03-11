import React from 'react';
import '../../../css/Dialogs/Members/Messages/Message.css';
import { useState } from 'react';
import { useEffect } from 'react';
import ContentMessage from './ContentMessage'
import { Route } from 'react-router-dom';
import SendMessage from '../../SendMessage/SendMessage';
import Preloader from '../../../commons/Preloader/Preloader';
import { useCallback } from 'react';
import Axios from 'axios';
var _ = require("lodash");

const Messages = ({ id, avatar, instance, userAvatar }) => {
    let [mounted, setMounted] = useState(false); // first render control
    let [messagesList, setMessagesList] = useState({}); // messagesArray
    let [isSending, setIsSending] = useState(false); // control requests status
    let [count, setCount] = useState(0); // total messages count
    let [page, setPage] = useState(1); // control pages
    let [updatePage, setUpdatePage] = useState(false); // refreshing variable 
    let [isDeleting, setIsDeleting] = useState(false); // control message deleting
    let [isRestoring, setIsRestoring] = useState(false); // control message restoring
    let source = Axios.CancelToken.source(); // source for cancel axios
    const fetchData = async () => {
        try {
            const response = await instance.get(`/dialogs/${id}/messages?page=${page}&count=10`, {
                cancelToken: source.token
            });
            if (response.status === 200) {
                if (mounted === false) {
                    let array = { id: 1, item: response.data.items }; // first render with no props
                    setMessagesList(array); // add first page
                    setCount(response.data.totalCount);
                    setMounted(true);
                } else {
                    if (!_.isEqual(response.data.items, messagesList.item)) { // another pages
                        let array = { id: page, item: response.data.items };
                        setMessagesList(array);
                    } else {
                        console.log("SAME PAGE");
                    }
                }
            }
        } catch (error) {
            if (Axios.isCancel(error)) {
                console.log('cancel request Messages');
            } else {
                throw error;
            }
        }
    }
    const onSubmit = useCallback(async (formData, userId) => {
        if (isSending) return
        setIsSending(true)
        await instance.post(`/dialogs/${userId}/messages`, { body: formData.message, cancelToken: source.token });
        setUpdatePage(updatePage => !updatePage);
        setIsSending(false);// eslint-disable-next-line
    }, [isSending, instance]);
    const restoreMessage = useCallback(async (id) => {
        if (isRestoring) return
        setIsRestoring(true)
        await instance.put(`/dialogs/messages/${id}/restore`);
        setIsRestoring(false);
    }, [isRestoring, instance]);
    const deleteMessage = useCallback(async (id) => {
        if (isDeleting) return
        setIsDeleting(true)
        await instance.delete(`/dialogs/messages/${id}`);
        setIsDeleting(false);
    }, [isDeleting, instance]);
    const setPageCurrent = (page) => {
        setPage(page);
    }
    useEffect(() => {
        let isCancelled = true;
        if (isCancelled) { var timer = setInterval(() => { fetchData(); }, 10000) };
        fetchData();
        return () => {
            isCancelled = false;
            source.cancel();
            clearInterval(timer);
        };// eslint-disable-next-line
    }, [updatePage, page, messagesList]);
    useEffect(() => {
        return () => {
            source.cancel();
        };// eslint-disable-next-line
    }, []);
    if (mounted === false) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    return (
        <div key={"section-dialogs-inner-active"} className="section-dialogs-inner-active">
            <ContentMessage userAvatar={userAvatar} avatar={avatar} id={id} restoreMessage={restoreMessage} setPageCurrent={setPageCurrent} currentPage={page} deleteMessage={deleteMessage} mainMessageData={messagesList} total={count} />
            <SendMessage userId={id} onSubmit={onSubmit} />
        </div>
    );
}


const MessagesContainer = ({ membersList, instance, profile }) => {
    if (membersList === null || profile === null) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    let mainDialogsData = membersList.map((user) => (<Route key={user.id} path={`/home/dialogs/${user.id}`} render={() => <Messages instance={instance} key={user.id} userAvatar={user.photos.small} avatar={profile.photos.small} id={user.id} />} />));
    return (
        <>
            {mainDialogsData}
        </>
    );
}

export default MessagesContainer;