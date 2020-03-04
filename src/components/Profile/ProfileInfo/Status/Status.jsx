import React, { useState, useEffect } from 'react';

const Status = ({ authStatus, status, setUserProfileStatusThunk }) => {
    let [currentStatus, setCurrentStatus] = useState(status);
    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setCurrentStatus(status);
        return () => {
            setCurrentStatus(null);
        }
    }, [status]);

    const changeCurrentMode = () => {
        if (editMode) {
            setUserProfileStatusThunk(currentStatus);
        }
        setEditMode(!editMode);
    }

    const changeCurrentStatus = (object) => {
        setCurrentStatus(object.currentTarget.value)
    }

    return (
        <div>
            {(editMode && (authStatus))
                ? <input onChange={changeCurrentStatus} autoFocus={true} onBlur={changeCurrentMode} value={currentStatus}></input>
                : <span onClick={changeCurrentMode}>{currentStatus || "No status here"}</span>}
        </div>
    )
}

export default Status;