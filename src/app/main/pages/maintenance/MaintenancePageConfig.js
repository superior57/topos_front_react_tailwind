import React from 'react';

export const MaintenancePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/maintenance',
            component: React.lazy(() => import('./MaintenancePage'))
        }
    ]
};
