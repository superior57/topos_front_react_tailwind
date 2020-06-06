import * as Actions from '../actions';

const initialState = {
    data        : null,
    plans       : [],
    newAccount  : null,
    types       : [],
    file        : '',
};

const accountReducer = function (state = initialState, action) {
    
    
    switch ( action.type )
    {
        case Actions.GET_ACCOUNT:
        {
            return {
                
                ...state,
                ...action.payload
            };
        }
        case Actions.GET_NEW_ACCOUNT:
        {
            return {
                ...state,
                newAccount: action.payload
            };
        }
        case Actions.SAVE_ACCOUNT:
        {
            return {
                ...state,
                ...action.payload
            };
        }
        case Actions.GET_PLANS:
        {
            return {
                ...state,
                plans: action.payload
            };
        }
        case Actions.GET_ACCOUNT_TYPES:
        {
            return {
                ...state,
                types: action.payload
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

export default accountReducer;
