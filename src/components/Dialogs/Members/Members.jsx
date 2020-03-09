import React from 'react';
import '../../css/Dialogs/Members/Members.css';
import Member from './Member/Member';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useReducer } from 'react';


const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'set':
            return { count: action.number };
        default:
            throw new Error();
    }
}


const Members = ({ instance }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let [membersList, setMembersList] = useState([]);
    let [updated, setUpdated] = useState(false);
    let updateCount = useCallback((number) => {
        dispatch({ type: 'set', number });
    })
    let myTimeout = setTimeout(function () {
        setUpdated(!updated);
    }, 35000);
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get(`/dialogs`);
            if (response.status === 200) {
                if (membersList !== response.data) {
                    setMembersList(response.data);
                }
            }
        }
        const fetchNewData = async () => {
            const response = await instance.get(`/dialogs/messages/new/count`);
            if (response.status === 200) {
                updateCount(response.data);
            }
        }
        fetchNewData();
        fetchData();
        return () => {
            clearTimeout(myTimeout);
        };
    }, [updated])
    let mainMembersData = membersList.map((member) => {
        return <Member status={member.hasNewMessages} count={member.newMessagesCount} key={member.id} id={member.id} name={member.userName} />;
    });
    return (
        <ul className="section-dialogs-inner-members">
            {mainMembersData}
        </ul>
    );
}

export default Members;