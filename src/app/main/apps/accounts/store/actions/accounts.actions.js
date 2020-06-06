import axios from 'axios';

export const GET_ACCOUNTS = '[ACCOUNT APP] GET ACCOUNTS';
export const SET_ACCOUNTS_SEARCH_TEXT = '[ACCOUNT APP] SET ORDERS SEARCH TEXT';

//Actions
export function getAccounts()
{
    const request = axios.get('accounts');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_ACCOUNTS,
                payload: response.data.data
            })
        );
}

export function setOrdersSearchText(event)
{
    return {
        type      : SET_ACCOUNTS_SEARCH_TEXT,
        searchText: event.target.value
    }
}

