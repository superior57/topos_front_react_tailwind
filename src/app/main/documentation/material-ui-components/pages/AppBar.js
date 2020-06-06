import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */
const useStyles = makeStyles(theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
}));

function AppBarDoc(props)
{
    const classes = useStyles();
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Components</Typography>
                        </div>
                        <Typography variant="h6">App Bar</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/app-bar"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">App Bar</Typography>
                    <Typography className="description">The App Bar displays information and actions relating to the current screen.</Typography>

                    <Typography className="mb-16" component="div">The <a href="https://material.io/design/components/app-bars-top.html">top App Bar</a> provides content and actions
                        related to the current screen. It’s used for branding, screen titles, navigation, and actions.</Typography>
                    <Typography className="mb-16" component="div">It can transform into a contextual action bar or used as a navbar.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">App Bar with buttons</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/ButtonAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ButtonAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple App Bar</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/SimpleAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/SimpleAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">App Bar with a primary search field</Typography>
                    <Typography className="mb-16" component="div">A primary searchbar.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/PrimarySearchAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/PrimarySearchAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">App Bar with menu</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/MenuAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/MenuAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">App Bar with search field</Typography>
                    <Typography className="mb-16" component="div">A side searchbar.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/SearchAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/SearchAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Dense (desktop only)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/DenseAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/DenseAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Bottom App Bar</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={true}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/BottomAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/BottomAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Scrolling</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Hide App Bar</Typography>
                    <Typography className="mb-16" component="div">An App Bar that hides on scroll.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={true}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/HideAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/HideAppBar.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Elevate App Bar</Typography>
                    <Typography className="mb-16" component="div">An App Bar that elevates on scroll.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={true}
                        component={require('app/main/documentation/material-ui-components/components/app-bar/ElevateAppBar.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ElevateAppBar.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3"><code>{`useScrollTrigger([options]) =&gt; trigger`}</code></Typography>
                    <Typography className="text-16 mt-32 mb-8" component="h4">Arguments</Typography>
                    <ol>
                        <li><Typography className="mb-16" component="div"><code>{`options`}</code> (<em>Object</em> [optional]):</Typography>
                            <ul>
                                <li><code>{`options.disableHysteresis`}</code> (<em>Boolean</em> [optional]): Defaults to <code>{`false`}</code>. Disable the hysteresis. Ignore the
                                    scroll direction when determining the <code>{`trigger`}</code> value.
                                </li>
                                <li><code>{`options.target`}</code> (<em>Node</em> [optional]): Defaults to <code>{`window`}</code>.</li>
                                <li><code>{`options.threshold`}</code> (<em>Number</em> [optional]): Defaults to <code>{`100`}</code>. Change the <code>{`trigger`}</code> value
                                    when the vertical scroll strictly crosses this threshold (exclusive).
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <Typography className="text-16 mt-32 mb-8" component="h4">Returns</Typography>
                    <Typography className="mb-16" component="div"><code>{`trigger`}</code>: Does the scroll position match the criteria?</Typography>
                    <Typography className="text-16 mt-32 mb-8" component="h4">Examples</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
`}
                    </FuseHighlight>

                </div>
            }
        />

    );
}

export default AppBarDoc;
