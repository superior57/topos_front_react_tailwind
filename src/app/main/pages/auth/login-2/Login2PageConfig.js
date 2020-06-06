import React from 'react';

export const Login2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/login-2',
            component: React.lazy(() => import('./Login2Page'))
        }
    ]
};
