import axios from 'axios';

export const GET_FILES = '[FILE MANAGER APP] GET FILES';

export function getFiles()
{
    const request = axios.get('/api/file-manager-app/files');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_FILES,
                payload: response.data
            })
        );
}
