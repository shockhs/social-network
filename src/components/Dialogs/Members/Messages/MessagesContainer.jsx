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
    let [messagesList, setMessagesList] = useState([]); // messagesArray
    let [isSending, setIsSending] = useState(false); // control requests status
    let [updated, setUpdated] = useState(false); // control 2nd page rendering
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
                    let array = [{ id: 1, item: response.data.items }]; // first render with no props
                    setMessagesList(array); // add first page
                    setCount(response.data.totalCount);
                    setMounted(true);
                } else {
                    setCount(response.data.totalCount);
                    var currentList = messagesList.reduce(
                        (obj, item) => Object.assign(obj, { [item.id]: item.item }), {}); // create object {page: messages}
                    if (page > 1) {
                        if (messagesList.length > 1 && updated === true) {
                            if (!_.isEqual(response.data.items, currentList[page])) { // another pages
                                let array = [...messagesList, messagesList[page - 1] = [page, response.data.items]];
                                setMessagesList(array);
                            }
                        } else { // second page need to push without check isEqual
                            let array = [...messagesList, { id: page, item: response.data.items }];
                            setMessagesList(array)
                            setUpdated(true);
                        }
                    } else if (!_.isEqual(response.data.items, currentList[page])) { // first page update
                        let array = [{ id: 1, item: response.data.items }]
                        setMessagesList(array);
                        // setUpdated(false); ???
                        console.log("STATE UPDATE");
                    } else {
                        console.log("SAME PAGE");
                    }
                }
            }
        } catch (error) {
            if (Axios.isCancel(error)) {
                console.log('cancel request Messages');
            } else if (error === undefined) {
                console.log('some response error');
            } else {
                throw error;
            }
        }
    }
    /* eslint-disable react-hooks/exhaustive-deps */
    const onSubmit = useCallback(async ({ message }) => {
        if (isSending) return
        setIsSending(true)
        await instance.post(`/dialogs/${id}/messages`, {
            body: message,
            cancelToken: source.token
        });
        setUpdatePage(!updatePage);
        setIsSending(false);
    }, [isSending]);
    const restoreMessage = useCallback(async (id) => {
        if (isRestoring) return
        setIsRestoring(true)
        await instance.put(`/dialogs/messages/${id}/restore`);
        setIsRestoring(false);
    }, [isRestoring]);
    const deleteMessage = useCallback(async (id) => {
        if (isDeleting) return
        setIsDeleting(true)
        await instance.delete(`/dialogs/messages/${id}`);
        setIsDeleting(false);
    }, [isDeleting]);
    /* eslint-enable react-hooks/exhaustive-deps */
    const setPageCurrent = (page) => {
        setPage(page);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        let isCancelled = true;
        if (isCancelled) setInterval(() => { fetchData(); }, 10000);
        fetchData(); // NEED CANCEL TOKEN FOR AXIOS
        return () => {
            isCancelled = false;
            source.cancel();
        };
    }, [updatePage, page, messagesList]);
    /* eslint-enable react-hooks/exhaustive-deps */
    if (mounted === false) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    return (
        <div key={"section-dialogs-inner-active"} className="section-dialogs-inner-active">
            <ContentMessage userAvatar={userAvatar} avatar={avatar} id={id} restoreMessage={restoreMessage} setPageCurrent={setPageCurrent} currentPage={page} deleteMessage={deleteMessage} mainMessageData={messagesList} total={count} />
            <SendMessage onSubmit={onSubmit} />
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