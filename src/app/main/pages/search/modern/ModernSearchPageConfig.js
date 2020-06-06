import React from 'react';

export const ModernSearchPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/search/modern',
            component: React.lazy(() => import('./ModernSearchPage'))
        }
    ]
};
