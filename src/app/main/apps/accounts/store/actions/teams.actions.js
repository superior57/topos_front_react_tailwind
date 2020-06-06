import axios from 'axios';

export const GET_TEAMS = '[ACCOUNT APP] GET TEAMS';
export const SET_SEARCH_TEXT = '[ACCOUNT APP] SET SEARCH TEXT';
export const TOGGLE_IN_SELECTED_TEAMS = '[ACCOUNT APP] TOGGLE IN SELECTED TEAMS';
export const SELECT_ALL_TEAMS = '[ACCOUNT APP] SELECT ALL TEAMS';
export const DESELECT_ALL_TEAMS = '[ACCOUNT APP] DESELECT ALL TEAMS';
export const OPEN_NEW_TEAM_DIALOG = '[ACCOUNT APP] OPEN NEW TEAM DIALOG';
export const CLOSE_NEW_TEAM_DIALOG = '[ACCOUNT APP] CLOSE NEW TEAM DIALOG';
export const OPEN_EDIT_TEAM_DIALOG = '[ACCOUNT APP] OPEN EDIT TEAM DIALOG';
export const CLOSE_EDIT_TEAM_DIALOG = '[ACCOUNT APP] CLOSE EDIT TEAM DIALOG';
export const ADD_TEAM = '[ACCOUNT APP] ADD TEAM';
export const UPDATE_TEAM = '[ACCOUNT APP] UPDATE TEAM';
export const REMOVE_TEAM = '[ACCOUNT APP] REMOVE TEAM';
export const REMOVE_TEAMS = '[ACCOUNT APP] REMOVE TEAMS';
export const TOGGLE_STARRED_TEAM = '[ACCOUNT APP] TOGGLE STARRED TEAM';
export const TOGGLE_STARRED_TEAMS = '[ACCOUNT APP] TOGGLE STARRED TEAMS';
export const SET_TEAMS_STARRED = '[ACCOUNT APP] SET TEAMS STARRED ';

export function getTeams(routeParams)
{
    
    const request = axios.get('/api/account/teams', {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_TEAMS,
                payload: response.data,
                routeParams
            })
        );
}

export function setSearchText(event)
{
    return {
        type      : SET_SEARCH_TEXT,
        searchText: event.target.value
    }
}

export function toggleInSelectedTeams(teamId)
{
    return {
        type: TOGGLE_IN_SELECTED_TEAMS,
        teamId
    }
}

export function selectAllTeams()
{
    return {
        type: SELECT_ALL_TEAMS
    }
}

export function deSelectAllTeams()
{
    return {
        type: DESELECT_ALL_TEAMS
    }
}

export function openNewTeamDialog()
{
    return {
        type: OPEN_NEW_TEAM_DIALOG
    }
}

export function closeNewTeamDialog()
{
    return {
        type: CLOSE_NEW_TEAM_DIALOG
    }
}

export function openEditTeamDialog(data)
{
    return {
        type: OPEN_EDIT_TEAM_DIALOG,
        data
    }
}

export function closeEditTeamDialog()
{
    return {
        type: CLOSE_EDIT_TEAM_DIALOG
    }
}

export function addTeam(newTeam)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.teams;

        const request = axios.post('/api/account/add-team', {
            newTeam
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_TEAM
                })
            ]).then(() => dispatch(getTeams(routeParams)))
        );
    };
}

export function updateTeam(team)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.teams;

        const request = axios.post('/api/account/update-team', {
            team
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: UPDATE_TEAM
                })
            ]).then(() => dispatch(getTeams(routeParams)))
        );
    };
}

export function removeTeam(teamId)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.teams;

        const request = axios.post('/api/account/remove-team', {
            teamId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_TEAM
                })
            ]).then(() => dispatch(getTeams(routeParams)))
        );
    };
}


export function removeTeams(teamIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.teams;

        const request = axios.post('/api/account/remove-teams', {
            teamIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_TEAMS
                }),
                dispatch({
                    type: DESELECT_ALL_TEAMS
                })
            ]).then(() => dispatch(getTeams(routeParams)))
        );
    };
}

export function toggleStarredTeam(teamId)
{
    return (dispatch, getState) => {
        const {routeParams} = getState().accountsApp.teams;

        const request = axios.post('/api/account/toggle-starred-team', {
            teamId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: TOGGLE_STARRED_TEAM
                })
            ]).then(() => dispatch(getTeams(routeParams)))
        );
    };
}

export function toggleStarredTeams(teamIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.ursers;

        const request = axios.post('/api/account/toggle-starred-teams', {
            teamIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: TOGGLE_STARRED_TEAMS
                }),
                dispatch({
                    type: DESELECT_ALL_TEAMS
                })
            ]).then(() => dispatch(getTeams(routeParams)))
        );
    };
}

export function setTeamsStarred(teamIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.teams;

        const request = axios.post('/api/account/set-teams-starred', {
            teamIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: SET_TEAMS_STARRED
                }),
                dispatch({
                    type: DESELECT_ALL_TEAMS
                })
            ]).then(() => dispatch(getTeams(routeParams)))
        );
    };
}

export function setTeamsUnstarred(teamIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.teams;

        const request = axios.post('/api/account/set-teams-unstarred', {
            teamIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: SET_TEAMS_STARRED
                }),
                dispatch({
                    type: DESELECT_ALL_TEAMS
                })
            ]).then(() => dispatch(getTeams(routeParams)))
        );
    };
}
