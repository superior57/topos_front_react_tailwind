import * as Actions from '../actions';
import _ from '@lodash';

const initialState = null;

const routineReducer = function (state = initialState, action) {
    
    
    switch ( action.type )
    {
        case Actions.GET_BOARD:
        {
            return {
                ...action.payload
            };
        }
        case Actions.CREATE_ROUTINE:
        {
            return {...state}
        }
        case Actions.RESET_BOARD:
        {
            return initialState;
        }
        case Actions.ORDER_LIST:
        {
            return {
                ...state,
                lists: action.payload
            };
        }
        case Actions.ORDER_CARD:
        {
            return {
                ...state,
                lists: action.payload
            };
        }
        case Actions.ADD_LIST:
        {
            return {
                ...state,
                lists: action.payload
            };
        }
        case Actions.ADD_CARD:
        {
            return {
                ...action.payload
            };
        }
        case Actions.ADD_LABEL:
        {
            return {
                ...state,
                labels: [
                    ...state.labels,
                    action.payload
                ]
            };
        }
        case Actions.UPDATE_CARD:
        {
            return {
                ...state,
                // retorna no objeto collection as lists com as actions atualizadas
                lists: state.lists.map(_list => {
                    
                    let lista = _.cloneDeep(_list);  
                    lista.actions = 
                    _list.actions.map(_action => {
                        if (_action.id === action.payload.id) {
                            return action.payload;
                        }
                        return _action;
                    })
                    return lista;
                }),
                // retorna na raiz do objeto collection as actions atualizadas
                actions: state.actions.map((_action) => {
                    if ( _action.id === action.payload.id )
                    {
                        return action.payload;
                    }
                    return _action;
                })
            };
        }
        case Actions.REMOVE_CARD:
        {
            return {
                ...state,
                actions: _.reject(state.actions, {id: action.cardId}),
                lists: state.lists.map(list => {
                    _.set(list, 'actions', _.reject(list.actions, {id: action.cardId}));
                    return list;
                })
            };
        }
        case Actions.RENAME_LIST:
        {
            return {
                ...state,
                lists: state.lists.map(list => {
                    if ( list.id === action.listId )
                    {
                        list.name = action.listTitle
                    }
                    return list;
                })
            };
        }
        case Actions.REMOVE_LIST:
        {
            return {
                ...state,
                lists: _.reject(state.lists, {id: action.listId})
            };
        }
        case Actions.CHANGE_BOARD_SETTINGS:
        {
            return {
                ...state,
                settings: action.payload
            };
        }
        case Actions.DELETE_BOARD:
        {
            return initialState;
        }
        case Actions.RENAME_BOARD:
        {
            return {
                ...state,
                title: action.boardTitle
            };
        }
        case Actions.UPLOAD_FILE:
        {
            return {
                ...state,
                file: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default routineReducer;
