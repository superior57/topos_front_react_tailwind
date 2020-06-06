import axios from 'axios';

export const TOGGLE_QUICK_PANEL = '[QUICK PANEL] TOGGLE QUICK PANEL';
export const GET_QUICK_PANEL_DATA = '[QUICK PANEL] GET DATA';

export function getQuickPanelData()
{
    const request = axios.get('/api/quick-panel/data');
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_QUICK_PANEL_DATA,
                payload: response.data
            })
        );
}

export function toggleQuickPanel()
{
    return {
        type: TOGGLE_QUICK_PANEL
    }
}
