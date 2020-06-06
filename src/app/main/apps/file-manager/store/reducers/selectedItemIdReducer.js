import * as Actions from '../actions';

const selectedItemIdReducer = function (state = "1", action) {
    switch ( action.type )
    {
        case Actions.SET_SELECTED_ITEM_ID:
            return action.payload;
        default:
            return state;
    }
};

export default selectedItemIdReducer;
