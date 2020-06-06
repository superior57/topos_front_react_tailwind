import React from 'react';
import {Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';

function RoutingDoc()
{
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="h6">Fuse Routing</Typography>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        Fuse React routing system based on <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer" className="font-bold">
                        react-router</a> and its package <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config" target="_blank"
                                                            rel="noopener noreferrer" className="font-bold">react-router-config</a>
                    </Typography>

                    <Typography className="mb-16" component="p">
                        For the modular approach and route based Fuse settings, we are using config files and generate routes from that files.
                    </Typography>

                    <Typography className="mb-16" component="p">
                        For example, have a look at the code below <FuseHighlight component="code" className="language-bash">MailAppConfig.js</FuseHighlight>. You can override
                        all settings for a particular route as <code>/apps/mail</code> for this example.
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx my-16">
                        {`
                            import MailApp from './MailApp';
                            import React from 'react';
                            import {Redirect} from 'react-router-dom';

                            export const MailAppConfig = {
                                settings: {
                                    layout          : {
                                        style : 'layout1',
                                        config: {
                                            scroll : 'content',
                                            navbar : {
                                                display : true,
                                                folded  : false,
                                                position: 'left'
                                            },
                                            toolbar: {
                                                display : true,
                                                style   : 'fixed',
                                                position: 'below'
                                            },
                                            footer : {
                                                display : true,
                                                style   : 'fixed',
                                                position: 'below'
                                            },
                                            mode   : 'fullwidth'
                                        }
                                    },
                                    customScrollbars: true,
                                    theme           : {
                                        main   : 'default',
                                        navbar : 'mainThemeDark',
                                        toolbar: 'mainThemeLight',
                                        footer : 'mainThemeDark'
                                    }
                                },
                                routes  : [
                                    {
                                        path     : '/apps/mail/label/:labelHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail/filter/:filterHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail/:folderHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail',
                                        component: () => <Redirect to="/apps/mail/inbox"/>
                                    }
                                ]
                            };
                            `}
                    </FuseHighlight>

                    <Typography className="mb-16" component="p">
                        Then we import and generate routes from that file in <code>fuse-configs/fuseRoutes</code>
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx my-16">
                        {`
                                import {appsRoutes} from 'app/main/apps/mail/MailAppConfig.js';
                                import {FuseUtils} from '@fuse';
                                import {Redirect} from 'react-router-dom';
                                import React from 'react';

                                const routeConfigs = [
                                    MailAppConfig
                                ];

                                export const routes = [
                                    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
                                    {
                                        path     : '/',
                                        component: () => <Redirect to="/pages/errors/error-404"/>
                                    }
                                ];
                            `}
                    </FuseHighlight>
                </div>
            }
        />
    );
}

export default RoutingDoc;
