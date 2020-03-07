import React from 'react';
import '../../css/Dialogs/Members/Members.css';
import Member from './Member/Member';
import { useState } from 'react';
import { useEffect } from 'react';
import * as axios from 'axios';

const Members = ({ membersData }) => {
    const instance = axios.create({
        withCredentials: true,
        headers: { "API-KEY": "9832db98-b9d3-460c-9cab-5d06ff193b07" },
        baseURL: "https://social-network.samuraijs.com/api/1.0/"
    });
    let [membersList, setMembersList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get(`/dialogs`);
            if (response.status === 200) {
                setMembersList(response.data);
            }
        }
        fetchData(); 
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get(`/dialogs`);
            if (response.status === 200) {
                setMembersList(response.data);
            }
        }
        setTimeout(() => {
            fetchData();
        }, 15000); // fix after work
    }, [membersList])
    let mainMembersData = membersList.map((member) => {
        return <Member key={member.id} id={member.id} name={member.userName} />;
    });
    return (
        <ul className="section-dialogs-inner-members">
            {mainMembersData}
        </ul>
    );
}

export default Members;