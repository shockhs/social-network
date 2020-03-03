import React from 'react';
import '../css/Dialogs//Dialogs.css';
import Members from './Members/Members';
import Message from './Members/Messages/Message';
import { Route, BrowserRouter } from 'react-router-dom';
import SendMessageContainer from './SendMessage/SendMessageContainer';

const Dialogs = ({dialogsData,membersData,messagesData}) => {
    let mainDialogsData = dialogsData.map((dialog) => (<Route exact path={"/dialogs/" + dialog.id} render={() => <Message id={dialog.id} messagesData={messagesData} />} />));
    return (
        <BrowserRouter>
            <div className="section-dialogs">
                <div className="section-dialogs-inner">
                    <div className="col-sm-3">
                        <Members membersData={membersData} />
                    </div>
                    <div className="col-sm-9">
                        <div className="section-dialogs-inner-active">
                            {mainDialogsData}
                        </div>
                        <SendMessageContainer />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Dialogs;