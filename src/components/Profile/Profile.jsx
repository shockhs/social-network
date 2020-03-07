import React from 'react';
import '../css/Profile/Profile.css';
import ProfileControl from './ProfileInfo/ProfileControl/ProfileControl';
import InputFormContainer from './MyPosts/InputForm/InputFormContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = ({ authId, saveProfileEdits, addNewDialogsMember, isLoading, profile, dislikePost, likePost }) => {
    return (
        <div className="section-profile">
            <div className="section-profile-inner">
                <ProfileControl addNewDialogsMember={addNewDialogsMember} saveProfileEdits={saveProfileEdits} authId={authId} isLoading={isLoading} profile={profile} />
                <InputFormContainer />
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;