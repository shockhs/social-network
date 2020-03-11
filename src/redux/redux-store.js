import {createStore,combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './loginReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

let reducersBanch = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    authPage: authReducer,
    loginPage: loginReducer,
    form: formReducer
});


const store = createStore(reducersBanch, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

window.store = store;
export default store;