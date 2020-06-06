import axios from 'axios';

export const GET_TODOS = '[TODO APP] GET TODOS';
export const UPDATE_TODOS = '[TODO APP] UPDATE TODOS';
export const TOGGLE_STARRED = '[TODO APP] TOGGLE STARRED';
export const TOGGLE_COMPLETED = '[TODO APP] TOGGLE COMPLETED';
export const TOGGLE_IMPORTANT = '[TODO APP] TOGGLE IMPORTANT';
export const UPDATE_TODO = '[TODO APP] UPDATE TODO';
export const ADD_TODO = '[TODO APP] ADD TODO';
export const REMOVE_TODO = '[TODO APP] REMOVE TODO';
export const SET_SEARCH_TEXT = '[TODO APP] SET SEARCH TEXT';
export const OPEN_NEW_TODO_DIALOG = '[TODO APP] OPEN NEW TODO DIALOG';
export const CLOSE_NEW_TODO_DIALOG = '[TODO APP] CLOSE NEW TODO DIALOG';
export const OPEN_EDIT_TODO_DIALOG = '[TODO APP] OPEN EDIT TODO DIALOG';
export const CLOSE_EDIT_TODO_DIALOG = '[TODO APP] CLOSE EDIT TODO DIALOG';
export const TOGGLE_ORDER_DESCENDING = '[TODO APP] TOGGLE ORDER DESCENDING';
export const CHANGE_ORDER = '[TODO APP] CHANGE ORDER';

export function getTodos(params)
{
    const request = axios.get('/api/todo-app/todos', {params});

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type       : GET_TODOS,
                routeParams: params,
                payload    : response.data
            })
        );
}

export function updateTodos()
{
    return (dispatch, getState) => {

        const {routeParams} = getState().todoApp.todos;

        const request = axios.get('/api/todo-app/todos', {
            params: routeParams
        });

        return request.then((response) =>
            dispatch({
                type   : UPDATE_TODOS,
                payload: response.data
            })
        );
    }
}

export function toggleCompleted(todo)
{
    const newTodo = {
        ...todo,
        completed: !todo.completed
    };
    return (dispatch) => (
        Promise.all([
            dispatch({type: TOGGLE_COMPLETED})
        ]).then(() => dispatch(updateTodo(newTodo)))
    )
}

export function toggleStarred(todo)
{
    const newTodo = {
        ...todo,
        starred: !todo.starred
    };
    return (dispatch) => (
        Promise.all([
            dispatch({type: TOGGLE_STARRED})
        ]).then(() => dispatch(updateTodo(newTodo)))
    )
}

export function toggleImportant(todo)
{
    const newTodo = {
        ...todo,
        important: !todo.important
    };

    return (dispatch) => (
        Promise.all([
            dispatch({type: TOGGLE_IMPORTANT})
        ]).then(() => dispatch(updateTodo(newTodo)))
    )
}

export function updateTodo(todo)
{
    const request = axios.post('/api/todo-app/update-todo', todo);

    return (dispatch) =>
        request.then((response) => {
                Promise.all([
                    dispatch({
                        type   : UPDATE_TODO,
                        payload: response.data
                    })
                ]).then(() => dispatch(updateTodos()))
            }
        );
}

export function openNewTodoDialog()
{
    return {
        type: OPEN_NEW_TODO_DIALOG
    }
}

export function closeNewTodoDialog()
{
    return {
        type: CLOSE_NEW_TODO_DIALOG
    }
}

export function openEditTodoDialog(data)
{
    return {
        type: OPEN_EDIT_TODO_DIALOG,
        data
    }
}

export function closeEditTodoDialog()
{
    return {
        type: CLOSE_EDIT_TODO_DIALOG
    }
}

export function addTodo(todo)
{
    const request = axios.post('/api/todo-app/new-todo', todo);

    return (dispatch) =>
        request.then((response) => (
                Promise.all([
                    dispatch({
                        type: ADD_TODO
                    })
                ]).then(() => dispatch(updateTodos()))
            )
        );
}

export function removeTodo(todoId)
{
    const request = axios.post('/api/todo-app/remove-todo', todoId);

    return (dispatch) =>
        request.then((response) => (
                Promise.all([
                    dispatch({
                        type: REMOVE_TODO
                    })
                ]).then(() => dispatch(updateTodos()))
            )
        );
}

export function setSearchText(event)
{
    return {
        type      : SET_SEARCH_TEXT,
        searchText: event.target.value.toLowerCase()
    }
}

export function toggleOrderDescending()
{
    return {
        type: TOGGLE_ORDER_DESCENDING
    }
}

export function changeOrder(orderBy)
{
    return {
        type: CHANGE_ORDER,
        orderBy
    }
}
