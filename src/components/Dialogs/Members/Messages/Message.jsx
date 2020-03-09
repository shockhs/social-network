import React from 'react';
import '../../../css/Dialogs/Members/Messages/Message.css';
import blocker from '../../../../img/default-avatar.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import SendMessage from '../../SendMessage/SendMessage';
import Preloader from '../../../commons/Preloader/Preloader';
import { useCallback } from 'react';
import Pagination from 'react-paginating';
var _ = require("lodash");

const PaginationSelector = ({ total, userAvatar, avatar, restoreMessage, deleteMessage, setPageCurrent, id, currentPage, mainMessageData }) => {
    let [currentId, setCurrentId] = useState([]);
    let handleRestoreClick = (id) => {
        restoreMessage(id);
        let array = currentId.map(messages => { if (messages !== id) return messages })
        debugger;
        setCurrentId(array);
    }
    let handleDeleteClick = (id) => {
        deleteMessage(id);
        let array = [...currentId, id];
        setCurrentId(array);
    }
    let handlePageChange = (pageCurrent, e) => {
        setPageCurrent(pageCurrent);
    }
    let defaultPage = {
        backgroundColor: 'rgb(7, 2, 91)',
        color: '#ffffff',
        textTransform: 'uppercase'
    }
    let numbers = {
        backgroundColor: '#07025b',
        fontWeight: '700',
        color: '#ffffff'
    }
    function format(dateStr) {
        let date = dateStr.split('T');
        let time = date[1].split(":");
        return (date[0] + " " + time[0] + ":" + time[1]);
    }
    return (
        <>
            <Pagination
                className="pagination-style"
                total={total}
                limit={10}
                pageCount={10}
                currentPage={currentPage}
            >
                {({
                    pages,
                    currentPage,
                    hasNextPage,
                    hasPreviousPage,
                    previousPage,
                    nextPage,
                    totalPages,
                    getPageItemProps
                }) => (
                        <div>
                            <button
                                {...getPageItemProps({
                                    pageValue: 1,
                                    style: defaultPage,
                                    onPageChange: handlePageChange
                                })}
                            >
                                first
              </button>
                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        style: numbers,
                                        onPageChange: handlePageChange
                                    })}
                                >
                                    {'<'}
                                </button>
                            )}

                            {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                    activePage = { backgroundColor: '#ff4067' };
                                }
                                return (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: page,
                                            key: page,
                                            style: activePage,
                                            onPageChange: handlePageChange
                                        })}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {hasNextPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: nextPage,
                                        style: numbers,
                                        onPageChange: handlePageChange
                                    })}
                                >
                                    {'>'}
                                </button>
                            )}
                            <button
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    style: defaultPage,
                                    onPageChange: handlePageChange
                                })}
                            >
                                last
             </button>
                        </div>
                    )}
            </Pagination>
            <div className="row">
                {
                    mainMessageData !== 0 ?
                        (
                            mainMessageData.map(pages => {
                                if (pages.id === currentPage) {
                                    return <ul>
                                        {pages.item.map((item) => {
                                            return (item.recipientId === id
                                                ? <> <div key={item.id} className="section-dialogs-inner-active-message col-sm-6 col-sm-offset-6">
                                                    <div className="row">
                                                        <div className="content-message">
                                                            <div className="col-sm-4 content-message-avatar">
                                                                <img className="img-responsive rounded-circle" src={avatar ? avatar : blocker} alt="" />
                                                                {(currentId.includes(item.id))
                                                                    ? <button onClick={() => { handleRestoreClick(item.id) }} className="content-message-button-restore">restore</button>
                                                                    : <button onClick={() => { handleDeleteClick(item.id) }} className="content-message-button-delete">delete</button>}
                                                            </div>
                                                            <div className="col-sm-8 content-message-text">
                                                                <div className="section-dialogs-inner-active-message-item center-block">
                                                                    <h5>{item.senderName}</h5>
                                                                    <h6>{format(item.addedAt)}</h6>
                                                                </div>
                                                                <div className="section-dialogs-inner-active-message-item center-block">
                                                                    <div className="wrapword">{item.body}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className="col-sm-12 nopadding">
                                                        {!item.viewed ? <div className="viewed-status">Не просмотрено</div> : <div className="message-paddding-viewed" />}
                                                    </div></>
                                                : <><div key={item.id} className="section-dialogs-inner-active-message col-sm-6">
                                                    <div className="row">
                                                        <div className="content-message">
                                                            <div className="col-sm-4 content-message-avatar">
                                                                <img className="img-responsive rounded-circle" src={userAvatar ? userAvatar : blocker} alt="" />
                                                                {(currentId.includes(item.id))
                                                                    ? <button onClick={() => { handleRestoreClick(item.id) }} className="content-message-button-restore">restore</button>
                                                                    : <button onClick={() => { handleDeleteClick(item.id) }} className="content-message-button-delete">delete</button>}
                                                            </div>
                                                            <div className="col-sm-8 col-centered content-message-text">
                                                                <div className="section-dialogs-inner-active-message-item center-block">
                                                                    <h5>{item.senderName}</h5>
                                                                    <h6>{format(item.addedAt)}</h6>
                                                                </div>
                                                                <div className="section-dialogs-inner-active-message-item center-block">
                                                                    <p className="wrapword">{item.body}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className="col-sm-12 nopadding">
                                                        <div className="message-paddding-viewed" />
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </ul>
                                }
                            })
                        ) : <Preloader isLoading={true} />
                }</div>
        </>);
}

const Message = ({ id, avatar, instance, userAvatar }) => {
    let [mounted, setMounted] = useState(false);
    let [messagesList, setMessagesList] = useState([]);
    let [isSending, setIsSending] = useState(false);
    let [updated, setUpdated] = useState(false);
    let [count, setCount] = useState(0);
    let [page, setPage] = useState(1);
    let [updatePage, setUpdatePage] = useState(false);
    let [isDeleting, setIsDeleting] = useState(false);
    let [isRestoring, setIsRestoring] = useState(false);
    const fetchData = async () => {
        const response = await instance.get(`/dialogs/${id}/messages?page=${page}&count=10`); // first reponse for normal render
        if (response.status === 200) {
            if (mounted === false) {
                let array = [{ id: 1, item: response.data.items }];
                setMessagesList(array);
                setCount(response.data.totalCount);
                setMounted(true);
            } else {
                setCount(response.data.totalCount);
                var currentList = messagesList.reduce(
                    (obj, item) => Object.assign(obj, { [item.id]: item.item }), {});
                if (page > 1) {
                    if (messagesList.length > 1 && updated === true) {
                        if (!_.isEqual(response.data.items, currentList[page])) {
                            let array = [...messagesList, messagesList[page - 1] = [page, response.data.items]];
                            setMessagesList(array);
                        }
                    } else {
                        let array = [...messagesList, { id: page, item: response.data.items }];
                        setMessagesList(array)
                        setUpdated(true);
                    }
                } else if (!_.isEqual(response.data.items, currentList)) {
                    let array = [{ id: 1, item: response.data.items }]
                    setMessagesList(array);
                    setUpdated(false);
                    console.log("STATE UPDATE");
                }
            }
        }
    }
    const onSubmit = useCallback(async ({ message }) => {
        if (isSending) return
        setIsSending(true)
        await instance.post(`/dialogs/${id}/messages`, { body: message });
        setPage(page);
        fetchData();
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

    setTimeout(() => { setUpdatePage(!updatePage) }, 10000);
    useEffect(() => {
        if (mounted === false) {
            setMounted(true);
            fetchData();
        }
        return () => {
        };
    }, []);
    const setPageCurrent = (page) => {
        setPage(page);
        setUpdated(false);
        fetchData();
    }
    useEffect(() => {
        fetchData();
        return () => {
        };
    }, [updatePage, page]);
    if (mounted === false) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    return (
        <div className="section-dialogs-inner-active">
            <PaginationSelector userAvatar={userAvatar} avatar={avatar} id={id} restoreMessage={restoreMessage} setPageCurrent={setPageCurrent} currentPage={page} deleteMessage={deleteMessage} mainMessageData={messagesList} total={count} />
            <SendMessage onSubmit={onSubmit} />
        </div>
    );
}


const Messages = ({ membersList, instance, profile }) => {
    if (membersList === null || profile === null) {
        return <div className="MessagesLoader"><Preloader isLoading={true} /></div>
    }
    let mainDialogsData = membersList.map((user) => (<Route key={user.id} path={`/home/dialogs/${user.id}`} render={() => <Message avatar={user.photos.small} instance={instance} key={user.id} userAvatar={user.photos.small} avatar={profile.photos.small} id={user.id} />} />));
    return (
        <>
            <div className="section-dialogs-inner-active">
                {mainDialogsData}
            </div>
        </>
    );
}

export default Messages;