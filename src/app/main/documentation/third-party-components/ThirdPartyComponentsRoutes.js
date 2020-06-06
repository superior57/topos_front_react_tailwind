import React from 'react';

export const ThirdPartyComponentsRoutes = [
    {
        path     : '/documentation/third-party-components/formsy',
        component: React.lazy(() => import('./formsy/FormsyDoc'))
    },
    {
        path     : '/documentation/third-party-components/datatables/react-table',
        component: React.lazy(() => import('./datatables/react-table/ReactTableDoc'))
    },
    {
        path     : '/documentation/third-party-components/google-map-react',
        component: React.lazy(() => import('./google-map-react/GoogleMapReactDoc'))
    },
    {
        path     : '/documentation/third-party-components/react-chartjs-2',
        component: React.lazy(() => import('./react-chartjs-2/ReactChartJs2Doc'))
    }
];

