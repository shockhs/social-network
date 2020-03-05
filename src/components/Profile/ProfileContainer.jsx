import React from 'react';
import { getUserProfile, saveProfileEdits, getUserProfileStatus } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getLoadingStatus, getProfile, getAuthId } from '../../redux/Selectors/profileSelector';


class ProfileContainer extends React.Component {
    componentDidMount() {
        if (this.props.match.params.userId != null) {
            this.props.getUserProfileStatus(this.props.match.params.userId);
            this.props.getUserProfile(this.props.match.params.userId)
        } else {
            this.props.getUserProfileStatus(this.props.authId);
            this.props.getUserProfile(this.props.authId)
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

export default connect(mapStateToProps, { saveProfileEdits, getUserProfileStatus, getUserProfile })(withRouter(ProfileContainer));