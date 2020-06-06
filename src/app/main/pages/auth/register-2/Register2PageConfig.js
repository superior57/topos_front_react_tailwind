import React from 'react';

export const Register2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/register-2',
            component: React.lazy(() => import('./Register2Page'))
        }
    ]
};
