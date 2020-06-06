import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const teamsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_TEAMS:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_TEAMS_SEARCH_TEXT:
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

export default teamsReducer;
