import axios from 'axios';
import {FuseUtils} from '@fuse';
import {showMessage} from 'app/store/actions/fuse';
import * as Actions from '../actions';

//Action Types

export const GET_PROFILE = '[PROFILE APP] GET PROFILE';
export const UPLOAD_FILE = '[PROFILE APP] UPLOAD FILE';
export const SAVE_PROFILE = '[PROFILE APP] SAVE PROFILE';
export const UPDATE_LANGUAGE = '[PROFILE APP] UPDATE LANGUAGE';


export function getProfile(params)
{
    const request = axios.get(`user/profile`, {params});
    return (dispatch) =>
        request.then((response) =>{
            dispatch({type : GET_PROFILE, payload: response.data.data})
        });
}

export function updateDefaultLanguage(lng)
{
    const request = axios.put(`user/language?lng=${lng}`);
    return (dispatch) =>
        request.then((response) =>{
            dispatch({type : UPDATE_LANGUAGE})
        });
}
export function saveProfile(data)
{

const request = axios.put(`user/profile?userId=${data.id}`, data);

    return (dispatch) =>
        request.then((response) => {
                dispatch(showMessage({message: 'Data Saved'}));
                return dispatch({type   : SAVE_PROFILE, payload: response.data.data})
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
                return dispatch({type : UPLOAD_FILE, payload: response.data})
                
            }
        );
}

