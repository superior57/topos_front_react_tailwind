import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const OPEN_CARD_DIALOG = '[SCRUMBOARD APP] OPEN CARD DIALOG';
export const CLOSE_CARD_DIALOG = '[SCRUMBOARD APP] CLOSE CARD DIALOG';
export const UPDATE_CARD = '[SCRUMBOARD APP] UPDATE CARD';
export const REMOVE_CARD = '[SCRUMBOARD APP] REMOVE CARD';

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

export function updateCard(boardId, card)
{
    return (dispatch) => {
        const request = axios.post('/api/scrumboard-app/card/update', {
            boardId,
            card
        });

        return request.then((response) => {
            dispatch(showMessage({
                message         : 'Card Saved',
                autoHideDuration: 2000,
                anchorOrigin    : {
                    vertical  : 'top',
                    horizontal: 'right'
                }
            }));

            return dispatch({
                type   : UPDATE_CARD,
                payload: card
            })
        });
    }
}

export function removeCard(boardId, cardId)
{
    return (dispatch) => {
        const request = axios.post('/api/scrumboard-app/card/remove', {
            boardId,
            cardId
        });

        return request.then((response) =>
            dispatch({
                type: REMOVE_CARD,
                boardId,
                cardId
            })
        );
    };
}
