import * as Actions from '../actions';

const initialState = [];

const boardsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_BOARDS:
        {

            return [
                ...action.payload
            ];
        }
        case Actions.NEW_BOARD:
        {
            return [
                ...state,
                action.board
            ];
        }
        case Actions.RESET_BOARDS:
        {
            return [];
        }
        default:
            return state;
    }
};

export default boardsReducer;
