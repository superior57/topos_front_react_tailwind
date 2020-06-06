import React from 'react';
import {Redirect} from 'react-router-dom';

export const LabsAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/labs/timeline1',
            component: React.lazy(() => import('./Timeline1'))
        },
        {
            path     : '/labs/timeline2',
            component: React.lazy(() => import('./Timeline2'))
        },
        {
            path     : '/labs/discord',
            component: React.lazy(() => import('./Discord'))
        }
    ]
};
