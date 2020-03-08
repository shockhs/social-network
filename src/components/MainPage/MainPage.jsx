import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Music from '../Music/Music';
import Groups from '../Groups/Groups';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/UsersContainer';
import HeaderContainer from '../Header/HeaderContainer';
import PreloaderPage from '../commons/Preloader/PreloaderPage';

const Dialogs= React.lazy(() => import('../Dialogs/Dialogs'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));


class HomePage extends React.Component {
    componentDidMount() {
        this.props.history.push(this.props.url);
        if (this.props.url === '/login') {
            this.props.history.push('/home');
        }
    }

    render() {
        return (
            <>
                <HeaderContainer />
                <div className="outer-section">
                    <div className="container">
                        <div className="row">
                            <Navbar />
                            <div className="col-sm-8 relative-content">
                                <div className="section-inner">
                                    <React.Suspense fallback={<PreloaderPage isLoading={true} />}>
                                        <Route path="/home/dialogs" render={() => <Dialogs />} />
                                        <Route exact path="/home" render={() => <ProfileContainer />} />
                                        <Route exact path="/home/profile" render={() => <ProfileContainer />} />
                                        <Route exact path="/home/users/:userId" render={() => <ProfileContainer />} />
                                        <Route exact path="/home/users" render={() => <UsersContainer />} />
                                        <Route exact path="/home/news" component={News} />
                                        <Route exact path="/home/music" component={Music} />
                                        <Route exact path="/home/groups" component={Groups} />
                                        <Route exact path="/home/settings" component={Settings} />
                                    </React.Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default withRouter(HomePage);
