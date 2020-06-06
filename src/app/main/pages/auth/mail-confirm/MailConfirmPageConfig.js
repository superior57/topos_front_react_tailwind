import React from 'react';

export const MailConfirmPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/mail-confirm',
            component: React.lazy(() => import('./MailConfirmPage'))
        }
    ]
};
