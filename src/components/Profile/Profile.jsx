import React from 'react';
import '../css/Profile/Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import InputFormContainer from './MyPosts/InputForm/InputFormContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = ({authId, isLoading,profile}) => {
    return (
        <div className="section-profile">
            <div className="section-profile-inner">
                <ProfileInfo authId={authId} isLoading={isLoading} profile={profile} />
                <InputFormContainer />
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;