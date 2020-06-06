import axios from 'axios';

export const GET_COURSES = '[ACADEMY APP] GET COURSES';
export const GET_CATEGORIES = '[ACADEMY APP] GET CATEGORIES';

export function getCourses()
{
    const request = axios.get('/api/academy-app/courses');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_COURSES,
                payload: response.data
            })
        );
}

export function getCategories()
{
    const request = axios.get('/api/academy-app/categories');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_CATEGORIES,
                payload: response.data
            })
        );
}
