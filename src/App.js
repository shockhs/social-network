import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { getAuthStatus, setRedirectUrl } from './redux/authReducer';
import { connect } from 'react-redux';
import LoginPageContainerLoader from './components/LoginPage/LoginPageContainerLoader';
import PreloaderMain from './components/commons/Preloader/PreloaderMain';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';

class App extends React.Component {
  state = {
    url: null
  }

  componentDidMount() {
    this.getAuthStatus();
    if (this.props.isAuth == null) {
      this.setState({
        url: this.props.location.pathname
      });
    }
  }

  async getAuthStatus() {
    await this.props.getAuthStatus();
  }

  render() {
    let { component: path } = this.props;
    let renderComponent;
    if (this.props.isAuth == null) {
      renderComponent = < PreloaderMain isLoading={true} />;
    } else if (this.props.isAuth) {
      renderComponent = <MainPage url={this.state.url} />;
    } else {
      renderComponent = <LoginPageContainerLoader />;
    }
    return <Route path={path} render={() => renderComponent} />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth
})


export default compose(withRouter, connect(mapStateToProps, { setRedirectUrl, getAuthStatus }))(App);


