import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const ordersReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_ORDERS:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_ORDERS_SEARCH_TEXT:
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

export default ordersReducer;
