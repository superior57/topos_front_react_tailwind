import React from 'react';
import {Redirect} from 'react-router-dom';

export const MailAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : [
                '/apps/mail/label/:labelHandle/:mailId?',
                '/apps/mail/filter/:filterHandle/:mailId?',
                '/apps/mail/:folderHandle/:mailId?'
            ],
            component: React.lazy(() => import('./MailApp'))
        },
        {
            path     : '/apps/mail',
            component: () => <Redirect to="/apps/mail/inbox"/>
        }
    ]
};
