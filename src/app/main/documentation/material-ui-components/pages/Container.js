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

function ContainerDoc(props)
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
                        <Typography variant="h6">Container</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/container"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Container</Typography>
                    <Typography className="description">The container centers your content horizontally. It's the most basic layout element.</Typography>

                    <Typography className="mb-16" component="div">While containers can be nested, most layouts do not require a nested container.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Fluid</Typography>
                    <Typography className="mb-16" component="div">A fluid container width is bounded by that <code>{`maxWidth`}</code> property value.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
<Container maxWidth="sm">
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={true}
                        component={require('app/main/documentation/material-ui-components/components/container/SimpleContainer.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/container/SimpleContainer.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Fixed</Typography>
                    <Typography className="mb-16" component="div">If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can
                        set the <code>{`fixed`}</code> property.
                        The max-width matches the min-width of the current breakpoint.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
<Container fixed>
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={true}
                        component={require('app/main/documentation/material-ui-components/components/container/FixedContainer.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/container/FixedContainer.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default ContainerDoc;
