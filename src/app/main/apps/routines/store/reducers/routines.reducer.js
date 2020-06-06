import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const routinesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_ROUTINES:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_ROUTINES_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        default:
        {
            return state;
        }
    }
};

export default routinesReducer;
