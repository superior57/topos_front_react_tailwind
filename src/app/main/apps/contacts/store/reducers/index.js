import {combineReducers} from 'redux';
import contacts from './contacts.reducer';
import user from './user.reducer';

const reducer = combineReducers({
    contacts,
    user
});

export default reducer;
