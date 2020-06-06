import * as Actions from './index';

export const TOGGLE_CHAT_PANEL = '[CHAT PANEL] TOGGLE CHAT PANEL';
export const OPEN_CHAT_PANEL = '[CHAT PANEL] OPEN CHAT PANEL';
export const CLOSE_CHAT_PANEL = '[CHAT PANEL] CLOSE CHAT PANEL';

export function toggleChatPanel()
{
    return {
        type: TOGGLE_CHAT_PANEL
    }
}

export function openChatPanel()
{
    return {
        type: OPEN_CHAT_PANEL
    }
}

export function closeChatPanel()
{
    return (dispatch) => {
        dispatch(Actions.removeSelectedContactId());
        dispatch(Actions.removeChat());
        return dispatch({
            type: CLOSE_CHAT_PANEL
        })
    }
}