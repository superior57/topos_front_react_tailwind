import state from './state.reducer';
import user from './user.reducer';
import contacts from './contacts.reducer';
import chat from './chat.reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    state,
    user,
    contacts,
    chat
});

export default reducer;
