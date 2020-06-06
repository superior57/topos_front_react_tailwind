import React from 'react';

export const KnowledgeBasePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/knowledge-base',
            component: React.lazy(() => import('./KnowledgeBasePage'))
        }
    ]
};
