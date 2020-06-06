import React from 'react';

export const ForgotPassword2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/forgot-password-2',
            component: React.lazy(() => import('./ForgotPassword2Page'))
        }
    ]
};
