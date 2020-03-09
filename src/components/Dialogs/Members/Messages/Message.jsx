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

const PaginationSelector = ({ total, avatar, setPageCurrent, id, currentPage, mainMessageData }) => {
    let handlePageChange = (pageCurrent, e) => {
        setPageCurrent(pageCurrent);
    }
    let defaultPage = {
        backgroundColor: 'rgb(7, 2, 91)',
        color:'#ffffff',
        textTransform: 'uppercase'
    }
    let numbers = {
        backgroundColor: '#07025b',
        fontWeight: '700',
        color: '#ffffff'
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
            {
                mainMessageData != 0 ?
                    (
                        mainMessageData.map(pages => {
                            if (pages.id === currentPage) {
                                return <ul>
                                    {pages.item.map((item) => {
                                        return (item.recipientId === id
                                            ? <div className="col-sm-12"><div key={item.id} className="section-dialogs-inner-active-message col-sm-6 col-sm-offset-6">
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
                                            </div>
                                            : <div className="col-sm-12"><div key={item.id} className="section-dialogs-inner-active-message col-sm-6">
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
                                            </div>
                                        );
                                    })}
                                </ul>
                            }
                        })
                    ) : <Preloader isLoading={true} />
            }
        </>);
}

const Message = ({ id, avatar, instance }) => {
    let [mounted, setMounted] = useState(false);
    let [messagesList, setMessagesList] = useState([]);
    let [isSending, setIsSending] = useState(false);
    let [updated, setUpdated] = useState(false);
    let [count, setCount] = useState(0);
    let [page, setPage] = useState(1);
    let [updatePage, setUpdatePage] = useState(false);

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
    }, [isSending])
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
            <PaginationSelector avatar={avatar} id={id} setPageCurrent={setPageCurrent} currentPage={page} mainMessageData={messagesList} total={count} />
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