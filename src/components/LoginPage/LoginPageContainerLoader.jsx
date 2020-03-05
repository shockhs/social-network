import { connect } from 'react-redux';
import { UserLogin, setLoadingStatus } from '../../redux/loginReducer';
import LoginPageMain from './LoginPage';
import { withRouter } from 'react-router-dom';

let mapStateToProps = (state) => ({
    isLoading: state.loginPage.isLoading,
    captcha: state.loginPage.captcha
})


export default connect(mapStateToProps, {setLoadingStatus, UserLogin })(withRouter(LoginPageMain));

