import axios from 'axios';

export const GET_WIDGETS = '[PROJECT DASHBOARD APP] GET WIDGETS';

export function getWidgets()
{
    const request = axios.get('/api/project-dashboard-app/widgets');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_WIDGETS,
                payload: response.data
            })
        );
}
