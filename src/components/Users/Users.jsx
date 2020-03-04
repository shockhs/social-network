import React from 'react';
import '../css/Users/Users.css';
import avatar from '../../img/default-avatar.png'
import Preloader from '../commons/Preloader/Preloader';
import { NavLink } from 'react-router-dom';


const Users = ({ totalCount, users, isLoading, showMore, currentPage, followUser, unfollowUser, statusFollowing }) => {
    let usersData = users.map((user) => {
        return (
            <div key={user.id} className="section-users-elements-item col-sm-12">
                <div className="row">
                    <div className="section-users-elements-item-right col-sm-3">
                        <NavLink to={'/home/users/' + user.id}> <img src={user.photos.small != null ? user.photos.small : avatar}
                            alt="" className="img-responsive img-circle center-block" /></NavLink>
                        {!user.followed ?
                            <button disabled={statusFollowing.some(id => id === user.id)} onClick={() => {
                                followUser(user.id);
                            }}>follow</button> :
                            <button disabled={statusFollowing.some(id => id === user.id)} onClick={() => {
                                unfollowUser(user.id);
                            }}>unfollow</button>}
                    </div>
                    <div className="section-users-elements-item-text col-sm-6">
                        <h1>{user.name}</h1>
                        <p>{user.status}</p>
                    </div>
                    <div className="section-users-elements-item-location col-sm-3">
                        <h4>{"user.location.city"}, {"user.location.country"}</h4>
                    </div>
                </div>
            </div >
        );
    });
    return <div className="section-users">
        <div className="section-users-elements">
            <div className="section-users-elements-header">
                <span>Всего пользователей: {totalCount}</span>
            </div>
            <div className="row">
                {usersData}
                <div className="col-sm-12 section-users-elements-status">
                    <Preloader isLoading={isLoading} />
                </div>
                <div className="section-users-elements-showbutton col-sm-12">
                    <div className="col-sm-4 col-sm-offset-4">
                        <button onClick={() => { showMore(currentPage) }}>Show more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default Users;