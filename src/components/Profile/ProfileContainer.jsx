import React from 'react';
import { getUserProfileThunk, saveProfileEdits, getUserProfileStatusThunk } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getLoadingStatus, getProfile, getAuthId } from '../../redux/Selectors/profileSelector';


class ProfileContainer extends React.Component {
    componentDidMount() {
        if (this.props.match.params.userId != null) {
            this.props.getUserProfileStatusThunk(this.props.match.params.userId);
            this.props.getUserProfileThunk(this.props.match.params.userId)
        } else {
            this.props.getUserProfileStatusThunk(this.props.authId);
            this.props.getUserProfileThunk(this.props.authId)
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => ({
    profile: getProfile(state),
    authId: getAuthId(state),
    isLoading: getLoadingStatus(state)
});

export default connect(mapStateToProps, { saveProfileEdits, getUserProfileStatusThunk, getUserProfileThunk })(withRouter(ProfileContainer));