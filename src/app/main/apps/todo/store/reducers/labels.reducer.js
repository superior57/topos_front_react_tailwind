import * as Actions from '../actions';

const labelsReducer = function (state = [], action) {
    switch ( action.type )
    {
        case Actions.GET_LABELS:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};

export default labelsReducer;