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

function SelectsDoc(props)
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
                        <Typography variant="h6">Selects</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/selects"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Selects</Typography>
                    <Typography className="description">Select components are used for collecting user provided information from a list of options.</Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Select</Typography>
                    <Typography className="mb-16" component="div">Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the
                        emitting element.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/selects/SimpleSelect.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SimpleSelect.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Native Select</Typography>
                    <Typography className="mb-16" component="div">As the user experience can be improved on mobile using the native select of the platform,
                        we allow such pattern.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/selects/NativeSelects.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/NativeSelects.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized selects</Typography>
                    <Typography className="mb-16" component="div">Here are some examples of customizing the component. You can learn more about this in the
                        <a href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div">The first step is to style the <code>{`InputBase`}</code> component.
                        Once it&#39;s styled, you can either use it directly as a text field or provide it to the select <code>{`input`}</code> property to have
                        a <code>{`select`}</code> field.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/selects/CustomizedSelects.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/CustomizedSelects.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Multiple Select</Typography>
                    <Typography className="mb-16" component="div">The <code>{`Select`}</code> component can handle multiple selections.
                        It&#39;s enabled with the <code>{`multiple`}</code> property.</Typography>
                    <Typography className="mb-16" component="div">Like with the single selection, you can pull out the new value by accessing <code>{`event.target.value`}</code> in
                        the <code>{`onChange`}</code> callback. It&#39;s always an array.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/selects/MultipleSelect.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelect.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Controlled Open Select</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/selects/ControlledOpenSelect.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/ControlledOpenSelect.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">With a Dialog</Typography>
                    <Typography className="mb-16" component="div">While it&#39;s discouraged by the Material Design specification, you can use a select inside a
                        dialog.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/selects/DialogSelect.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/DialogSelect.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Text Fields</Typography>
                    <Typography className="mb-16" component="div">The <code>{`TextField`}</code> wrapper component is a complete form control including a label, input and help
                        text. You can find an example with the select mode <a href="/components/text-fields/#textfield">in this section</a>.</Typography>

                </div>
            }
        />

    );
}

export default SelectsDoc;
