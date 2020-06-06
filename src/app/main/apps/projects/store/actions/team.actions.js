import axios from 'axios';
import {FuseUtils} from '@fuse';
import {showMessage} from 'app/store/actions/fuse';
import * as Actions from '../actions';

//Action Types
export const GET_TEAM = '[TEAM APP] GET TEAM';
export const GET_NEW_TEAM = '[TEAM APP] GET NEW TEAM';
export const GET_PLANS = '[TEAM APP] GET PLANS';
export const SAVE_TEAM = '[TEAM APP] SAVE TEAM';
export const GET_USERS = '[TEAM APP] GET USERS';
export const DELETE_TEAM = '[TEAM APP] DELETE TEAM'
export const GET_TEAM_TYPES = '[TEAM APP] GET TEAM TYPES';
export const UPLOAD_FILE = '[TEAM APP] UPLOAD FILE';

//Action Creator
export function getTeam(params)
{
    const request = axios.get(`team`,{params});

    return (dispatch) => request.then((response) => 
    {
        const team = response.data.data;
        dispatch({type   : GET_TEAM, payload: team})
    });
}

export function createTeam(data)
{
    let team = {
        name            : data.name,
        avatar          : data.avatar,
        color           : data.color,
        from            : data.from,
        accountId       : data.accountId,
        members         : data.members
    };

    const request = axios.post('team/create', team);

    return (dispatch) =>
        request.then((response) => {
                window.location.href = '/apps/teams';
                return dispatch({type   : SAVE_TEAM, payload: response.data})
            }
        );
}

export function saveTeam(data)
{
    let team = {
        id              : data.id,
        name            : data.name,
        avatar          : data.avatar,
        color           : data.color,
        accountId       : data.accountId,
        from            : data.from
    };

const request = axios.put(`team/${data.id}`, team);

    return (dispatch) =>
        request.then((response) => {
                dispatch(showMessage({message: 'Salvo com sucesso'}));
                return dispatch({type   : SAVE_TEAM,payload: response.data})
                
            }
        );
}

export function newTeam()
{
    const data = {
        id              : null,
        name            : '',
        avatar          : '',
        from            : '',
        color           : '',
        accountId       : '',
        members : []
    };

    return {
        type   : GET_NEW_TEAM,
        payload: data
    }
}

export function getUsers(params)
{
    const request = axios.get('/api/team/users', {params});

    return (dispatch) =>
        request.then((response) =>
            dispatch({type : GET_USERS, payload: response.data})
        );
}

export function deleteTeam(id)
{
    const request = axios.delete(`team/${id}`);

    return (dispatch) =>
        request.then((response) => 
        {dispatch(Actions.getTeams());
        dispatch({type : DELETE_TEAM, payload: response.data})});
}

export function activeUser(teamId, userId)
{
    const request = axios.put(`team/user/status/active/${teamId}/${userId}`);

    return (dispatch) =>
        request.then((response) => {
                // dispatch(showMessage({message: 'Data Saved'}));
                this.getTeam(teamId);
                return dispatch({type   : SAVE_TEAM,payload: response.data})
                
            }
        );
}

export function blockUser(teamId, userId)
{
    const request = axios.put(`team/user/status/block/${teamId}/${userId}`);

    return (dispatch) =>
        request.then((response) => {
                // dispatch(showMessage({message: 'Data Saved'}));
                this.getTeam(teamId);
                return dispatch({type   : SAVE_TEAM,payload: response.data})
                
            }
        );

}

export function UploadFile(file)
{
    const formData = new FormData();
    formData.append('files', file);
    const request = axios.post(`storage/upload`,formData,{headers: {'Content-Type': 'multipart/form-data'}});

    return (dispatch) =>
        request.then((response) => {
                // dispatch(showMessage({message: 'Upload Done'}));
                return dispatch({type : UPLOAD_FILE, payload: response.data})
                
            }
        );
}
