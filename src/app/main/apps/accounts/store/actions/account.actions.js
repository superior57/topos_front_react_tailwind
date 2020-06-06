import axios from 'axios';
import {FuseUtils} from '@fuse';
import {showMessage} from 'app/store/actions/fuse';
import * as Actions from '../actions';

//Action Types
export const GET_ACCOUNT = '[ACCOUNT APP] GET ACCOUNT';
export const GET_NEW_ACCOUNT = '[ACCOUNT APP] GET NEW ACCOUNT';
export const GET_PLANS = '[ACCOUNT APP] GET PLANS';
export const SAVE_ACCOUNT = '[ACCOUNT APP] SAVE ACCOUNT';
export const GET_USERS = '[ACCOUNT APP] GET USERS';
export const DELETE_ACCOUNT = '[ACCOUNT APP] DELETE ACCOUNT'
export const GET_ACCOUNT_TYPES = '[ACCOUNT APP] GET ACCOUNT TYPES';
export const UPLOAD_FILE = '[ACCOUNT APP] UPLOAD FILE';

//Action Creator
export function getAccount(params)
{
    const request = axios.get(`account`,{params});

    return (dispatch) => request.then((response) => 
    {
        const gotAccount = response.data.data;
        const account = {
            id              : gotAccount.id,
            name            : gotAccount.name,
            taxCode         : gotAccount.taxCode,
            avatar          : gotAccount.avatar,
            planId          : gotAccount.planId,
            paymentDetail_name : gotAccount.paymentDetail.name,
            paymentDetail_fullName : gotAccount.paymentDetail.fullName,
            paymentDetail_email : gotAccount.paymentDetail.email,
            paymentDetail_address : gotAccount.paymentDetail.address,
            members : gotAccount.memberships,
            accountTypeId   : gotAccount.accountTypeId
        };
        dispatch({type   : GET_ACCOUNT,payload: account})
    });
}

export function getPlans()
{
    const request = axios.get('plans');

    return (dispatch) => request.then((response) => 
            dispatch({type   : GET_PLANS, payload: response.data.data})
    );
}

export function getAccountTypes()
{
    const request = axios.get('account/types');

    return (dispatch) => request.then((response) => dispatch({type   : GET_ACCOUNT_TYPES,payload: response.data.data}));
}

export function createAccount(data)
{
    let account = {
        name            : data.name,
        taxCode         : data.taxCode,
        avatar          : data.avatar,
        planId          : data.planId,
        members         : data.members,
        accountTypeId   : data.accountTypeId,
        paymentDetail :{ 
            name : data.paymentDetail_fullName,
            fullName : data.paymentDetail_fullName,
            email : data.paymentDetail_email,
            address : data.paymentDetail_address},
    };

    const request = axios.post('account/register', account);

    return (dispatch) =>
        request.then((response) => {
                window.location.href = '/apps/accounts';
                dispatch(showMessage({message: 'Data Saved'}));

                return dispatch({type   : SAVE_ACCOUNT,payload: response.data})
            }
        );
}

export function saveAccount(data)
{
    let account = {
        id              : data.id,
        name            : data.name,
        taxCode         : data.taxCode,
        avatar          : data.avatar,
        planId          : data.planId,
        paymentDetail :{ 
            name : data.paymentDetail_fullName,
            fullName : data.paymentDetail_fullName,
            email : data.paymentDetail_email,
            address : data.paymentDetail_address},
        accountTypeId   : data.accountTypeId
    };

const request = axios.put(`account/${data.id}`, account);

    return (dispatch) =>
        request.then((response) => {
                dispatch(showMessage({message: 'Data Saved'}));
                return dispatch({type   : SAVE_ACCOUNT,payload: response.data})
                
            }
        );
}

export function newAccount()
{
    const data = {
        id              : null,
        name            : '',
        taxCode         : '',
        avatar          : '',
        planId          : '',
        paymentDetail_name : '',
        paymentDetail_fullName : '',
        paymentDetail_email : '',
        paymentDetail_address : '',
        members : [],
        accountTypeId   : ''
    };

    return {
        type   : GET_NEW_ACCOUNT,
        payload: data
    }
}

export function getUsers(params)
{
    const request = axios.get('/api/account/users', {params});

    return (dispatch) =>
        request.then((response) =>
            dispatch({type : GET_USERS, payload: response.data})
        );
}

export function deleteAccount(id)
{
    const request = axios.delete(`account/${id}`);

    return (dispatch) =>
        request.then((response) => 
        {dispatch(Actions.getAccounts());
        dispatch({type : DELETE_ACCOUNT, payload: response.data})});
}

export function activeUser(accountId, userId)
{
    const request = axios.put(`account/user/status/active/${accountId}/${userId}`);

    return (dispatch) =>
        request.then((response) => {
                // dispatch(showMessage({message: 'Data Saved'}));
                this.getAccount(accountId);
                return dispatch({type   : SAVE_ACCOUNT,payload: response.data})
                
            }
        );
}

export function blockUser(accountId, userId)
{
    const request = axios.put(`account/user/status/block/${accountId}/${userId}`);

    return (dispatch) =>
        request.then((response) => {
                // dispatch(showMessage({message: 'Data Saved'}));
                this.getAccount(accountId);
                return dispatch({type   : SAVE_ACCOUNT,payload: response.data})
                
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
