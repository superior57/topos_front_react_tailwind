import * as Actions from '../actions';
import _ from '@lodash';

const filesReducer = function (state = {}, action) {
    switch ( action.type )
    {
        case Actions.GET_FILES:
            return _.keyBy(action.payload, 'id');
        default:
            return state;
    }
};

export default filesReducer;
