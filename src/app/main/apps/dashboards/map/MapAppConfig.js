import authRoles from '../../../../auth/authRoles';
import React from 'react';

export const MapAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.user,
    routes  : [
        {
            path     : '/apps/maps',
            component: React.lazy(() => import('./MapApp'))
        }
    ]
};
