import React from 'react';
import '../../css/Dialogs/SendMessage/SendMessage.css';
import { Field, reduxForm } from 'redux-form';
import { useState } from 'react';
import { useEffect } from 'react';
import * as axios from 'axios';

const SendMessageForm = ({ handleSubmit }) => {
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

const SendMessage = ({ id }) => {
    const instance = axios.create({
        withCredentials: true,
        headers: { "API-KEY": "9832db98-b9d3-460c-9cab-5d06ff193b07" },
        baseURL: "https://social-network.samuraijs.com/api/1.0/"
    });
    let [mounted, setMounted] = useState(false);
    let [sended, setSended] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.post(`/dialogs/${id}/messages`, { body: sended });
            if (response.status === 200) {
                setSended("");
            }
        }
        if (mounted) {
            fetchData();
            setMounted(false);
        }
    }, [mounted]);
    let onSubmit = ({ message }) => {
        setSended(message);
        setMounted(true);
    }
    return (
        <SendMessageFormRedux onSubmit={onSubmit} />
    );
}

export default SendMessage;