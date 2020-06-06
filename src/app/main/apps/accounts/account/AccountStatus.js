import React from 'react';
import clsx from 'clsx';
import _ from '@lodash';

export const accountStatuses = [
    {
        id   : 1,
        name : 'Startup',
        color: 'bg-pink text-white'
    },
    {
        id   : 2,
        name : 'ScaleUp',
        color: 'bg-red text-white'
    },
    {
        id   : 3,
        name : 'Professional',
        color: 'bg-blue-dark text-white'
    },
    {
        id   : 4,
        name : 'Enterprise',
        color: 'bg-purple-dark text-white'
    }
];

function AccountStatus(props)
{
    return (
        <div className={clsx("inline text-12 p-4 rounded truncate", _.find(accountStatuses, {name: props.name}).color)}>
            {props.name}
        </div>
    );
}

export default AccountStatus;
