import React from 'react';

export const ForgotPasswordPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/forgot-password',
            component: React.lazy(() => import('./ForgotPasswordPage'))
        }
    ]
};
