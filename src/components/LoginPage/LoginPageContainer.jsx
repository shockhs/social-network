import { connect } from 'react-redux';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import MainPage from '../MainPage/MainPage';
import { getAuthStatusThunk } from '../../redux/authReducer';
import { UserLogin, setLoadingStatus } from '../../redux/loginReducer';

let PreLogin = withAuthRedirect(MainPage);

let mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth,
    loginStatus: state.authPage.successStatus
})

let LoginPageContainer = connect(mapStateToProps, { setLoadingStatus, UserLogin, getAuthStatusThunk })(PreLogin);
export default LoginPageContainer;

