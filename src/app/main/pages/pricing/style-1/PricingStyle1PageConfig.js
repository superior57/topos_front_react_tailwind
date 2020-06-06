import React from 'react';

export const PricingStyle1PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/pricing/style-1',
            component: React.lazy(() => import('./PricingStyle1Page'))
        }
    ]
};
