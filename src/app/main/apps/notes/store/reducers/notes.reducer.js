import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    entities       : null,
    searchText     : '',
    noteDialogId   : null,
    variateDescSize: true
};

const notesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_NOTES:
        {
            return {
                ...state,
                entities: _.keyBy(action.payload, 'id')
            };
        }
        case Actions.SET_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.TOGGLE_VARIATE_DESC_SIZE:
        {
            return {
                ...state,
                variateDescSize: !state.variateDescSize
            };
        }
        case Actions.OPEN_NOTE_DIALOG:
        {
            return {
                ...state,
                noteDialogId: action.payload
            };
        }
        case Actions.CLOSE_NOTE_DIALOG:
        {
            return {
                ...state,
                noteDialogId: null
            };
        }
        case Actions.CREATE_NOTE:
        {
            return {
                ...state,
                entities: _.cloneDeep(_.assign({[action.note.id]: action.note}, state.entities))
            };
        }
        case Actions.REMOVE_NOTE:
        {
            return {
                ...state,
                entities    : _.cloneDeep(_.omit(state.entities, [action.id])),
                noteDialogId: null
            };
        }
        case Actions.UPDATE_NOTE:
        {
            return {
                ...state,
                entities: _.cloneDeep(_.set(state.entities, action.note.id, action.note))
            };
        }
        default:
        {
            return state;
        }
    }
};

export default notesReducer;
