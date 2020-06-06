import React from 'react';

export const ComingSoonPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/coming-soon',
            component: React.lazy(() => import('./ComingSoonPage'))
        }
    ]
};
