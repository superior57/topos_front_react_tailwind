import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const accountsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_ACCOUNTS:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_ACCOUNTS_SEARCH_TEXT:
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

export default accountsReducer;
