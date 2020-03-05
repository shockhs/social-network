import React from 'react';
import '../../../css/Profile/ProfileInfo/Avatar/Avatar.css';
import avatar from '../../../../img/default-avatar.png';

const Avatar = ({ photo, authStatus, updateUserProfileAvatar }) => {
    let changeAvatar = (e) => {
        if (e.target.files.length) {
            updateUserProfileAvatar(e.target.files[0]);
        }
    }
    return <>
        <img src={photo || avatar} alt="" className="img-responsive img-circle" />
        {authStatus ? <><label htmlFor="file-upload" className="custom-file-upload"><span>UPLOAD AVATAR</span></label> <input onChange={changeAvatar} id="file-upload" type="file" /></> : null}
    </>
}

export default Avatar;