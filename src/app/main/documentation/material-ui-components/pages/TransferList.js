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

function TransferListDoc(props)
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
                        <Typography variant="h6">Transfer List</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/transfer-list"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Transfer List</Typography>
                    <Typography className="description">A transfer list (or "shuttle") enables the user to move one or more list items between lists.</Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Transfer List</Typography>
                    <Typography className="mb-16" component="div"> For completeness, this example includes buttons for &quot;move all&quot;, but not every transfer list needs
                        these.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/transfer-list/TransferList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transfer-list/TransferList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Enhanced Transfer List</Typography>
                    <Typography className="mb-16" component="div">This example exchanges the &quot;move all&quot; buttons for a &quot;select all / select none&quot; checkbox, and
                        adds a counter.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/transfer-list/SelectAllTransferList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transfer-list/SelectAllTransferList.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default TransferListDoc;
