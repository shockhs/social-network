import React from 'react';
import '../../css/Dialogs/SendMessage/SendMessage.css';
import { Field, reduxForm } from 'redux-form';

const SendMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} name="SendMessage">
            <div className="section-dialogs-inner-newmessage">
                <Field name="message" component="textarea" className="section-dialogs-inner-newmessage-input" id="" rows="2"></Field>
                <button className="section-dialogs-inner-newmessage-button">Send Message</button>
            </div>
        </form>
    );
}

const SendMessageFormRedux = reduxForm({ form: "SendMessageFormn" })(SendMessageForm);

const SendMessage = ({addMessageActionCreater}) => {
    let onSubmit = ({message}) => {
        addMessageActionCreater(message);
    }
    return (
        <SendMessageFormRedux onSubmit={onSubmit} />
    );
}

export default SendMessage;