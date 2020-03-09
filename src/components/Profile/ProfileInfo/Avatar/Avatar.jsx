import React, { useState } from 'react';
import '../../../css/Profile/ProfileInfo/Avatar/Avatar.css';
import avatar from '../../../../img/default-avatar.png';
import { Redirect } from 'react-router-dom';

const Avatar = ({ photo, authStatus, updateUserProfileAvatar, id, addNewDialogsMember }) => {
    let [redirectStatus, setRedirectStatus] = useState(false);
    let changeAvatar = (e) => {
        if (e.target.files.length) {
            updateUserProfileAvatar(e.target.files[0]);
        }
    }

    let openNewDialog = async () => {
        await addNewDialogsMember(id);
        setRedirectStatus(true);
    }
    return <>
        <img src={photo || avatar} alt="" className="img-responsive img-circle" />
        {authStatus
            ? <><label htmlFor="file-upload" className="custom-file-upload"><span>UPLOAD AVATAR</span></label> <input onChange={changeAvatar} id="file-upload" type="file" /></>
            : <><button onClick={openNewDialog} className="custom-send-message">send message</button></>
        }
        {redirectStatus ? <Redirect to="/home/dialogs" /> : null}
    </>
}

export default Avatar;