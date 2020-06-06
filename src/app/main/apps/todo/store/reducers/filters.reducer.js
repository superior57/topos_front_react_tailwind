import * as Actions from '../actions';

const filtersReducer = function (state = [], action) {
    switch ( action.type )
    {
        case Actions.GET_FILTERS:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};

export default filtersReducer;