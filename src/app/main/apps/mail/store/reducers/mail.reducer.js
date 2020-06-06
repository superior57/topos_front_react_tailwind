import * as Actions from '../actions';

const initialState = null;

const mailReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MAIL:
        {
            return {
                ...action.payload
            };
        }
        case Actions.UPDATE_MAIL:
        {
            return {
                ...action.payload
            };
        }
        default:
            return state;
    }
};

export default mailReducer;
