import { setUserProfileStatus } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';
import Status from './Status';
import { getProfileStatus } from '../../../../redux/Selectors/profileSelector';



let mapStateToProps = (state) => ({
    status: getProfileStatus(state)
});

export default connect(mapStateToProps, { setUserProfileStatus})(Status);