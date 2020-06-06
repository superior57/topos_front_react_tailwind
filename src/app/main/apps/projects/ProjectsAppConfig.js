import authRoles from '../../../auth/authRoles';
import React from 'react';
import {Redirect} from 'react-router-dom';

export const ProjectsAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/project/:projectId',
            auth    : authRoles.user,
            component: React.lazy(() => import('./project/Project'))
        },
        {
            path     : '/apps/projects/new',
            auth    : authRoles.user,
            component: React.lazy(() => import('./project/ProjectNew'))
        },
        {
            path     : '/apps/projects',
            auth    : authRoles.user,
            component: React.lazy(() => import('./projects/Projects'))
        },
        {
            path     : '/apps/projects',
            auth    : authRoles.user,
            component: () => <Redirect to="/apps/projects"/>
        }
    ]
};
