import React from 'react';
import '../../../scss/Dialogs/Members/Member/Member.scss';
import { NavLink } from 'react-router-dom';

const Member = ({id,name,count}) => {
    return (
        <li className="section-dialogs-inner-members-li">
            <NavLink className="section-dialogs-inner-members-li-url" to={"/home/dialogs/" + id}>{name}
            <div className="new-message">Новых сообщений: {count}</div></NavLink>
        </li>
    );
}

export default Member;