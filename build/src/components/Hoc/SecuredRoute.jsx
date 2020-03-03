import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginPageContainerLoader from '../LoginPage/LoginPageContainerLoader';

function SecuredRoute(props) {
    let { component: Component, path } = props;
    return (
        <Route path={path} render={() => {
            if (!props.isAuth) {
                return <LoginPageContainerLoader />;
            }
            return withRouter(<Component />)
        }} />
    );
}

export default SecuredRoute;