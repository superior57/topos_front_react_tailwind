import {authRoles} from 'app/auth';

const navigationConfig = [
    {
        'id'   : 'project-dashboard',
        'title': 'Home',
        'type' : 'item',
        auth   : authRoles.user,
        'icon' : 'dashboard',
        'url'  : '/apps/dashboards/project'
    },
    {
        'id'      : 'desktop',
        'title'   : 'Desktop',
        'type'    : 'group',
        auth   : authRoles.user,
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'tasks',
                'title': 'Tasks',
                'type' : 'item',
                auth   : authRoles.user,
                'icon' : 'check_box',
                'url'  : '/apps/todo'
            }
        ]
    },
    {
        'id'      : 'communication',
        'title'   : 'Communication',
        'type'    : 'group',
        auth   : authRoles.user,
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'chat',
                'title': 'Chat',
                'type' : 'item',
                auth   : authRoles.user,
                'icon' : 'chat',
                'url'  : '/apps/chat',
            }
        ]
    },
    {
        'id'      : 'management',
        'title'   : 'Management',
        'type'    : 'group',
        auth   : authRoles.user,
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'routines',
                'title': 'Routines',
                'type' : 'item',
                auth   : authRoles.user,
                'icon' : 'assessment',
                'url'  : '/apps/routines',
            },
            {
                'id'   : 'projects',
                'title': 'Projects',
                'type' : 'item',
                auth   : authRoles.user,
                'icon' : 'assessment',
                'url'  : '/apps/projects',
            },
            {
                'id'   : 'teams',
                'title': 'Teams',
                'type' : 'item',
                auth   : authRoles.user,
                'icon' : 'account_circle',
                'url'  : '/apps/teams',
            }
        ]
    },
    {
        'id'      : 'settings',
        'title'   : 'Settings',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'user-profile',
                'title': 'Profile',
                'type' : 'item',
                auth   : authRoles.user,
                'icon' : 'person',
                'url'  : '/apps/profile/myprofile'
            },
            {
                'id'   : 'accounts',
                'title': 'Accounts',
                'type' : 'item',
                auth   : authRoles.all,
                'icon' : 'account_balance',
                'url'  : '/apps/accounts'
            },
            {
                'id'   : 'changelog',
                'title': 'About',
                'type' : 'item',
                auth   : authRoles.all,
                'icon' : 'history',
                'url'  : '/documentation/changelog',
                'badge': {
                    'title': '1.0.0-alpha',
                    'bg'   : 'rgb(236, 12, 142)',
                    'fg'   : '#FFFFFF'
                }
            }
        ]
    },
    {
        'id'   : 'logout',
        'title': 'Logout',
        'type' : 'item',
        auth   : authRoles.all,
        'icon' : 'exit_to_app',
        'url'  : '/logout'
    }
];

export default navigationConfig;
