import { updateUserProfileAvatar } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import { getProfilePhotos } from '../../../../redux/Selectors/profileSelector';



let mapStateToProps = (state) => ({
    photos: getProfilePhotos(state)
});

export default connect(mapStateToProps, { updateUserProfileAvatar })(Avatar);