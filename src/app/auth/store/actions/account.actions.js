
export const SET_ACCOUNT_DATA = '[LOGGED ACCOUNT] SET DATA';
export const ACCOUNT_CHANGE = '[LOGGED ACCOUNT] CHANGE';

/**
 * Set User Data
 */
export function setAccountData(account)
{
    return (dispatch) => {

        dispatch({type: SET_ACCOUNT_DATA,payload: account})
    }
}
