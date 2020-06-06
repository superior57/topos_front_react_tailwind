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

function NoSsrDoc(props)
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
                        <Typography variant="h6">No SSR</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/no-ssr"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">No SSR</Typography>
                    <Typography className="description">NoSsr purposely removes components from the subject of Server Side Rendering (SSR).</Typography>

                    <Typography className="mb-16" component="div">This component can be useful in a variety of situations:</Typography>
                    <ul>
                        <li>Escape hatch for broken dependencies not supporting SSR.</li>
                        <li>Improve the time-to-first paint on the client by only rendering above the fold.</li>
                        <li>Reduce the rendering time on the server.</li>
                        <li>Under too heavy server load, you can turn on service degradation.</li>
                        <li>Improve the time-to-interactive by only rendering what&#39;s important (with the <code>{`defer`}</code> property).</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Client side deferring</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/no-ssr/SimpleNoSsr.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/no-ssr/SimpleNoSsr.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Frame deferring</Typography>
                    <Typography className="mb-16" component="div">In it&#39;s core, the NoSsr component purpose is to <strong>defer rendering</strong>.
                        As it&#39;s illustrated in the previous demo, you can use it to defer the rendering from the server to the client.</Typography>
                    <Typography className="mb-16" component="div">But you can also use it to defer the rendering within the client itself.
                        You can <strong>wait a screen frame</strong> with the <code>{`defer`}</code> property to render the children.
                        React does <a href="https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects">2 commits</a> instead of 1.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/no-ssr/FrameDeferring.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/no-ssr/FrameDeferring.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default NoSsrDoc;
