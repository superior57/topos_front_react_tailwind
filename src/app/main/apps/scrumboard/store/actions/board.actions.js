import axios from 'axios';
import {FuseUtils} from '@fuse';
import history from '@history';
import _ from '@lodash';
import {showMessage} from 'app/store/actions/fuse';
import reorder, {reorderQuoteMap} from './reorder';
import * as Actions from './index';
import ListModel from '../../model/ListModel';
import CardModel from '../../model/CardModel';

export const GET_BOARD = '[SCRUMBOARD APP] GET BOARD';
export const DELETE_BOARD = '[SCRUMBOARD APP] DELETE BOARD';
export const COPY_BOARD = '[SCRUMBOARD APP] COPY BOARD';
export const RENAME_BOARD = '[SCRUMBOARD APP] RENAME BOARD';
export const CHANGE_BOARD_SETTINGS = '[SCRUMBOARD APP] CHANGE BOARD SETTINGS';
export const RESET_BOARD = '[SCRUMBOARD APP] RESET BOARD';
export const ORDER_LIST = '[SCRUMBOARD APP] ORDER LIST';
export const ORDER_CARD = '[SCRUMBOARD APP] ORDER CARD';
export const ADD_CARD = '[SCRUMBOARD APP] ADD CARD';
export const ADD_LIST = '[SCRUMBOARD APP] ADD LIST';
export const ADD_LABEL = '[SCRUMBOARD APP] ADD LABEL';
export const RENAME_LIST = '[SCRUMBOARD APP] RENAME LIST';
export const REMOVE_LIST = '[SCRUMBOARD APP] REMOVE LIST';

export function getBoard(params)
{
    const request = axios.get('/api/scrumboard-app/board', {params});

    return (dispatch) =>
        request.then(
            (response) =>
                dispatch({
                    type   : GET_BOARD,
                    payload: response.data
                }),
            (error) => {
                dispatch(showMessage({
                    message         : error.response.data,
                    autoHideDuration: 2000,
                    anchorOrigin    : {
                        vertical  : 'top',
                        horizontal: 'right'
                    }
                }));
                history.push({
                    pathname: '/apps/scrumboard/boards'
                });
            });
}

export function resetBoard()
{
    return {
        type: RESET_BOARD
    };
}

export function reorderList(result)
{
    return (dispatch, getState) => {

        const {board} = getState().scrumboardApp;
        const {lists} = board;

        const ordered = reorder(
            lists,
            result.source.index,
            result.destination.index
        );

        const request = axios.post('/api/scrumboard-app/list/order',
            {
                boardId: board.id,
                lists  : ordered
            }
        );

        request.then((response) => {
            dispatch(showMessage({
                message         : 'List Order Saved',
                autoHideDuration: 2000,
                anchorOrigin    : {
                    vertical  : 'top',
                    horizontal: 'right'
                }
            }));
        });

        return dispatch({
            type   : ORDER_LIST,
            payload: ordered
        });
    }
}

export function reorderCard(result)
{
    return (dispatch, getState) => {

        const {board} = getState().scrumboardApp;
        const {lists} = board;

        const ordered = reorderQuoteMap(
            lists,
            result.source,
            result.destination
        );

        const request = axios.post('/api/scrumboard-app/card/order',
            {
                boardId: board.id,
                lists  : ordered
            }
        );

        request.then((response) => {
            dispatch(showMessage({
                message         : 'Card Order Saved',
                autoHideDuration: 2000,
                anchorOrigin    : {
                    vertical  : 'top',
                    horizontal: 'right'
                }
            }));
        });

        return dispatch({
            type   : ORDER_CARD,
            payload: ordered
        });
    }
}

export function newCard(boardId, listId, cardTitle)
{
    const data = new CardModel({name: cardTitle});

    const request = axios.post('/api/scrumboard-app/card/new',
        {
            boardId,
            listId,
            data
        }
    );
    return (dispatch) =>
        new Promise((resolve, reject) => {
            request.then((response) => {
                resolve(response.data);
                return dispatch({
                    type   : ADD_CARD,
                    payload: response.data
                });
            });
        });
}


export function newList(boardId, listTitle)
{
    const data = new ListModel({name: listTitle});

    const request = axios.post('/api/scrumboard-app/list/new',
        {
            boardId,
            data
        }
    );

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : ADD_LIST,
                payload: response.data
            })
        );
}

export function renameList(boardId, listId, listTitle)
{
    const request = axios.post('/api/scrumboard-app/list/rename',
        {
            boardId,
            listId,
            listTitle
        }
    );

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: RENAME_LIST,
                listId,
                listTitle
            })
        );
}

export function removeList(boardId, listId)
{
    const request = axios.post('/api/scrumboard-app/list/remove',
        {
            boardId,
            listId
        }
    );

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: REMOVE_LIST,
                listId
            })
        );
}

export function addLabel(label)
{
    return (dispatch) => {
        return dispatch({
            type   : ADD_LABEL,
            payload: label
        })
    }
}

export function changeBoardSettings(newSettings)
{
    return (dispatch, getState) => {
        const {board} = getState().scrumboardApp;
        const settings = _.merge(board.settings, newSettings);
        const request = axios.post('/api/scrumboard-app/board/settings/update',
            {
                boardId: board.id,
                settings
            }
        );

        return request.then((response) =>
            dispatch({
                type   : CHANGE_BOARD_SETTINGS,
                payload: response.data
            })
        );
    }
}

export function deleteBoard(boardId)
{
    const request = axios.post('/api/scrumboard-app/board/delete',
        {
            boardId
        }
    );

    return (dispatch) =>
        request.then((response) => {

            history.push({
                pathname: '/apps/scrumboard/boards'
            });

            return dispatch({
                type: DELETE_BOARD
            });
        })
}

export function copyBoard(board)
{
    const newBoard = _.merge(board, {
        id  : FuseUtils.generateGUID(),
        name: board.name + ' (Copied)',
        uri : board.uri + '-copied'
    });
    return (dispatch) => {
        dispatch(Actions.newBoard(newBoard));
        return {type: COPY_BOARD};
    }
}

export function renameBoard(boardId, boardTitle)
{
    const request = axios.post('/api/scrumboard-app/board/rename',
        {
            boardId,
            boardTitle
        }
    );

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: RENAME_BOARD,
                boardTitle
            }));
}
