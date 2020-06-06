import * as Actions from '../actions';

const initialState = null;

const widgetsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_WIDGETS:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default widgetsReducer;
