import React from 'react'
import { useState, useEffect } from 'react';
import ProfileInfo from '../ProfileInfo';
import Preloader from '../../../commons/Preloader/Preloader';
import EditFormControl from '../EditProfile/EditProfile';


const ProfileControl = ({ profile, saveProfileEdits, isLoading, authId }) => {
    let [editMode, setEditMode] = useState(false);
    useEffect(() => {
        setEditMode(editMode);
        return () => {
            setEditMode(null);
        }
    }, [editMode]);

    const changeEditMode = () => {
        setEditMode(!editMode);
    }

    if (!profile) {
        return <Preloader />
    }
    let authStatus = (authId === profile.userId);
    const onSubmit = (formData) => {
        formData = {
            ...formData,
            lookingForAJob: (formData.lookingForAJob === 'true' ? true : false),
            "contacts": {
                website: (formData.contacts.website === "" ? null : formData.contacts.website),
                facebook: (formData.contacts.facebook === "" ? null : formData.contacts.facebook),
                twitter: (formData.contacts.twitter === "" ? null : formData.contacts.twitter),
                youtube: (formData.contacts.youtube === "" ? null : formData.contacts.youtube),
                github: (formData.contacts.github === "" ? null : formData.contacts.github),
                instagram: (formData.contacts.instagram === "" ? null : formData.contacts.instagram),
                vk: (formData.contacts.vk === "" ? null : formData.contacts.vk),
                mainlink: (formData.contacts.mainlink === "" ? null : formData.contacts.mainlink)
            }
        }
        saveProfileEdits(formData).then(() => {
            setEditMode(!editMode)
        });
    }
    return (
        <>
            {(editMode & (authStatus != null))
                ? <EditFormControl initialValues={profile} onSubmit={onSubmit} profile={profile} isLoading={isLoading} authStatus={authStatus} />
                : <><ProfileInfo profile={profile} isLoading={isLoading} authStatus={authStatus} />
                    {authStatus ? <div className="main-button"><button onClick={changeEditMode}>EDIT PROFILE</button></div> : null}</>
            }
        </>
    )
}

export default ProfileControl;