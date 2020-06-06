import React from 'react';
import {Redirect} from 'react-router-dom';

export const ContactsAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/contacts/:id',
            component: React.lazy(() => import('./ContactsApp'))
        },
        {
            path     : '/apps/contacts',
            component: () => <Redirect to="/apps/contacts/all"/>
        }
    ]
};
