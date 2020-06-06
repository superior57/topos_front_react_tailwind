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

function RadioButtonsDoc(props)
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
                        <Typography variant="h6">Radio buttons</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/radio-buttons"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Radio buttons</Typography>
                    <Typography className="description">Radio buttons allow the user to select one option from a set.</Typography>

                    <Typography className="mb-16" component="div">Use <a href="https://material.io/design/components/selection-controls.html#radio-buttons">radio buttons</a> when
                        the user needs to see all available options.
                        If available options can be collapsed, consider using a dropdown menu because it uses less space.</Typography>
                    <Typography className="mb-16" component="div">Radio buttons should have the most commonly used option selected by default.</Typography>
                    <Typography className="mb-16" component="div"><code>{`RadioGroup`}</code> is a helpful wrapper used to group <code>{`Radio`}</code> components that provides an
                        easier API, and proper keyboard accessibility to the group.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/radio-buttons/RadioButtonsGroup.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/RadioButtonsGroup.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Standalone Radio Buttons</Typography>
                    <Typography className="mb-16" component="div"><code>{`Radio`}</code> can also be used standalone, without the wrapper.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/radio-buttons/RadioButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/RadioButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Label placement</Typography>
                    <Typography className="mb-16" component="div">You can change the placement of the label:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/radio-buttons/FormControlLabelPosition.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/FormControlLabelPosition.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <Typography className="mb-16" component="div">All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases,
                        this is done by using the <code>{`&lt;label&gt;`}</code> element (<a href="/api/form-control-label/">FormControlLabel</a>).</Typography>
                    <Typography className="mb-16" component="div">When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the input component.
                        In this case, you can apply the additional attribute (e.g. <code>{`aria-label`}</code>, <code>{`aria-labelledby`}</code>, <code>{`title`}</code>) via
                        the <code>{`inputProps`}</code> property.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
<RadioButton
  value="radioA"
  inputProps={{ 'aria-label': 'Radio A' } }
/>
`}
                    </FuseHighlight>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Guidance</Typography>
                    <ul>
                        <li><a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/">Checkboxes vs. Radio Buttons</a></li>
                    </ul>

                </div>
            }
        />

    );
}

export default RadioButtonsDoc;
