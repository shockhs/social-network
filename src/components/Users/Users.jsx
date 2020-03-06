import React from 'react';
import '../css/Users/Users.css';
import avatar from '../../img/default-avatar.png'
import Preloader from '../commons/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

class Users extends React.Component {
    componentWillUnmount() {
        this.props.setDefaultPage();
    }

    render() {
        let usersData = this.props.users.map((user) => {
            return (
                <div key={user.id + Math.random()} className="section-users-elements-item col-sm-12">
                    <div className="row">
                        <div className="section-users-elements-item-right col-sm-3">
                            <NavLink to={'/home/users/' + user.id}> <img src={user.photos.small != null ? user.photos.small : avatar}
                                alt="" className="img-responsive img-circle center-block" /></NavLink>
                            {!user.followed ?
                                <button disabled={this.props.statusFollowing.some(id => id === user.id)} onClick={() => {
                                    this.props.followUser(user.id);
                                }}>follow</button> :
                                <button disabled={this.props.statusFollowing.some(id => id === user.id)} onClick={() => {
                                    this.props.unfollowUser(user.id);
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
                    <span>Всего пользователей: {this.props.totalCount}</span>
                </div>
                <div className="row">
                    {usersData}
                    <div className="col-sm-12 section-users-elements-status">
                        <Preloader isLoading={this.props.isLoading} />
                    </div>
                    <div className="section-users-elements-showbutton col-sm-12">
                        <div className="col-sm-4 col-sm-offset-4">
                            <button onClick={() => { this.props.showMore(this.props.currentPage) }}>Show more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Users;