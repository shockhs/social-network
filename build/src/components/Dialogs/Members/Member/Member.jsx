import React from 'react';
import '../../../css/Dialogs/Members/Member/Member.css';
import { NavLink } from 'react-router-dom';

const Member = ({id,name}) => {
    return (
        <li className="section-dialogs-inner-members-li">
            <NavLink className="section-dialogs-inner-members-li-url" to={"/dialogs/" + id}>{name}</NavLink>
        </li>
    );
}

export default Member;