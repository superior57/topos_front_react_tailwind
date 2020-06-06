import * as Actions from '../actions';

const initialState = null;

const orderReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_ORDER:
        {
            return {
                ...action.payload
            };
        }
        case Actions.SAVE_ORDER:
        {
            return {
                ...action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default orderReducer;
