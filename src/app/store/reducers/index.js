import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        fuse,
        ...asyncReducers
    });

export default createReducer;
