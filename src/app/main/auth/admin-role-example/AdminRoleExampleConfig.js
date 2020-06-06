import {authRoles} from 'app/auth';
import AdminRoleExample from './AdminRoleExample';

export const AdminRoleExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.admin,//['admin']
    routes  : [
        {
            path     : '/auth/admin-role-example',
            component: AdminRoleExample
        }
    ]
};
