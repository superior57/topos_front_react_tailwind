import React from 'react';

export const CalendarAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/calendar',
            component: React.lazy(() => import('./CalendarApp'))
        }
    ]
};
