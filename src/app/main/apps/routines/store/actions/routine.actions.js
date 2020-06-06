import axios from 'axios';
import {FuseUtils} from '@fuse';
import history from '@history';
import _ from '@lodash';
import {showMessage} from 'app/store/actions/fuse';
import reorder, {reorderQuoteMap} from './reorder';
import * as Actions from './index';
import ListModel from '../../model/ListModel';
import CardModel from '../../model/CardModel';

//Action Creator
export const GET_BOARD = '[ROUTINE APP] GET BOARD';
export const DELETE_BOARD = '[ROUTINE APP] DELETE BOARD';
export const COPY_BOARD = '[ROUTINE APP] COPY BOARD';
export const RENAME_BOARD = '[ROUTINE APP] RENAME BOARD';
export const CHANGE_BOARD_SETTINGS = '[ROUTINE APP] CHANGE BOARD SETTINGS';
export const RESET_BOARD = '[ROUTINE APP] RESET BOARD';
export const ORDER_LIST = '[ROUTINE APP] ORDER LIST';
export const ORDER_CARD = '[ROUTINE APP] ORDER CARD';
export const ADD_CARD = '[ROUTINE APP] ADD CARD';
export const ADD_LIST = '[ROUTINE APP] ADD LIST';
export const ADD_LABEL = '[ROUTINE APP] ADD LABEL';
export const RENAME_LIST = '[ROUTINE APP] RENAME LIST';
export const REMOVE_LIST = '[ROUTINE APP] REMOVE LIST';
export const UPLOAD_FILE = '[ROUTINE APP] UPLOAD FILE';
export const CREATE_ROUTINE = '[ROUTINE APP] CREATE ROUTINE';

export function getBoard(params)
{
    const request = axios.get(`/collection?collectionId=${params.routineId}&type=routine`);

    return (dispatch) =>
        request.then(
            (response) => {
                dispatch({
                    type   : GET_BOARD,
                    payload: response.data.data
                })},
            (error) => {
                console.log(error.response.data);
                history.push({pathname: '/apps/routines'});
            });
}

export function createRoutine(routine)
{
    const request = axios.post(`/collection/create`, routine);

    return (dispatch) => {
        request.then(
            (response) => {
                history.push({pathname: `/apps/routine/${response.data.data.id}`})
                dispatch({type: CREATE_ROUTINE})},
            (error) => {console.log(error)}
        )
    }
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

        const {routine} = getState().routineApp;
        const {lists} = routine;

        const ordered = reorder(
            lists,
            result.source.index,
            result.destination.index
        );

        const request = axios.patch('/collection/list/reorder',
            {
                collectionId: routine.id,
                lists  : ordered
            }
        );

        request.then(() => console.log(`List Order Saved`));
        
        return dispatch({type: ORDER_LIST, payload: ordered});
    }
}

export function reorderCard(result)
{
    return (dispatch, getState) => {
        
        const {routine} = getState().routineApp;
        const {lists} = routine;

        const ordered = reorderQuoteMap(
            lists,
            result.source,
            result.destination
        );

        const request = axios.patch('/action/reorder',
            {
                collectionId: routine.id,
                lists  : ordered
            }
        );

        request.then((response) => {console.log(`Card Order Saved`);});

        return dispatch({type: ORDER_CARD, payload: ordered});
    }
}

export function newCard(boardId, listId, cardTitle)
{
    const data = new CardModel({name: cardTitle});

    const request = axios.post('/action/create',
        {
            collectionId: boardId,
            tListId: listId,
            title: cardTitle
        }
    );
    return (dispatch) =>
        new Promise((resolve, reject) => {
            request.then((response) => {
                resolve(response.data.data);
                return dispatch({
                    type   : ADD_CARD,
                    payload: response.data.data
                });
            });
        });
}


export function newList(boardId, listTitle)
{
    const data = new ListModel({name: listTitle});

    const request = axios.post('collection/list/new',
        {
            collectionId: boardId,
            name: listTitle
        }
    );

    return (dispatch) =>
        request.then((response) => {
            console.log(response)
            dispatch({type: ADD_LIST, payload: response.data.data})
        });
}

export function renameList(boardId, listId, listTitle)
{
    const request = axios.patch('/collection/list/rename',
        {
            collectionId: boardId,
            id: listId,
            name: listTitle
        }
    );

    return (dispatch) =>
        request.then((response) =>
            dispatch({type: RENAME_LIST, listId, listTitle})
        );
}

export function removeList(listId)
{
    const request = axios.delete(`collection/list/remove?listId=${listId}`);

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

            history.push({athname: '/apps/scrumboard/boards'});

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
    const request = axios.patch('/collection/rename',
        {
            id: boardId,
            title: boardTitle
        }
    );

    return (dispatch) =>
        request.then((response) => dispatch({type: RENAME_BOARD, boardTitle}));
}