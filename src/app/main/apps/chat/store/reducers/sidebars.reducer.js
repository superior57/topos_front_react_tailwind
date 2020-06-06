import * as Actions from '../actions';

const initialState = {
    mobileChatsSidebarOpen: false,
    userSidebarOpen       : false,
    contactSidebarOpen    : false
};

const sidebarsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.OPEN_MOBILE_CHATS_SIDEBAR:
        {
            return {
                ...state,
                mobileChatsSidebarOpen: true
            }
        }
        case Actions.CLOSE_MOBILE_CHATS_SIDEBAR:
        {
            return {
                ...state,
                mobileChatsSidebarOpen: false
            }
        }
        case Actions.OPEN_USER_SIDEBAR:
        {
            return {
                ...state,
                userSidebarOpen: true
            }
        }
        case Actions.CLOSE_USER_SIDEBAR:
        {
            return {
                ...state,
                userSidebarOpen: false
            }
        }
        case Actions.OPEN_CONTACT_SIDEBAR:
        {
            return {
                ...state,
                contactSidebarOpen: true
            }
        }
        case Actions.CLOSE_CONTACT_SIDEBAR:
        {
            return {
                ...state,
                contactSidebarOpen: false
            }
        }
        default:
        {
            return state;
        }
    }
};

export default sidebarsReducer;