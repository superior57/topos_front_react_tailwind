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

function SteppersDoc(props)
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
                        <Typography variant="h6">Steppers</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/steppers"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Steppers</Typography>
                    <Typography className="description">Steppers convey progress through numbered steps. It provides a wizard-like workflow.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/archive/guidelines/components/steppers.html">Steppers</a> display progress through a
                        sequence of logical and numbered steps. They may also be used for navigation.
                        Steppers may display a transient feedback message after a step is saved.</Typography>
                    <Typography className="mb-16" component="div"><strong>Types of Steps</strong></Typography>
                    <ul>
                        <li>Editable</li>
                        <li>Non-editable</li>
                        <li>Mobile</li>
                        <li>Optional</li>
                    </ul>
                    <Typography className="mb-16" component="div"><strong>Types of Steppers</strong></Typography>
                    <ul>
                        <li>Horizontal</li>
                        <li>Vertical</li>
                        <li>Linear</li>
                        <li>Non-linear</li>
                    </ul>
                    <blockquote>
                        <Typography className="mb-16" component="div"><strong>Note:</strong> Steppers are no longer documented in the Material Design documentation.</Typography>
                    </blockquote>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Linear</Typography>
                    <Typography className="mb-16" component="div">The <code>{`Stepper`}</code> can be controlled by passing the current step index (zero-based) as
                        the <code>{`activeStep`}</code> property. <code>{`Stepper`}</code> orientation is set using the <code>{`orientation`}</code> property.</Typography>
                    <Typography className="mb-16" component="div">This example also shows the use of an optional step by placing the <code>{`optional`}</code> property on the
                        second <code>{`Step`}</code> component. Note that it&#39;s up to you to manage when an optional step is skipped. Once you&#39;ve determined this for a
                        particular step you must set <code>{`completed={false}`}</code> to signify that even though the active step index has gone beyond the optional step,
                        it&#39;s not actually complete.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/HorizontalLinearStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalLinearStepper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Non-linear</Typography>
                    <Typography className="mb-16" component="div">Non-linear steppers allow users to enter a multi-step flow at any point.</Typography>
                    <Typography className="mb-16" component="div">This example is similar to the regular horizontal stepper, except steps are no longer automatically set
                        to <code>{`disabled={true}`}</code> based on the <code>{`activeStep`}</code> property.</Typography>
                    <Typography className="mb-16" component="div">We&#39;ve used the <code>{`StepButton`}</code> here to demonstrate clickable step labels as well as setting
                        the <code>{`completed`}</code>
                        flag however because steps can be accessed in a non-linear fashion it&#39;s up to your own implementation to
                        determine when all steps are completed (or even if they need to be completed).</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Linear - Alternative Label</Typography>
                    <Typography className="mb-16" component="div">Labels can be placed below the step icon by setting the <code>{`alternativeLabel`}</code> property on
                        the <code>{`Stepper`}</code> component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/HorizontalLinearAlternativeLabelStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalLinearAlternativeLabelStepper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Non Linear - Alternative Label</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearAlternativeLabelStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearAlternativeLabelStepper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Non Linear - Error Step</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepperWithError.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepperWithError.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Vertical Stepper</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/VerticalLinearStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/VerticalLinearStepper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Stepper</Typography>
                    <Typography className="mb-16" component="div">Here is an example of customizing the component. You can learn more about this in the
                        <a href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div">This component uses a customized <code>{`StepConnector`}</code> element that changes border color based on
                        the <code>{`active`}</code> and <code>{`completed`}</code> state.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/CustomizedSteppers.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/CustomizedSteppers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Mobile Stepper</Typography>
                    <Typography className="mb-16" component="div">This component implements a compact stepper suitable for a mobile device. See <a
                        href="https://material.io/archive/guidelines/components/steppers.html#steppers-types-of-steps">mobile steps</a> for its inspiration.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Mobile Stepper - Text</Typography>
                    <Typography className="mb-16" component="div">This is essentially a back/next button positioned correctly.
                        You must implement the textual description yourself, however, an example is provided below for reference.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/TextMobileStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/TextMobileStepper.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Mobile Stepper - Text with Carousel effect</Typography>
                    <Typography className="mb-16" component="div">This demo is very similar to the previous, the difference is the usage of
                        <a href="https://github.com/oliviertassinari/react-swipeable-views">react-swipeable-views</a> to make the transition of steps.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/SwipeableTextMobileStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/SwipeableTextMobileStepper.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Mobile Stepper - Dots</Typography>
                    <Typography className="mb-16" component="div">Use dots when the number of steps isn’t large.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/DotsMobileStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/DotsMobileStepper.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Mobile Stepper - Progress</Typography>
                    <Typography className="mb-16" component="div">Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process
                        (based on responses to earlier steps).</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/steppers/ProgressMobileStepper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/ProgressMobileStepper.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default SteppersDoc;
