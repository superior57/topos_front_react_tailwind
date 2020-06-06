import * as Actions from '../actions';

const initialState = {
    data        : null,
    newUserManager     : null,
    file        : '',
    accountUsers : [],
    basicMembers: [],
    organizerMembers: [],
    invitedMembers : []
};

const userManagerReducer = function (state = initialState, action) {
    
    
    switch ( action.type )
    {
        case Actions.GET_TEAMUSERS:
        {
            return {
                ...state,
                accountUsers: action.payload.accountUsers,
                basicMembers: action.payload.basicMembers,
                organizerMembers: action.payload.organizerMembers,
                invitedMembers : action.payload.invitedMembers
            };
        }
        case Actions.GET_NEW_USERMANAGER:
        {
            return {
                ...state,
                newUserManager: action.payload
            };
        }
        case Actions.SAVE_USERMANAGER:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.UPLOAD_FILE:
        {
            return {
                ...state,
                file: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default userManagerReducer;
