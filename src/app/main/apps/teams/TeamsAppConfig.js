import authRoles from '../../../auth/authRoles';
import React from 'react';
import {Redirect} from 'react-router-dom';

export const TeamsAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/team/:teamId',
            auth    : authRoles.user,
            component: React.lazy(() => import('./team/Team'))
        },
        {
            path     : '/apps/teams/new',
            auth    : authRoles.user,
            component: React.lazy(() => import('./team/TeamNew'))
        },
        {
            path     : '/apps/teams',
            auth    : authRoles.user,
            component: React.lazy(() => import('./teams/Teams'))
        },
        {
            path     : '/apps/teams',
            auth    : authRoles.user,
            component: () => <Redirect to="/apps/teams"/>
        }
    ]
};
