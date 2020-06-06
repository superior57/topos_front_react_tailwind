import authRoles from '../../../../auth/authRoles';
import React from 'react';

export const AnalyticsDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.admin,
    routes  : [
        {
            path     : '/apps/dashboards/analytics',
            component: React.lazy(() => import('./AnalyticsDashboardApp'))
        }
    ]
};
