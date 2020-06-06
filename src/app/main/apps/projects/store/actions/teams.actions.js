import axios from 'axios';

export const GET_TEAMS = '[TEAM APP] GET TEAMS';
export const SET_TEAMS_SEARCH_TEXT = '[TEAM APP] SET ORDERS SEARCH TEXT';

//Actions
export function getTeams()
{
    const request = axios.get('teams');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_TEAMS,
                payload: response.data.data
            })
        );
}

export function setOrdersSearchText(event)
{
    return {
        type      : SET_TEAMS_SEARCH_TEXT,
        searchText: event.target.value
    }
}

