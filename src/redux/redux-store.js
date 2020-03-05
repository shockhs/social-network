import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './loginReducer';

let reducersBanch = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    authPage: authReducer,
    loginPage: loginReducer,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersBanch, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;
export default store;