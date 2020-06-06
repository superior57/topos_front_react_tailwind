import * as Actions from '../actions';

const contactsReducer = function (state = false, action) {
    switch ( action.type )
    {
        case Actions.OPEN_CHAT_PANEL:
        {
            return true;
        }
        case Actions.CLOSE_CHAT_PANEL:
        {
            return false;
        }
        case Actions.TOGGLE_CHAT_PANEL:
        {
            return !state;
        }
        default:
        {
            return state;
        }
    }
};

export default contactsReducer;