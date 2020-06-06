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

function SwitchesDoc(props)
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
                        <Typography variant="h6">Switches</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/switches"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Switches</Typography>
                    <Typography className="description">Switches toggle the state of a single setting on or off.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/selection-controls.html#switches">Switches</a> are the preferred
                        way to adjust settings on mobile.
                        The option that the switch controls, as well as the state it’s in,
                        should be made clear from the corresponding inline label.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/switches/Switches.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/Switches.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Switches with FormControlLabel</Typography>
                    <Typography className="mb-16" component="div"><code>{`Switch`}</code> can also be used with a label description thanks to
                        the <code>{`FormControlLabel`}</code> component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/switches/SwitchLabels.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/SwitchLabels.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Switches with FormGroup</Typography>
                    <Typography className="mb-16" component="div"><code>{`FormGroup`}</code> is a helpful wrapper used to group selection controls components that provides an
                        easier API.
                        However, we encourage you to use a <a href="#checkboxes">Checkbox</a> instead.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/switches/SwitchesGroup.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/SwitchesGroup.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized switches</Typography>
                    <Typography className="mb-16" component="div">Here are some examples of customizing the component. You can learn more about this in the
                        <a href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/switches/CustomizedSwitches.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/CustomizedSwitches.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Label placement</Typography>
                    <Typography className="mb-16" component="div">You can change the placement of the label:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/switches/FormControlLabelPosition.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/FormControlLabelPosition.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <Typography className="mb-16" component="div">All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases,
                        this is done by using the <code>{`&lt;label&gt;`}</code> element (<a href="/api/form-control-label/">FormControlLabel</a>).</Typography>
                    <Typography className="mb-16" component="div">When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the input component.
                        In this case, you can apply the additional attribute (e.g. <code>{`aria-label`}</code>, <code>{`aria-labelledby`}</code>, <code>{`title`}</code>) via
                        the <code>{`inputProps`}</code> property.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
<Switch
  value="checkedA"
  inputProps={{ 'aria-label': 'Switch A' } }
/>
`}
                    </FuseHighlight>

                </div>
            }
        />

    );
}

export default SwitchesDoc;
