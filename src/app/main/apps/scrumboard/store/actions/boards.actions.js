import axios from 'axios';
import history from '@history';
import BoardModel from '../../model/BoardModel';

export const GET_BOARDS = '[SCRUMBOARD APP] GET BOARDS';
export const RESET_BOARDS = '[SCRUMBOARD APP] RESET BOARDS';
export const NEW_BOARD = '[SCRUMBOARD APP] NEW BOARD';

export function getBoards()
{
    const request = axios.get('/api/scrumboard-app/boards');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_BOARDS,
                payload: response.data
            })
        );
}

export function resetBoards()
{
    return {
        type: RESET_BOARDS
    }
}

export function newBoard(board)
{
    const request = axios.post('/api/scrumboard-app/board/new', {
        board: board || new BoardModel()
    });

    return (dispatch) =>
        request.then((response) => {
                const board = response.data;
                history.push({
                    pathname: '/apps/scrumboard/boards/' + board.id + '/' + board.handle
                });
                return dispatch({
                    type: NEW_BOARD,
                    board
                })
            }
        );
}
