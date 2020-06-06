import React from 'react';
import {AuthenticationDocRoutes} from './authentication/AuthenticationDocRoutes';
import {GettingStartedDocRoutes} from './getting-started/GettingStartedDocRoutes';
import {WorkingWithFuseReactDocRoutes} from './working-with-fuse-react/WorkingWithFuseReactDocRoutes';
import {MaterialUIComponentsRoutes} from './material-ui-components/MaterialUIComponentsRoutes';
import {ThirdPartyComponentsRoutes} from './third-party-components/ThirdPartyComponentsRoutes';
import {FuseComponentsRoutes} from './fuse-components/FuseComponentsRoutes';

export const DocumentationConfig = {
    routes: [
        {
            path     : '/documentation/changelog',
            component: React.lazy(() => import('./changelog/ChangelogDoc'))
        },
        ...GettingStartedDocRoutes,
        ...WorkingWithFuseReactDocRoutes,
        ...AuthenticationDocRoutes,
        ...MaterialUIComponentsRoutes,
        ...ThirdPartyComponentsRoutes,
        ...FuseComponentsRoutes
    ]
};

