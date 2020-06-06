import React from 'react';

export const ChatAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/chat',
            component: React.lazy(() => import('./ChatApp'))
        }
    ]
};
