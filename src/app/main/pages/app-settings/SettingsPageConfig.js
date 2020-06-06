import React from 'react';

export const SettingsPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/settings',
            component: React.lazy(() => import('./SettingsPage'))
        }
    ]
};
