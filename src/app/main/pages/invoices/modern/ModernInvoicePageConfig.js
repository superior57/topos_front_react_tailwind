import React from 'react';

export const ModernInvoicePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/invoices/modern',
            component: React.lazy(() => import('./ModernInvoicePage'))
        }
    ]
};
