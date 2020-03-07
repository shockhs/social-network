import React from 'react';
import '../css/LoginPage/LoginPage.css';
import logo from '../../img/logoin.png';
import { NavLink } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import Preloader from '../commons/Preloader/Preloader';
import { required, maxLength } from '../helpers/validators/validators'
import { Input } from '../commons/FormArea/FormArea';

class LoginPageMain extends React.Component {

    componentDidMount() {
        this.props.history.replace('/login');
    }
    render() {
        return <div>
            <LoginPage {...this.props} />
        </div>
    }
}


const maxLengthCurrent = maxLength(30);

const LoginPageForm = ({ handleSubmit, error, captcha, isLoading }) => {
    return (
        <form onSubmit={handleSubmit} className="section-login-form">
            <Field name="email" validate={[required, maxLengthCurrent]} component={Input} placeholder="Email" type="text" />
            <Field name="password" validate={[required, maxLengthCurrent]} component={Input} placeholder="Password" type="password" />
            <div className="col-sm-12 section-login-form-checkbox">
                <Field name="rememberMe" component="input" type={"checkbox"} />
                <h5>Remember me</h5>
            </div>
            {error && <span className="errorValidation">{error}</span>}
            {captcha
                ? <>
                    <img className="captchaLogin" src={captcha} alt="" />
                    <Field name="captcha" validate={[required]} component={Input} className="captchaInput" />
                </>
                : null}
            <Preloader isLoading={isLoading} />
            <button disabled={isLoading}>Sign In</button>
        </form>
    );
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginPageForm);


const LoginPage = ({ setLoadingStatus, UserLogin, isLoading, captcha }) => {
    const onSubmit = (formData) => {
        setLoadingStatus(true);
        UserLogin(formData);
    }
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 header">
                        <NavLink to="/login"><img className="img-responsive" src={logo} alt="" /></NavLink>
                        <div className="header-button">
                            <a href="https://social-network.samuraijs.com/signUp"><button>Sign Up</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-login">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-4">
                            <div className="section-login-title">
                                <h2>Login Form</h2>
                            </div>
                            <LoginReduxForm captcha={captcha} isLoading={isLoading} onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPageMain;