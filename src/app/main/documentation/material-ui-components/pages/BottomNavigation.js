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

function BottomNavigationDoc(props)
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
                        <Typography variant="h6">Bottom Navigation</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/bottom-navigation"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Bottom Navigation</Typography>
                    <Typography className="description">Bottom navigation bars allow movement between primary destinations in an app.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/bottom-navigation.html">Bottom navigation</a> bars display three to
                        five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped,
                        the user is taken to the top-level navigation destination associated with that icon.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Bottom Navigation</Typography>
                    <Typography className="mb-16" component="div">When there are only <strong>three</strong> actions, display both icons and text labels at all times.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/bottom-navigation/SimpleBottomNavigation.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/bottom-navigation/SimpleBottomNavigation.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Bottom Navigation with no label</Typography>
                    <Typography className="mb-16" component="div">If there are <strong>four</strong> or <strong>five</strong> actions, display inactive views as icons
                        only.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/bottom-navigation/LabelBottomNavigation.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/bottom-navigation/LabelBottomNavigation.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default BottomNavigationDoc;
