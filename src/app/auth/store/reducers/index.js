import {combineReducers} from 'redux';
import user from './user.reducer';
import login from './login.reducer';
import register from './register.reducer';
import account from './account.reducer';

const authReducers = combineReducers({
    user,
    login,
    register,
    account
});

export default authReducers;