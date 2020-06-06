import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    entities          : null,
    searchText        : '',
    selectedTeamIds: [],
    routeParams       : {},
    teamDialog     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    }
};

const teamsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_TEAMS:
        {
            return {
                ...state,
                entities   : _.keyBy(action.payload, 'id'),
                routeParams: action.routeParams
            };
        }
        case Actions.SET_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.TOGGLE_IN_SELECTED_TEAMS:
        {

            const teamId = action.teamId;

            let selectedTeamIds = [...state.selectedTeamIds];

            if ( selectedTeamIds.find(id => id === teamId) !== undefined )
            {
                selectedTeamIds = selectedTeamIds.filter(id => id !== teamId);
            }
            else
            {
                selectedTeamIds = [...selectedTeamIds, teamId];
            }

            return {
                ...state,
                selectedTeamIds: selectedTeamIds
            };
        }
        case Actions.SELECT_ALL_TEAMS:
        {
            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedTeamIds = arr.map(team => team.id);

            return {
                ...state,
                selectedTeamIds: selectedTeamIds
            };
        }
        case Actions.DESELECT_ALL_TEAMS:
        {
            return {
                ...state,
                selectedTeamIds: []
            };
        }
        case Actions.OPEN_NEW_TEAM_DIALOG:
        {
            return {
                ...state,
                teamDialog: {
                    type : 'new',
                    props: {
                        open: true
                    },
                    data : null
                }
            };
        }
        case Actions.CLOSE_NEW_TEAM_DIALOG:
        {
            return {
                ...state,
                teamDialog: {
                    type : 'new',
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        case Actions.OPEN_EDIT_TEAM_DIALOG:
        {
            return {
                ...state,
                teamDialog: {
                    type : 'edit',
                    props: {
                        open: true
                    },
                    data : action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_TEAM_DIALOG:
        {
            return {
                ...state,
                teamDialog: {
                    type : 'edit',
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        default:
        {
            return state;
        }
    }
};

export default teamsReducer;
