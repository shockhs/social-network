import React from 'react';
import '../../../css/Profile/ProfileInfo/EditProfile/EditProfile.css';
import Preloader from '../../../commons/Preloader/Preloader';
import AvatarContainer from '../Avatar/AvatarContainer';
import StatusContainer from '../Status/StatusContainer';
import { required, maxLength, typeCorrect, typeCorrectURL } from '../../../helpers/validators/validators';
import { reduxForm, Field } from 'redux-form';
import { InputEdit } from '../../../commons/FormArea/FormArea';

const maxLengthCurrent = maxLength(30);

const EditProfileForm = ({ profile, isLoading, authStatus, handleSubmit, ...props }) => {

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="section-profile-inner-about">
                    {(isLoading) ? <div className="col-sm-2 col-sm-offset-5"><Preloader isLoading={isLoading} /></div> :
                        <div className="row">
                            <div className="col-sm-4 section-profile-inner-about-avatar">
                                <AvatarContainer authStatus={authStatus} photo={profile.photos.large} />
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="section-profile-inner-about-description col-sm-12">
                                        <div className="section-profile-inner-about-description-main col-sm-12">
                                            <div className="fullname-style">
                                                <Field name="fullName" validate={[required, maxLengthCurrent]}  component={InputEdit} type="text" />
                                            </div>
                                            <div className="section-profile-inner-about-description-main-status">
                                                <StatusContainer authStatus={authStatus} />
                                            </div>
                                        </div>
                                        <div className="section-profile-inner-about-description-about col-sm-12">
                                            <div className="style-form-item">
                                                <div className="edit-liprofile">Обо мне: </div>
                                                <Field name="aboutMe" validate={[maxLengthCurrent]} component={InputEdit} type="text" />
                                            </div>
                                        </div>
                                        <div className="section-profile-inner-about-description-job col-sm-12">
                                            <div className="style-form-item">
                                                <div className="edit-liprofile">Ищу работу: </div>
                                                <Field autoFocus={true} name="lookingForAJob" validate={[required, typeCorrect]} component={InputEdit} type="text" />
                                            </div>
                                            <div className="style-form-item">
                                                <div className="liprofile">Какую работу ищу: </div>
                                                <Field name="lookingForAJobDescription" validate={[maxLengthCurrent]} component={InputEdit} type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 section-profile-inner-about-description-contacts">
                                            {props.error && <span className="errorValidation">{props.error}</span>}
                                            <div className="style-form-item-social">
                                                <div className="edit-liprofile">Website: </div>
                                                <Field name="contacts.website" validate={[typeCorrectURL]} component={InputEdit} type="text" />
                                            </div>
                                            <div className="style-form-item-social">
                                                <div className="edit-liprofile">Facebook: </div>
                                                <Field name="contacts.facebook" validate={[typeCorrectURL]} component={InputEdit} type="text" />
                                            </div>
                                            <div className="style-form-item-social">
                                                <div className="edit-liprofile">Twitter: </div>
                                                <Field name="contacts.twitter" validate={[typeCorrectURL]} component={InputEdit} type="text" />
                                            </div>
                                            <div className="style-form-item-social">
                                                <div className="edit-liprofile">YouTube: </div>
                                                <Field name="contacts.youtube" validate={[typeCorrectURL]} component={InputEdit} type="text" />
                                            </div>
                                            <div className="style-form-item-social">
                                                <div className="edit-liprofile">GitHub: </div>
                                                <Field name="contacts.github" validate={[typeCorrectURL]} component={InputEdit} type="text" />
                                            </div>
                                            <div className="style-form-item-social">
                                                <div className="edit-liprofile">Instagram: </div>
                                                <Field name="contacts.instagram" validate={[typeCorrectURL]} component={InputEdit} type="text" />
                                            </div>
                                            <div className="style-form-item-social">
                                                <div className="edit-liprofile">Vkontakte: </div>
                                                <Field name="contacts.vk" validate={[typeCorrectURL]} component={InputEdit} type="text" />
                                            </div>
                                            <div className="style-form-item-social">
                                                <div className="edit-liprofile">MainLink: </div>
                                                <Field name="contacts.mainlink" validate={[typeCorrectURL]} component={InputEdit} type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="main-button"><button>SAVE EDITS</button></div>
            </form>
        </>
    )
}

const EditReduxForm = reduxForm({
    form: 'edit'
})(EditProfileForm);

const EditFormControl = ({ onSubmit, ...props }) => {
    return (
        <EditReduxForm onSubmit={onSubmit} {...props} />
    );
}

export default EditFormControl;