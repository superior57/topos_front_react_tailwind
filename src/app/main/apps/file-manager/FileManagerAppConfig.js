import React from 'react';

export const FileManagerAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/file-manager',
            component: React.lazy(() => import('./FileManagerApp'))
        }
    ]
};
