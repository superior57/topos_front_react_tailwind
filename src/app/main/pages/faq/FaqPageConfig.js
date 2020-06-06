import React from 'react';

export const FaqPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/faq',
            component: React.lazy(() => import('./FaqPage'))
        }
    ]
};
