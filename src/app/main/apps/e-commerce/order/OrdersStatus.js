import React from 'react';
import clsx from 'clsx';
import _ from '@lodash';

export const orderStatuses = [
    {
        id   : 1,
        name : 'Awaiting check payment',
        color: 'bg-blue text-white'
    },
    {
        id   : 2,
        name : 'Payment accepted',
        color: 'bg-green text-white'
    },
    {
        id   : 3,
        name : 'Preparing the order',
        color: 'bg-orange text-black'
    },
    {
        id   : 4,
        name : 'Shipped',
        color: 'bg-purple text-white'
    },
    {
        id   : 5,
        name : 'Delivered',
        color: 'bg-green-dark text-white'
    },
    {
        id   : 6,
        name : 'Canceled',
        color: 'bg-pink text-white'
    },
    {
        id   : 7,
        name : 'Refunded',
        color: 'bg-red text-white'
    },
    {
        id   : 8,
        name : 'Payment error',
        color: 'bg-red-dark text-white'
    },
    {
        id   : 9,
        name : 'On pre-order (paid)',
        color: 'bg-purple-light text-white'
    },
    {
        id   : 10,
        name : 'Awaiting bank wire payment',
        color: 'bg-blue text-white'
    },
    {
        id   : 11,
        name : 'Awaiting PayPal payment',
        color: 'bg-blue-dark text-white'
    },
    {
        id   : 12,
        name : 'Remote payment accepted',
        color: 'bg-green-darker text-white'
    },
    {
        id   : 13,
        name : 'On pre-order (not paid)',
        color: 'bg-purple-dark text-white'
    },
    {
        id   : 14,
        name : 'Awaiting Cash-on-delivery payment',
        color: 'bg-blue-darker text-white'
    }
];

function OrdersStatus(props)
{
    return (
        <div className={clsx("inline text-12 p-4 rounded truncate", _.find(orderStatuses, {name: props.name}).color)}>
            {props.name}
        </div>
    );
}

export default OrdersStatus;
