import history from '@history';
import {setDefaultSettings, setInitialSettings} from 'app/store/actions/fuse';
import _ from '@lodash';
import store from 'app/store';
import * as Actions from 'app/store/actions';
import firebase from 'firebase/app';
import firebaseService from 'app/services/firebaseService';
import auth0Service from 'app/services/auth0Service';
import jwtService from 'app/services/jwtService';

export const SET_USER_DATA = '[USER] SET DATA';
export const REMOVE_USER_DATA = '[USER] REMOVE DATA';
export const USER_LOGGED_OUT = '[USER] LOGGED OUT';


/**
 * Set User Data
 */
export function setUserData(user)
{
    return (dispatch) => {

        /*
        Set User Settings
         */
        dispatch(setDefaultSettings(user.settings));

        /*
        Set User Data
         */
        dispatch({
            type   : SET_USER_DATA,
            payload: user
        })
    }
}

/**
 * Update User Settings
 */
export function updateUserSettings(settings)
{
    return (dispatch, getState) => {
        const oldUser = getState().auth.user;
        const user = _.merge({}, oldUser, {data: {settings}});

        updateUserData(user);

        return dispatch(setUserData(user));
    }
}

/**
 * Update User Shortcuts
 */
export function updateUserShortcuts(shortcuts)
{
    return (dispatch, getState) => {
        const user = getState().auth.user;
        const newUser = {
            ...user,
            data: {
                ...user,
                shortcuts
            }
        };

        updateUserData(newUser);

        return dispatch(setUserData(newUser));
    }
}

/**
 * Remove User Data
 */
export function removeUserData()
{
    return {
        type: REMOVE_USER_DATA
    }
}

/**
 * Logout
 */
export function logoutUser()
{
    return (dispatch, getState) => {

        const user = getState().auth.user;

        if ( !user.role || user.role.length === 0 )// is guest
        {
            return null;
        }

        history.push({
            pathname: '/'
        });

        switch ( user.from )
        {
            case 'firebase':
            {
                firebaseService.signOut();
                break;
            }
            case 'auth0':
            {
                auth0Service.logout();
                break;
            }
            default:
            {
                jwtService.logout();
            }
        }

        dispatch(setInitialSettings());

        dispatch({
            type: USER_LOGGED_OUT
        })
    }
}

/**
 * Update User Data
 */
function updateUserData(user)
{
    if ( !user.role || user.role.length === 0 )// is guest
    {
        return;
    }

    switch ( user.from )
    {
        case 'firebase':
        {
            firebaseService.updateUserData(user)
                .then(() => {
                    store.dispatch(Actions.showMessage({message: "User data saved to firebase"}));
                })
                .catch(error => {
                    store.dispatch(Actions.showMessage({message: error.message}));
                });
            break;
        }
        case 'auth0':
        {
            auth0Service.updateUserData({
                settings : user.settings,
                shortcuts: user.shortcuts
            })
                .then(() => {
                    store.dispatch(Actions.showMessage({message: "User data saved to auth0"}));
                })
                .catch(error => {
                    store.dispatch(Actions.showMessage({message: error.message}));
                });
            break;
        }
        default:
        {
            jwtService.updateUserData(user)
                .then(() => {
                    store.dispatch(Actions.showMessage({message: "User data saved with api"}));
                })
                .catch(error => {
                    store.dispatch(Actions.showMessage({message: error.message}));
                });
            break;
        }
    }
}

/**
 * Set user data from Auth0 token data
 */
export function setUserDataAuth0(tokenData)
{
    const user = {
        role: ['admin'],
        from: 'auth0',
        data: {
            displayName: tokenData.username,
            photoURL   : tokenData.picture,
            email      : tokenData.email,
            settings   : (tokenData.user_metadata && tokenData.user_metadata.settings) ? tokenData.user_metadata.settings : {},
            shortcuts  : (tokenData.user_metadata && tokenData.user_metadata.shortcuts) ? tokenData.user_metadata.shortcuts : []
        }
    };

    return setUserData(user);
}
