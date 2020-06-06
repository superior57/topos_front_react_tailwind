import React from 'react';
import {Icon, Typography, Table, TableBody, TableCell, TableRow, TableHead, Paper} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';

/* eslint import/no-webpack-loader-syntax: off */

function FuseAuthorizationDoc()
{
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Fuse Components</Typography>
                        </div>
                        <Typography variant="h6">FuseAuthorization</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseAuthorization</code> is the authorization component of the Fuse React.
                        It restricts the unauthorized user access with looking <b>route configs</b> and <b>user.role</b>.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Setup</Typography>

                    <Typography className="mb-16" component="p">
                        The component should wraps the FuseTheme component.
                    </Typography>

                    <Typography className="mb-16 italic" component="code">
                        src/app/App.js
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {require('!raw-loader!app/App.js')}
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Configuration</Typography>

                    <Typography className="mt-32 mb-8" variant="h6">Route Configuration:</Typography>

                    <Typography className="mb-16" component="p">
                        You need to define authorization (auth) in the <b>route config files</b> for to control the access via permission roles.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="subtitle2">Example Usage:</Typography>

                    <Typography className="mb-16 italic" component="code">
                        src/app/main/auth/admin-role-example/AdminRoleExampleConfig.js
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {require('!raw-loader!app/main/auth/admin-role-example/AdminRoleExampleConfig.js')}
                    </FuseHighlight>

                    <Typography className="my-16" component="p">
                        You can also give different auth values for individual routes with writing auth value inside the route object.
                    </Typography>

                    <Paper className="max-w-md my-16">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-bold text-14">Authorization Role (auth) options</TableCell>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell><code>null</code> or <code>undefined</code></TableCell>
                                    <TableCell>Do not check, allow everyone</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><code>[]</code></TableCell>
                                    <TableCell>Only guest allowed</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><code>[admin,user]</code></TableCell>
                                    <TableCell>Only 'admin' and 'user' roles are allowed</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>

                    <Typography className="mt-48 mb-8" variant="h6">User.role Configuration:</Typography>

                    <Typography className="mb-16" component="p">
                        User <b>role</b> and <b>data</b> are stored at <b>auth.user</b> in the redux store.
                    </Typography>

                    <Typography className="mb-16" component="p">
                        After successful login user.role will be updated and the FuseAuthorization automatically redirects the authorized user.
                    </Typography>

                    <Typography className="mb-16 italic" component="code">
                        src/app/auth/store/reducers/user.reducer.js (initial user state)
                    </Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {`  
                              const initialState = {
                                role: [],//guest
                                data: {
                                    'displayName': 'Eduardo Carone',
                                    'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
                                    'email'      : 'johndoe@withinpixels.com',
                                    shortcuts    : [
                                        'calendar',
                                        'mail',
                                        'contacts',
                                        'todo'
                                    ]
                                }
                            };
                         `}
                    </FuseHighlight>

                    <Paper className="max-w-md my-16">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-bold text-14">User Role options</TableCell>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell><code>null</code> or <code>undefined</code> or <code>[]</code></TableCell>
                                    <TableCell>Guest</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><code>['admin','user']</code> (array)</TableCell>
                                    <TableCell>User has roles 'admin' and 'user'</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><code>"admin"</code> (string)</TableCell>
                                    <TableCell>User has 'admin' role</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>

                    <Typography className="mt-48 mb-8" variant="h6">Navigation Item Configuration:</Typography>

                    <Typography className="mb-16" component="p">
                        You can control the navigation <b>item/group/collapse</b> visibility by adding <b>auth</b> property in <code>src/app/fuse-configs/NavigationConfig.js</code>.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="subtitle2">Example Usage:</Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {`
                                  {
                                    'id'   : 'only-admin-navigation-item',
                                    'title': 'Nav item only for Admin',
                                    'type' : 'item',
                                    'auth' : authRoles.admin,//['admin']
                                    'url'  : '/auth/admin-role-example',
                                    'icon' : 'verified_user'
                                  },
                            `}
                    </FuseHighlight>

                    <Typography className="mt-48 mb-4" variant="h6">Making the whole app auth protected:</Typography>
                    <Typography className="mb-12" variant="subtitle2">On routesConfig.js file</Typography>

                    <Typography className="mb-16" component="p">
                        If you don't want to set auth on every page config;
                        <br/>You can give default auth role value in the <code>src/app/fuse-configs/routesConfig.js</code> file,
                        <br/>Set defaultAuth paramater <code>FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user'])</code>,
                        <br/>The individual route configs which has auth option won't be overridden,
                        <br/>With this configuration below, makes <b>whole app</b> auth protected by default:
                    </Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {`
                                import React from 'react';
                                import {Redirect} from 'react-router-dom';
                                import {FuseUtils} from '@fuse/index';
                                import {appsConfigs} from 'app/main/apps/appsConfigs';
                                import {pagesConfigs} from 'app/main/pages/pagesConfigs';
                                import {authRoleExamplesConfigs} from 'app/main/auth/authRoleExamplesConfigs';
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
                                    UserInterfaceConfig,
                                    DocumentationConfig,
                                    LogoutConfig,
                                    LoginConfig,
                                    RegisterConfig,
                                    LogoutConfig,
                                    CallbackConfig,
                                ];
                                
                                const routes = [
                                    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
                                    {
                                        path     : '/',
                                        exact    : true,
                                        component: () => <Redirect to="/apps/dashboards/analytics"/>
                                    },
                                    {
                                        component: () => <Redirect to="/pages/errors/error-404"/>
                                    }
                                ];
                                
                                export default routes;

                            `}
                    </FuseHighlight>

                </div>
            }
        />
    );
}

export default FuseAuthorizationDoc;
