import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const GET_ORDER = '[E-COMMERCE APP] GET ORDER';
export const SAVE_ORDER = '[E-COMMERCE APP] SAVE ORDER';

export function getOrder(params)
{
    const request = axios.get('/api/e-commerce-app/order', {params});

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_ORDER,
                payload: response.data
            })
        );
}

export function saveOrder(data)
{
    const request = axios.post('/api/e-commerce-app/order/save', data);

    return (dispatch) =>
        request.then((response) => {

                dispatch(showMessage({message: 'Order Saved'}));

                return dispatch({
                    type   : SAVE_ORDER,
                    payload: response.data
                })
            }
        );
}
