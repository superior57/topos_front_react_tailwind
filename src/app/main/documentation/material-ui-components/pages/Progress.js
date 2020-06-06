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

function ProgressDoc(props)
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
                        <Typography variant="h6">Progress</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/progress"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Progress</Typography>
                    <Typography className="description">Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process. The
                        animation works with CSS, not JavaScript.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/progress-indicators.html">Progress indicators</a> inform users
                        about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available
                        actions, such as whether users can navigate away from the current screen.</Typography>
                    <Typography className="mb-16" component="div"><strong>Determinate</strong> indicators display how long an operation will take.</Typography>
                    <Typography className="mb-16" component="div"><strong>Indeterminate</strong> indicators visualize an unspecified wait time.</Typography>
                    <Typography className="text-16 mt-32 mb-8" component="h4">Progress as a group</Typography>
                    <Typography className="mb-16" component="div">When displaying progress for a sequence of processes, indicate overall progress rather than the progress of each
                        activity.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Circular</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/progress-indicators.html#circular-progress-indicators">Circular
                        progress</a> support both determinate and indeterminate processes.</Typography>
                    <ul>
                        <li><strong>Determinate</strong> circular indicators fill the invisible, circular track with color, as the indicator moves from 0 to 360 degrees.</li>
                        <li><strong>Indeterminate</strong> circular indicators grow and shrink in size while moving along the invisible track.</li>
                    </ul>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Circular Indeterminate</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/CircularIndeterminate.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularIndeterminate.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Interactive Integration</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/CircularIntegration.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularIntegration.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Circular Determinate</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/CircularDeterminate.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularDeterminate.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Circular Static</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/CircularStatic.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularStatic.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Linear</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/progress-indicators.html#linear-progress-indicators">Linear
                        progress</a> indicators.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Linear Indeterminate</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/LinearIndeterminate.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearIndeterminate.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Linear Determinate</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/LinearDeterminate.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearDeterminate.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Linear Buffer</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/LinearBuffer.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearBuffer.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Linear Query</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/LinearQuery.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearQuery.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Non-standard ranges</Typography>
                    <Typography className="mb-16" component="div">The progress components accept a value in the range 0 - 100. This simplifies things for screen-reader users, where
                        these are the default min / max values. Sometimes, however, you might be working with a data source where the values fall outside this range. Here&#39;s how
                        you can easily transform a value in any range to a scale of 0 - 100:</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
// MIN = Minimum expected value
// MAX = Maximium expected value
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = value => (value - MIN) * 100 / (MAX - MIN);

// Example component that utilizes the \`normalise\` function at the point of render.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  )
}
`}
                    </FuseHighlight>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized progress bars</Typography>
                    <Typography className="mb-16" component="div">Here are some examples of customizing the component. You can learn more about this in the
                        <a href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/CustomizedProgressBars.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CustomizedProgressBars.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Delaying appearance</Typography>
                    <Typography className="mb-16" component="div">There are <a href="https://www.nngroup.com/articles/response-times-3-important-limits/">3 important limits</a> to
                        know around response time.
                        The ripple effect of the <code>{`ButtonBase`}</code> component ensures that the user feels that the system is reacting instantaneously.
                        Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second.
                        After 1.0 second, you can display a loader to keep user&#39;s flow of thought uninterrupted.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/DelayingAppearance.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/DelayingAppearance.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Limitations</Typography>
                    <Typography className="mb-16" component="div">Under heavy load, you might lose the stroke dash animation or see random CircularProgress ring widths.
                        You should run processor intensive operations in a web worker or by batch in order not to block the main rendering thread.</Typography>
                    <Typography className="mb-16" component="div"> src="/static/images/progress/heavy-load.gif" alt="heavy load/></Typography>
                    <Typography className="mb-16" component="div">When it&#39;s not possible, you can leverage the <code>{`disableShrink`}</code> property to mitigate the issue.
                        See <a href="https://github.com/mui-org/material-ui/issues/10327">this issue</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/progress/CircularUnderLoad.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularUnderLoad.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default ProgressDoc;
