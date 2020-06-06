import sidebars from './sidebars.reducer';
import user from './user.reducer';
import contacts from './contacts.reducer';
import chat from './chat.reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    sidebars,
    user,
    contacts,
    chat
});

export default reducer;
