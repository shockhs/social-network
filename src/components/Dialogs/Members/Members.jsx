import React from 'react';
import '../../css/Dialogs/Members/Members.css';
import Member from './Member/Member';

const Members = ({membersData}) => {
    let mainMembersData = membersData.map((member)=>{
        return <Member key={member.id} id={member.id} name={member.name} />;
    });
    return  (
        <ul className="section-dialogs-inner-members">
            {mainMembersData}
        </ul>
    );
}

export default Members;