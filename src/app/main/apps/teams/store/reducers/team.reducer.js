import * as Actions from '../actions';

const initialState = {
    data        : null,
    newTeam     : null,
    file        : '',
};

const teamReducer = function (state = initialState, action) {
    
    
    switch ( action.type )
    {
        case Actions.GET_TEAM:
        {
            return {
                
                ...state,
                data: action.payload
            };
        }
        case Actions.GET_NEW_TEAM:
        {
            return {
                ...state,
                newTeam: action.payload
            };
        }
        case Actions.SAVE_TEAM:
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

export default teamReducer;
