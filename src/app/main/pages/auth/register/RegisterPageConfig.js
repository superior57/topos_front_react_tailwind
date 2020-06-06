import React from 'react';

export const RegisterPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/register',
            component: React.lazy(() => import('./RegisterPage'))
        }
    ]
};
