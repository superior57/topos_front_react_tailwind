import axios from 'axios';

export const GET_USERS = '[ACCOUNT APP] GET USERS';
export const SET_SEARCH_TEXT = '[ACCOUNT APP] SET SEARCH TEXT';
export const TOGGLE_IN_SELECTED_USERS = '[ACCOUNT APP] TOGGLE IN SELECTED USERS';
export const SELECT_ALL_USERS = '[ACCOUNT APP] SELECT ALL USERS';
export const DESELECT_ALL_USERS = '[ACCOUNT APP] DESELECT ALL USERS';
export const OPEN_NEW_USER_DIALOG = '[ACCOUNT APP] OPEN NEW USER DIALOG';
export const CLOSE_NEW_USER_DIALOG = '[ACCOUNT APP] CLOSE NEW USER DIALOG';
export const OPEN_EDIT_USER_DIALOG = '[ACCOUNT APP] OPEN EDIT USER DIALOG';
export const CLOSE_EDIT_USER_DIALOG = '[ACCOUNT APP] CLOSE EDIT USER DIALOG';
export const ADD_USER = '[ACCOUNT APP] ADD USER';
export const UPDATE_USER = '[ACCOUNT APP] UPDATE USER';
export const REMOVE_USER = '[ACCOUNT APP] REMOVE USER';
export const REMOVE_USERS = '[ACCOUNT APP] REMOVE USERS';
export const TOGGLE_STARRED_USER = '[ACCOUNT APP] TOGGLE STARRED USER';
export const TOGGLE_STARRED_USERS = '[ACCOUNT APP] TOGGLE STARRED USERS';
export const SET_USERS_STARRED = '[ACCOUNT APP] SET USERS STARRED ';

export function getUsers(routeParams)
{
    const request = axios.get('/api/account/users', {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_USERS,
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

export function toggleInSelectedUsers(userId)
{
    return {
        type: TOGGLE_IN_SELECTED_USERS,
        userId
    }
}

export function selectAllUsers()
{
    return {
        type: SELECT_ALL_USERS
    }
}

export function deSelectAllUsers()
{
    return {
        type: DESELECT_ALL_USERS
    }
}

export function openNewUserDialog()
{
    return {
        type: OPEN_NEW_USER_DIALOG
    }
}

export function closeNewUserDialog()
{
    return {
        type: CLOSE_NEW_USER_DIALOG
    }
}

export function openEditUserDialog(data)
{
    return {
        type: OPEN_EDIT_USER_DIALOG,
        data
    }
}

export function closeEditUserDialog()
{
    return {
        type: CLOSE_EDIT_USER_DIALOG
    }
}

export function addUser(newUser)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.users;

        const request = axios.post('/api/account/add-user', {
            newUser
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_USER
                })
            ]).then(() => dispatch(getUsers(routeParams)))
        );
    };
}

export function updateUser(user)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.users;

        const request = axios.post('/api/account/update-user', {
            user
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: UPDATE_USER
                })
            ]).then(() => dispatch(getUsers(routeParams)))
        );
    };
}

export function removeUser(userId)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.users;

        const request = axios.post('/api/account/remove-user', {
            userId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_USER
                })
            ]).then(() => dispatch(getUsers(routeParams)))
        );
    };
}


export function removeUsers(userIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.users;

        const request = axios.post('/api/account/remove-users', {
            userIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_USERS
                }),
                dispatch({
                    type: DESELECT_ALL_USERS
                })
            ]).then(() => dispatch(getUsers(routeParams)))
        );
    };
}

export function toggleStarredUser(userId)
{
    return (dispatch, getState) => {
        const {routeParams} = getState().accountsApp.users;

        const request = axios.post('/api/account/toggle-starred-user', {
            userId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: TOGGLE_STARRED_USER
                })
            ]).then(() => dispatch(getUsers(routeParams)))
        );
    };
}

export function toggleStarredUsers(userIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.ursers;

        const request = axios.post('/api/account/toggle-starred-users', {
            userIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: TOGGLE_STARRED_USERS
                }),
                dispatch({
                    type: DESELECT_ALL_USERS
                })
            ]).then(() => dispatch(getUsers(routeParams)))
        );
    };
}

export function setUsersStarred(userIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.users;

        const request = axios.post('/api/account/set-users-starred', {
            userIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: SET_USERS_STARRED
                }),
                dispatch({
                    type: DESELECT_ALL_USERS
                })
            ]).then(() => dispatch(getUsers(routeParams)))
        );
    };
}

export function setUsersUnstarred(userIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().accountsApp.users;

        const request = axios.post('/api/account/set-users-unstarred', {
            userIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: SET_USERS_STARRED
                }),
                dispatch({
                    type: DESELECT_ALL_USERS
                })
            ]).then(() => dispatch(getUsers(routeParams)))
        );
    };
}
