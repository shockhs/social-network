import React from 'react';
import '../../../css/Dialogs/Members/Member/Member.css';
import { NavLink } from 'react-router-dom';

const Member = ({ id, name, count, status }) => {
    return (
        <li className="section-dialogs-inner-members-li">
            <NavLink className="section-dialogs-inner-members-li-url" to={"/home/dialogs/" + id}>{name}
                {status ? <div className="new-message">Новых сообщений: {count}</div> : null}</NavLink>
        </li>
    );
}

export default Member;