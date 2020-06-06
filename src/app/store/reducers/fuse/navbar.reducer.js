import * as Actions from '../../actions/fuse/index';

const initialState = {
    foldedOpen: false,
    mobileOpen: false
};

const navbar = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.TOGGLE_FOLDED_NAVBAR:
        {
            return {
                ...state,
                foldedOpen: !state.foldedOpen
            }
        }
        case Actions.OPEN_FOLDED_NAVBAR:
        {
            return {
                ...state,
                foldedOpen: true
            }
        }
        case Actions.CLOSE_FOLDED_NAVBAR:
        {
            return {
                ...state,
                foldedOpen: false
            }
        }
        case Actions.TOGGLE_MOBILE_NAVBAR:
        {
            return {
                ...state,
                mobileOpen: !state.mobileOpen
            }
        }
        case Actions.OPEN_MOBILE_NAVBAR:
        {
            return {
                ...state,
                mobileOpen: true
            }
        }
        case Actions.CLOSE_MOBILE_NAVBAR:
        {
            return {
                ...state,
                mobileOpen: false
            }
        }
        default:
        {
            return state;
        }
    }
};

export default navbar;