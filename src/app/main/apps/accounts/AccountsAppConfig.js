import authRoles from '../../../auth/authRoles';
import React from 'react';
import {Redirect} from 'react-router-dom';

export const AccountsAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/account/:accountId',
            auth    : authRoles.noAccount,
            component: React.lazy(() => import('./account/Account'))
        },
        {
            path     : '/apps/accounts/new',
            auth    : authRoles.noAccount,
            component: React.lazy(() => import('./account/AccountNew'))
        },
        {
            path     : '/apps/accounts',
            auth    : authRoles.noAccount,
            component: React.lazy(() => import('./accounts/Accounts'))
        },
        {
            path     : '/apps/accounts',
            auth    : authRoles.noAccount,
            component: () => <Redirect to="/apps/accounts"/>
        }
    ]
};
