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
    let source = Axios.CancelToken.source(); // eslint-disable-next-line
    const [state, dispatch] = useReducer(reducer, initialState);
    let [membersList, setMembersList] = useState([]);
    let updateCount = useCallback((number) => {
        dispatch({ type: 'set', number });
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dialogs = await instance.get(`/dialogs`, {
                    cancelToken: source.token
                });
                const count = await instance.get(`/dialogs/messages/new/count`, {
                    cancelToken: source.token
                });
                let promises = [dialogs, count];
                let response = await Promise.allSettled(promises);
                if (response[1].value.status === 200) {
                    if (count === response[1].value.data) {
                        updateCount(response[1].value.data);
                    }
                    else {
                        console.log('same Members-count data');
                    }
                }
                if (response[0].value.status === 200) {
                    if (!_.isEqual(membersList, response[0].value.data)) {
                        setMembersList(response[0].value.data);
                    } else {
                        console.log('same Members data');
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
        let timer = setInterval(() => { fetchData(); }, 10000);
        fetchData();
        return () => {
            clearInterval(timer);
            source.cancel();
        };// eslint-disable-next-line
    }, [membersList, instance, updateCount])
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