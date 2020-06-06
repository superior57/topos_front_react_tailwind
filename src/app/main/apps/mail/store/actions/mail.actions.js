import axios from 'axios';

export const GET_MAIL = '[MAIL APP] GET MAIL';
export const UPDATE_MAIL = '[MAIL APP] UPDATE MAIL';
export const TOGGLE_STAR = '[MAIL APP] TOGGLE STAR MAIL';
export const TOGGLE_IMPORTANT = '[MAIL APP] TOGGLE IMPORTANT MAIL';

export function getMail(routeParams)
{
    const request = axios.get('/api/mail-app/mail', {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type       : GET_MAIL,
                routeParams: routeParams,
                payload    : response.data
            })
        );
}

export function toggleStar(mail)
{
    const newMail = {
        ...mail,
        starred: !mail.starred
    };
    return (dispatch) => {
        dispatch({type: TOGGLE_STAR});
        return dispatch(updateMail(newMail));
    }
}

export function toggleImportant(mail)
{
    const newMail = {
        ...mail,
        important: !mail.important
    };

    return (dispatch) => {
        dispatch({type: TOGGLE_IMPORTANT});
        return dispatch(updateMail(newMail));
    }
}


export function updateMail(mail)
{
    const request = axios.post('/api/mail-app/update-mail', mail);

    return (dispatch) =>
        request.then((response) => {
                return dispatch({
                    type   : UPDATE_MAIL,
                    payload: response.data
                })
            }
        );
}
