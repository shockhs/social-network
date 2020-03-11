import React from 'react';
import { useEffect } from 'react';
import '../../css/Dialogs/SendMessage/SendMessage.css';
import { Field, reduxForm } from 'redux-form';
import { useState } from 'react';
import Preloader from '../../commons/Preloader/Preloader';


const SendMessageForm = ({ handleSubmit, update }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="section-dialogs-inner-newmessage">
                <Field name="message" component="textarea" className="section-dialogs-inner-newmessage-input" id="" rows="2"></Field>
                <button className="section-dialogs-inner-newmessage-button">Send Message</button>
            </div>
        </form>
    );
}

const SendMessageFormRedux = reduxForm({ form: "SendMessageFormn" })(SendMessageForm);


const SendMessage = ({ onSubmit,userId }) => {
    let messageValue = { message: "" }
    let [update, setUpdate] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setUpdate(false);
        }, 500);
        return () => {
        };
    }, [update]);
    let handleSubmitClick = (formData) => {
        debugger;
        onSubmit(formData,userId);
        setUpdate(true);
    }
    return (
        (!update ? <SendMessageFormRedux update={update} initialValues={messageValue} onSubmit={handleSubmitClick} /> : <div className="section-users-elements-status"><Preloader isLoading={true} /></div>)
    );
}

export default SendMessage;