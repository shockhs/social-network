import React from 'react';
import '../../../css/Dialogs/Members/Messages/Message.css';
import avatar from '../../../../img/default-avatar.png'

const Message = ({messagesData,id}) => {
    let mainMessageData = messagesData.map((item) => {
        if (item.id === id) {
            return (
                <div className="section-dialogs-inner-active-message">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="section-dialogs-inner-active-message-avatar">
                                <img className="rounded-circle" src={avatar} alt="" />
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