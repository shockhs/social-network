import React from 'react';
import '../../css/Dialogs/Members/Members.css';
import Member from './Member/Member';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useReducer } from 'react';
import Axios from 'axios';
var _ = require("lodash");


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
/* eslint-disable react-hooks/exhaustive-deps */
    let updateCount = useCallback((number) => {
        dispatch({ type: 'set', number });
    })
/* eslint-enable react-hooks/exhaustive-deps */
    let source = Axios.CancelToken.source(); // axios cancel method
    const fetchData = async () => {
        try {
            const dialogs = await instance.get(`/dialogs`, {
                cancelToken: source.token
            });
            const count = await instance.get(`/dialogs/messages/new/count`, {
                cancelToken: source.token
            });
            if (count.status === 200) {
                updateCount(count.data);
            }
            if (dialogs.status === 200) {
                if (!_.isEqual(membersList, dialogs.data)) {
                    setMembersList(dialogs.data);
                }
            }
        } catch (error) {
            if (Axios.isCancel(error)) {
                console.log('cancel request Members');
            } else {
                throw error;
            }
        }
    }
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        let isCancelled = true;
        if (isCancelled) setInterval(() => { fetchData(); }, 10000);
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            isCancelled = false;
            source.cancel();
        };
    }, [membersList])
    /* eslint-enable react-hooks/exhaustive-deps */
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