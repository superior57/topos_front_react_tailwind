import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
import {setUserData} from './user.actions';
import {setAccountData} from './account.actions';
import * as Actions from 'app/store/actions';
import i18next from 'i18next';
import moment from 'moment';


export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin({email, password})
{

    return (dispatch) =>
        jwtService.signInWithEmailAndPassword(email, password)
            .then((user) => {
                    dispatch(setUserData(user),
                    i18next.changeLanguage(user.language),
                    moment.locale(user.language),
                    setAccountData(user.accountRole.filter(x => x.isActive === true).account)
                    );

                    return dispatch({type: LOGIN_SUCCESS});
                }
            )
            .catch(error => {
                dispatch(Actions.showMessage({message: 'Login Failed',variant: "error" }));
                return dispatch({type   : LOGIN_ERROR,payload: error});
            });
}

export function submitLoginWithFireBase({username, password})
{
    return (dispatch) =>
        firebaseService.auth && firebaseService.auth.signInWithEmailAndPassword(username, password)
            .then(() => {
                return dispatch({
                    type: LOGIN_SUCCESS
                });
            })
            .catch(error => {
                const usernameErrorCodes = [
                    'auth/email-already-in-use',
                    'auth/invalid-email',
                    'auth/operation-not-allowed',
                    'auth/user-not-found',
                    'auth/user-disabled'
                ];
                const passwordErrorCodes = [
                    'auth/weak-password',
                    'auth/wrong-password'
                ];

                const response = {
                    username: usernameErrorCodes.includes(error.code) ? error.message : null,
                    password: passwordErrorCodes.includes(error.code) ? error.message : null
                };

                if ( error.code === 'auth/invalid-api-key' )
                {
                    dispatch(Actions.showMessage({message: error.message}));
                }

                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: response
                });
            });
}
