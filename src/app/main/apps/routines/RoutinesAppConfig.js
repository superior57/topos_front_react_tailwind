import authRoles from '../../../auth/authRoles';
import React from 'react';
import {Redirect} from 'react-router-dom';

export const RoutinesAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/routine/:routineId',
            auth    : authRoles.user,
            component: React.lazy(() => import('./routine/Board'))
        },
        {
            path     : '/apps/routines/new',
            auth    : authRoles.user,
            component: React.lazy(() => import('./routine/RoutineNew'))
        },
        {
            path     : '/apps/routines',
            auth    : authRoles.user,
            component: React.lazy(() => import('./routines/Routines'))
        },
        {
            path     : '/apps/routines',
            auth    : authRoles.user,
            component: () => <Redirect to="/apps/routines"/>
        }
    ]
};
