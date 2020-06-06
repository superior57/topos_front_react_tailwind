import React from 'react';

export const WorkingWithFuseReactDocRoutes = [
    {
        path     : '/documentation/working-with-fuse-react/development',
        component: React.lazy(() => import('./development/DevelopmentDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/production',
        component: React.lazy(() => import('./production/ProductionDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/project-structure',
        component: React.lazy(() => import('./project-structure/ProjectStructureDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/updating-fuse-react',
        component: React.lazy(() => import('./updating-fuse-react/UpdatingFuseReactDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/theming',
        component: React.lazy(() => import('./theming/ThemingDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/theme-layouts',
        component: React.lazy(() => import('./theme-layouts/ThemeLayoutsDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/page-layouts',
        component: React.lazy(() => import('./page-layouts/PageLayoutsDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/settings',
        component: React.lazy(() => import('./settings/SettingsDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/routing',
        component: React.lazy(() => import('./routing/RoutingDoc'))
    },
    {
        path     : '/documentation/working-with-fuse-react/code-splitting',
        component: React.lazy(() => import('./code-splitting/CodeSplittingDoc'))
    }
];
