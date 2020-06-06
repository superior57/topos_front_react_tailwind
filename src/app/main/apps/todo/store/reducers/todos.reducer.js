import _ from '@lodash';
import * as Actions from '../actions';

const initialState = {
    entities       : [],
    searchText     : '',
    orderBy        : '',
    orderDescending: false,
    routeParams    : {},
    todoDialog     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    }
};

const todosReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_TODOS:
        {
            return {
                ...state,
                entities   : _.keyBy(action.payload, 'id'),
                searchText : '',
                routeParams: action.routeParams
            };
        }
        case Actions.UPDATE_TODOS:
        {
            return {
                ...state,
                entities: _.keyBy(action.payload, 'id')
            };
        }
        case Actions.OPEN_NEW_TODO_DIALOG:
        {
            return {
                ...state,
                todoDialog: {
                    type : 'new',
                    props: {
                        open: true
                    },
                    data : null
                }
            };
        }
        case Actions.CLOSE_NEW_TODO_DIALOG:
        {
            return {
                ...state,
                todoDialog: {
                    type : 'new',
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        case Actions.OPEN_EDIT_TODO_DIALOG:
        {
            return {
                ...state,
                todoDialog: {
                    type : 'edit',
                    props: {
                        open: true
                    },
                    data : action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_TODO_DIALOG:
        {
            return {
                ...state,
                todoDialog: {
                    type : 'edit',
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        case Actions.UPDATE_TODO:
        {
            const todo = action.payload;

            return {
                ...state,
                entities: {
                    ...state.entities,
                    [todo.id]: {...todo}
                }
            };
        }
        case Actions.SET_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.TOGGLE_ORDER_DESCENDING:
        {
            return {
                ...state,
                orderDescending: !state.orderDescending
            };
        }
        case Actions.CHANGE_ORDER:
        {
            return {
                ...state,
                orderBy: action.orderBy
            };
        }
        default:
            return state;
    }
};

export default todosReducer;
