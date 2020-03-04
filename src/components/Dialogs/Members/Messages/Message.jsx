import React from 'react';
import '../../../css/Dialogs/Members/Messages/Message.css';

const Message = ({messagesData,id}) => {
    let mainMessageData = messagesData.map((item) => {
        if (item.id === id) {
            return (
                <div className="section-dialogs-inner-active-message">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="section-dialogs-inner-active-message-avatar">
                                <img className="rounded-circle" src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-10">
                            <div className="section-dialogs-inner-active-message-item center-block">
                                {item.message}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    });
    return (
        <div className="section-dialogs-inner-active">
            {mainMessageData}
        </div>
    );
}

export default Message;