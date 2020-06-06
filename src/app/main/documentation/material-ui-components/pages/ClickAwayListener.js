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

function ClickAwayListenerDoc(props)
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
                        <Typography variant="h6">Click away listener</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/click-away-listener"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Click away listener</Typography>
                    <Typography className="description">Detect if a click event happened outside of an element. It listens for clicks that occur somewhere in the
                        document.</Typography>

                    <ul>
                        <li>📦 <a href="/size-snapshot">1.4 kB gzipped</a>.</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple menu dropdown</Typography>
                    <Typography className="mb-16" component="div">For instance, if you need to hide a menu dropdown when people click anywhere else on your page:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/click-away-listener/ClickAway.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/click-away-listener/ClickAway.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">You can find a more advanced demo on the <a href="/components/menus/#menulist-composition">menu documentation
                        section</a>.</Typography>

                </div>
            }
        />

    );
}

export default ClickAwayListenerDoc;
