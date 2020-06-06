import React from 'react';
import AuthRoles from '../auth/authRoles'
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {appsConfigs} from 'app/main/apps/appsConfigs';
import {pagesConfigs} from 'app/main/pages/pagesConfigs';
import {authRoleExamplesConfigs} from 'app/main/auth/authRoleExamplesConfigs';
import {UserManagerConfig} from 'app/main/generics/views/user-manager/UserManagerAppConfig';
import {UserInterfaceConfig} from 'app/main/user-interface/UserInterfaceConfig';
import {DocumentationConfig} from 'app/main/documentation/DocumentationConfig';
import {LoginConfig} from 'app/main/login/LoginConfig';
import {RegisterConfig} from 'app/main/register/RegisterConfig';
import {LogoutConfig} from 'app/main/logout/LogoutConfig';
import {CallbackConfig} from 'app/main/callback/CallbackConfig';


const routeConfigs = [
    ...appsConfigs,
    ...pagesConfigs,
    ...authRoleExamplesConfigs,
    UserManagerConfig,
    UserInterfaceConfig,
    DocumentationConfig,
    LogoutConfig,
    LoginConfig,
    RegisterConfig,
    LogoutConfig,
    CallbackConfig
];

const routes = [
    //if you want to make whole app auth protected by default change defaultAuth for example:
    // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']), or AuthRoles.admin
    // The individual route configs which has auth option won't be overridden.
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','user']),
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to="/apps/accounts"/>
    },
    {
        component: () => <Redirect to="/pages/errors/error-404"/>
    }
];

export default routes;
