import React from 'react';

export const LockPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/lock',
            component: React.lazy(() => import('./LockPage'))
        }
    ]
};
