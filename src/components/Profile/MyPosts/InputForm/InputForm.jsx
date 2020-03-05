import React from 'react';
import '../../../css/Profile/MyPosts/InputForm/InputForm.css';
import { reduxForm, Field } from 'redux-form';




const InputFormElement = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} name="Post">
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


const InputForm = ({addPostActionCreater}) => {
    let addPost = (post) => {
        addPostActionCreater(post.postsend);
    }
    return (
        <div className="section-profile-inner-posts">
            <div className="section-profile-inner-posts-form">
                <InputFormRedux onSubmit={addPost} />
            </div>
        </div>
    );
}

export default InputForm;