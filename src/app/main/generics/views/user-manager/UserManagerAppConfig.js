import authRoles from '../../../../auth/authRoles';
import React from 'react';

export const UserManagerConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/user-manager/:teamId',
            auth    : authRoles.user,
            component: React.lazy(() => import('./UserManager'))
        }
    ]
};
