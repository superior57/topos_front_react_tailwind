import React from 'react';

export const ResetPasswordPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/reset-password',
            component: React.lazy(() => import('./ResetPasswordPage'))
        }
    ]
};
