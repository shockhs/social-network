import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Pagination from 'react-paginating';
import blocker from '../../../../img/default-avatar.png'
import Preloader from '../../../commons/Preloader/Preloader';
var _ = require("lodash");


const ContentMessage = ({ total, userAvatar, avatar, restoreMessage, deleteMessage, setPageCurrent, id, currentPage, mainMessageData }) => {
    let [currentId, setCurrentId] = useState([]);
    let [update, setUpdate] = useState(true);
    let [data, setData] = useState({});// eslint-disable-line
    let handleRestoreClick = (id) => {
        restoreMessage(id);
        let array = currentId.map(message => { if (message !== id) { return message } else { return null } })
        setCurrentId(array);
    }
    let handleDeleteClick = (id) => {
        deleteMessage(id);
        let array = [...currentId, id];
        setCurrentId(array);
    }
    let handlePageChange = (pageCurrent, e) => {
        setPageCurrent(pageCurrent);
        setUpdate(false);
    }
    useEffect(() => {
        setUpdate(true);
        setData(mainMessageData);
        return () => {
        };
    }, [mainMessageData]);
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
            <Pagination key={'page' + total + currentPage} className="pagination-style" total={total} limit={10} pageCount={10} currentPage={currentPage} >
                {({ pages, currentPage, hasNextPage, hasPreviousPage, previousPage, nextPage, totalPages, getPageItemProps }) => (
                    <div>
                        <button key={'first' + total + currentPage} {...getPageItemProps({ pageValue: 1, style: defaultPage, onPageChange: handlePageChange })}>first</button>
                        {hasPreviousPage && (<button key={'prev' + total + currentPage} {...getPageItemProps({ pageValue: previousPage, style: numbers, onPageChange: handlePageChange })}>{'<'}</button>)}
                        {pages.map(page => {
                            let activePage = null;
                            if (currentPage === page) {
                                activePage = { backgroundColor: '#ff4067' };
                                return (<button key={'active' + page + total + currentPage} {...getPageItemProps({ pageValue: page, style: activePage, onPageChange: handlePageChange })}>{page}</button>);
                            }
                            return (<button key={page + total + currentPage} {...getPageItemProps({ pageValue: page, style: activePage, onPageChange: handlePageChange })}>{page}</button>);
                        })}
                        {hasNextPage && (<button key={'next' + total + currentPage} {...getPageItemProps({ pageValue: nextPage, style: numbers, onPageChange: handlePageChange })}>{'>'}</button>)}
                        <button key={'last' + total + currentPage} {...getPageItemProps({ pageValue: totalPages, style: defaultPage, onPageChange: handlePageChange })}>last</button>
                    </div>
                )}
            </Pagination>
            <div className="row">
                {((!_.isEmpty(mainMessageData)) && (update))
                    ? <ul>
                        {mainMessageData.item.map((item) => {
                            return (item.recipientId === id
                                ? <Fragment key={item.id}>
                                    <div className={(item.viewed ? "section-dialogs-inner-active-message col-sm-6 col-sm-offset-6" : "section-dialogs-inner-active-messagenew col-sm-6 col-sm-offset-6")}>
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
                                    </div></Fragment>
                                : <Fragment key={item.id}><div className="section-dialogs-inner-active-message col-sm-6">
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
                                </Fragment>
                            );
                        })}
                    </ul>
                    : <div className="col-sm-2 col-sm-offset-5 MessagesLoaderInner"><Preloader isLoading={true} /></div>
                }
            </div>
        </>
    );
}

export default ContentMessage;