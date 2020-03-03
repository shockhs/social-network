import { UserLogout } from '../../redux/loginReducer';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthLogin } from '../../redux/Selectors/profileSelector';

let mapStateToProps = (state) => ({
    profile: getAuthLogin(state)
});

let HeaderContainer = connect(mapStateToProps, {UserLogout})(Header);
export default HeaderContainer;