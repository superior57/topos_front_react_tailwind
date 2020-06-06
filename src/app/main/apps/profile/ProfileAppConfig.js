import authRoles from '../../../auth/authRoles';
import React from 'react';
import {Redirect} from 'react-router-dom';

export const ProfileAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/profile/:userId',
            auth    : authRoles.noAccount,
            component: React.lazy(() => import('./Profile'))
        },
        {
            path     : '/apps/myprofile',
            auth    : authRoles.noAccount,
            component: React.lazy(() => import('./Profile'))
        },
        {
            path     : '/apps/myprofile',
            auth    : authRoles.noAccount,  
            component: () => <Redirect to="/apps/Profile"/>
        }
    ]
};
