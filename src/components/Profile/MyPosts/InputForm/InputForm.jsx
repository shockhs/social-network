import React from 'react';
import '../../../css/Profile/MyPosts/InputForm/InputForm.css';
import { reduxForm, Field } from 'redux-form';
import { useState } from 'react';
import { useEffect } from 'react';
import Preloader from '../../../commons/Preloader/Preloader';

const InputFormElement = ({ handleSubmit, ...props }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-9">
                    <div className="section-profile-inner-posts-form-area">
                        <Field name="postsend" component="textarea" className="section-profile-inner-posts-form-area-input" rows="5" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="section-profile-inner-posts-form-functions">
                        <button className="section-profile-inner-posts-form-functions-button">Add post</button>
                        {/*<button className="section-profile-inner-posts-form-functions-button">Remove</button>*/}
                    </div>
                </div>
            </div>
        </form>
    );
}

const InputFormRedux = reduxForm({ form: "InputForm" })(InputFormElement);

const InputForm = (props) => {
    let [sendStatus, setSendStatus] = useState(false);
    let postsend = "";
    useEffect(() => {
        setTimeout(() => {
            setSendStatus(false);
        }, 1000);
    }, [sendStatus]);

    let addPost = (post) => {
        props.addPostActionCreater(post.postsend);
        setSendStatus(true);
    }
    return (<>
        {sendStatus
            ? <div className="section-users-elements-status"><Preloader isLoading={true} /></div>
            : <div className="section-profile-inner-posts">
                <div className="section-profile-inner-posts-form">
                    <InputFormRedux initialValues={postsend} onSubmit={addPost} />
                </div >
            </div >
        }</>
    );
}

export default InputForm;