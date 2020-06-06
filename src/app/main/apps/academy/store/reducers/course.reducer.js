import * as Actions from '../actions';

const initialState = null;

const courseReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_COURSE:
        {
            return {
                ...action.payload
            };
        }
        case Actions.SAVE_COURSE:
        {
            return {
                ...action.payload
            };
        }
        case Actions.UPDATE_COURSE:
        {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default courseReducer;
