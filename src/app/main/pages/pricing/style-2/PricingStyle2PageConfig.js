import React from 'react';

export const PricingStyle2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/pricing/style-2',
            component: React.lazy(() => import('./PricingStyle2Page'))
        }
    ]
};
