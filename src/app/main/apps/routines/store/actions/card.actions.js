import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const OPEN_CARD_DIALOG = '[ROUTINE APP] OPEN CARD DIALOG';
export const CLOSE_CARD_DIALOG = '[ROUTINE APP] CLOSE CARD DIALOG';
export const UPDATE_CARD = '[ROUTINE APP] UPDATE CARD';
export const REMOVE_CARD = '[ROUTINE APP] REMOVE CARD';

export function openCardDialog(data)
{
    return {
        type   : OPEN_CARD_DIALOG,
        payload: data
    }
}

export function closeCardDialog()
{
    return {
        type: CLOSE_CARD_DIALOG
    }
}

export function updateCard(card)
{
    return (dispatch) => {
        
        const request = axios.put('/action/update', card);
        return request.then((response) => {
            return dispatch({type   : UPDATE_CARD, payload: card})
        });
    }
}

export function removeCard(cardId)
{
    return (dispatch) => {
        
        const request = axios.delete(`/action/remove?actionId=${cardId}`);

        return request.then((response) => dispatch({type: REMOVE_CARD, cardId}));
    };
}
