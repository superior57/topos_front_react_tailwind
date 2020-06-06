import axios from 'axios';
import history from '@history';
import BoardModel from '../../model/BoardModel';

export const GET_ROUTINES = '[ROUTINES APP] GET ROUTINES';
export const SET_ROUTINES_SEARCH_TEXT = '[ROUTINES APP] SET ORDERS SEARCH TEXT';
export const RESET_BOARDS = '[SCRUMBOARD APP] RESET BOARDS';
export const NEW_BOARD = '[SCRUMBOARD APP] NEW BOARD';

//Actions
export function getRoutines(params)
{
    const request = axios.get(`collections?type=${params.type}`);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_ROUTINES,
                payload: response.data.data
            })
        );
}

export function setOrdersSearchText(event)
{
    return {
        type      : SET_ROUTINES_SEARCH_TEXT,
        searchText: event.target.value
    }
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

