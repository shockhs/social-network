import React from 'react';
import { connect } from 'react-redux';
import { followingCurrentProgress, followUser, unfollowUser, setTotalUserCount, showMore, follow, unfollow, setUsers, setPreloader, getUsers } from '../../redux/usersReducer';
import Users from './Users';
import { getTotalCount, getCurrentPage, getAllUsers, getCountSize, getLoadingStatus, getFollowinStatus } from '../../redux/Selectors/usersSelector';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countSize);
    }

    showMore = (currentPage) => {
        let Page = currentPage + 1;
        this.props.showMore(Page);
        this.props.getUsers(Page, this.props.countSize);
    }
    render() {
        return <Users
            totalCount={this.props.totalCount}
            isLoading={this.props.isLoading}
            statusFollowing={this.props.statusFollowing}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            showMore={this.showMore}
            users={this.props.users}
            currentPage={this.props.currentPage} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        currentPage: getCurrentPage(state),
        countSize: getCountSize(state),
        isLoading: getLoadingStatus(state),
        statusFollowing: getFollowinStatus(state),
        totalCount: getTotalCount(state)
    }
}


export default connect(mapStateToProps, { followingCurrentProgress, getUsers, unfollowUser, followUser, follow, showMore, unfollow, setUsers, setTotalUserCount, setPreloader })(UsersContainer);