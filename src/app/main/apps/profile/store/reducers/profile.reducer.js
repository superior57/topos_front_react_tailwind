import * as Actions from '../actions';

const initialState = {
    data        : [],
    file        : ''
};

const profileReducer = function (state = initialState, action) {
    
    
    switch ( action.type )
    {
        case Actions.GET_PROFILE:
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
        case Actions.SAVE_PROFILE:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.UPDATE_LANGUAGE:
        {
            return {
                ...state
            };
        }
        default:
        {
            return state;
        }
    }
};

export default profileReducer;
