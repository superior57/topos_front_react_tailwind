import * as Actions from 'app/store/actions/fuse';

const initialState = {
    state  : false,
    options: {
        children: 'Hi'
    }
};

const dialog = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.OPEN_DIALOG:
        {
            return {
                ...state,
                state  : true,
                options: {
                    ...state.options,
                    ...action.options
                }
            };
        }
        case Actions.CLOSE_DIALOG:
        {
            return {
                ...state,
                state: false
            };
        }
        default:
        {
            return state;
        }
    }
};

export default dialog;
