import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    entities       : [],
    routeParams    : {},
    selectedMailIds: [],
    searchText     : ''
};

const mailsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MAILS:
        {

            return {
                ...state,
                entities   : _.keyBy(action.payload, 'id'),
                searchText : '',
                routeParams: action.routeParams
            };
        }
        case Actions.UPDATE_MAILS:
        {
            return {
                ...state,
                entities: _.keyBy(action.payload, 'id')
            };
        }
        case Actions.SELECT_ALL_MAILS:
        {
            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedMailIds = arr.map(mail => mail.id);

            return {
                ...state,
                selectedMailIds
            };
        }
        case Actions.DESELECT_ALL_MAILS:
        {
            return {
                ...state,
                selectedMailIds: []
            };
        }
        case Actions.SELECT_MAILS_BY_PARAMETER:
        {
            const filter = action.payload;
            const arr = Object.keys(state.entities).map(k => state.entities[k]);
            const selectedMailIds = arr.filter(mail => mail[filter.parameter] === filter.value)
                .map(mail => mail.id);
            return {
                ...state,
                selectedMailIds
            };
        }
        case Actions.TOGGLE_IN_SELECTED_MAILS:
        {

            const mailId = action.mailId;

            let selectedMailIds = [...state.selectedMailIds];

            if ( selectedMailIds.find(id => id === mailId) !== undefined )
            {
                selectedMailIds = selectedMailIds.filter(id => id !== mailId);
            }
            else
            {
                selectedMailIds = [...selectedMailIds, mailId];
            }

            return {
                ...state,
                selectedMailIds
            };
        }
        case Actions.SET_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        default:
            return state;
    }
};

export default mailsReducer;
