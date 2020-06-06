import * as Actions from '../actions';

const initialState = {
    data: {}
};

const account = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_ACCOUNT_DATA:
        {
            return {
                ...initialState,
                ...action.payload
            };
        }
        case Actions.ACCOUNT_CHANGE:
        {
            return initialState;
        }
        default:
        {
            return state
        }
    }
};

export default account;
