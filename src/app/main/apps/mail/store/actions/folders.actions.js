import axios from 'axios';

export const GET_FOLDERS = '[MAIL APP] GET FOLDERS';

export function getFolders()
{
    const request = axios.get('/api/mail-app/folders');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_FOLDERS,
                payload: response.data
            })
        );
}
