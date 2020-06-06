import React from 'react';

export const LoginPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/login',
            component: React.lazy(() => import('./LoginPage'))
        }
    ]
};
