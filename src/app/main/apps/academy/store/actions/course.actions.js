import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const GET_COURSE = '[ACADEMY APP] GET COURSE';
export const SAVE_COURSE = '[ACADEMY APP] SAVE COURSE';
export const UPDATE_COURSE = '[ACADEMY APP] UPDATE COURSE';

export function getCourse(params)
{
    const request = axios.get('/api/academy-app/course', {params});

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_COURSE,
                payload: response.data
            })
        );
}

export function saveCourse(data)
{

    const request = axios.post('/api/academy-app/course/save', data);

    return (dispatch) =>
        request.then((response) => {

                dispatch(showMessage({message: 'Course Saved'}));

                return dispatch({
                    type   : SAVE_COURSE,
                    payload: response.data
                })
            }
        );
}

export function updateCourse(data)
{

    return (dispatch, getState) => {

        const {id} = getState().academyApp.course;
        const request = axios.post('/api/academy-app/course/update', {id, ...data});

        request.then((response) => {

                dispatch(showMessage({message: 'Course Updated'}));

                return dispatch({
                    type   : UPDATE_COURSE,
                    payload: response.data
                })
            }
        );
    }
}
