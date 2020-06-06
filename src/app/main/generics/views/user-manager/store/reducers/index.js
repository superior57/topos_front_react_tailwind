import {combineReducers} from 'redux';
import userManager from './user-manager.reducer';

const reducer = combineReducers({
    userManager
});

export default reducer;
