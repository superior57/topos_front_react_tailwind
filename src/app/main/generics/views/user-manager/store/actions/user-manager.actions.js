import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';
import * as Actions from '../actions';
import history from '@history';

//Action Types
export const GET_TEAMUSERS = '[USERMANAGER] GET TEAM USERS';
export const GET_NEW_USERMANAGER = '[USERMANAGER] GET NEW USERMANAGER';
export const GET_PLANS = '[USERMANAGER] GET PLANS';
export const SAVE_USERMANAGER = '[USERMANAGER] SAVE USERMANAGER';
export const GET_USERS = '[USERMANAGER] GET USERS';
export const DELETE_USERMANAGER = '[USERMANAGER] DELETE USERMANAGER'
export const GET_USERMANAGER_TYPES = '[USERMANAGER] GET USERMANAGER TYPES';
export const UPLOAD_FILE = '[USERMANAGER] UPLOAD FILE';

//Action Creator
export function getTeamUsers(params)
{
    const request = axios.get(`team/manage/${params.teamId}`);

    return (dispatch) => request.then((response) => 
    {
        dispatch({type   : GET_TEAMUSERS, payload: response.data.data})
    });
}

export function saveUserManager(params, data)
{

    const request = axios.put(`team/manage/${params.teamId}`, data);

    return (dispatch) =>
        request.then((response) => {
            // history.push({pathname: `/apps/team/${params.teamId}`});
            dispatch(showMessage({message: 'Salvo com sucesso'}));
            dispatch({type   : SAVE_USERMANAGER, payload: response.data})
        });
}

