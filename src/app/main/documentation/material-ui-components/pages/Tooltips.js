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

function TooltipsDoc(props)
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
                        <Typography variant="h6">Tooltips</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/tooltips"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Tooltips</Typography>
                    <Typography className="description">Tooltips display informative text when users hover over, focus on, or tap an element.</Typography>

                    <Typography className="mb-16" component="div">When activated, <a href="https://material.io/design/components/tooltips.html">Tooltips</a> display a text label
                        identifying an element, such as a description of its function.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Tooltips</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/SimpleTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/SimpleTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Positioned Tooltips</Typography>
                    <Typography className="mb-16" component="div">The <code>{`Tooltip`}</code> has 12 <strong>placements</strong> choice.
                        They don’t have directional arrows; instead, they rely on motion emanating from the source to convey direction.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/PositionedTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/PositionedTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized tooltips</Typography>
                    <Typography className="mb-16" component="div">Here are some examples of customizing the component. You can learn more about this in the
                        <a href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/CustomizedTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/CustomizedTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Custom child element</Typography>
                    <Typography className="mb-16" component="div">The tooltip needs to apply DOM event listeners to its child element.
                        If the child is a custom React element, you need to make sure that it spreads its properties to the underlying DOM element.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
function MyComponent(props) {
  // We spread the properties to the underlying DOM element.
  return <div {...props}>Bin</div>
}

// ...

<Tooltip title="Delete">
  <MyComponent>
</Tooltip>
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div">You can find a similar concept in the <a href="/guides/composition/#wrapping-components">wrapping
                        components</a> guide.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Triggers</Typography>
                    <Typography className="mb-16" component="div">You can define the types of events that cause a tooltip to show.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/TriggersTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/TriggersTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Controlled Tooltips</Typography>
                    <Typography className="mb-16" component="div">You can use the <code>{`open`}</code>, <code>{`onOpen`}</code> and <code>{`onClose`}</code> properties to control
                        the behavior of the tooltip.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/ControlledTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/ControlledTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Variable Width</Typography>
                    <Typography className="mb-16" component="div">The <code>{`Tooltip`}</code> wraps long text by default to make it readable.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/VariableWidth.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/VariableWidth.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Interactive</Typography>
                    <Typography className="mb-16" component="div">A tooltip can be interactive. It won&#39;t close when the user hovers over the tooltip before
                        the <code>{`leaveDelay`}</code> is expired.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/InteractiveTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/InteractiveTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Disabled Elements</Typography>
                    <Typography className="mb-16" component="div">By default disabled elements like <code>{`&lt;button&gt;`}</code> do not trigger user interactions so
                        a <code>{`Tooltip`}</code> will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element like
                        a <code>{`span`}</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/DisabledTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/DisabledTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Transitions</Typography>
                    <Typography className="mb-16" component="div">Use a different transition.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/TransitionsTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/TransitionsTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Showing and hiding</Typography>
                    <Typography className="mb-16" component="div">The tooltip is normally shown immediately when the user&#39;s mouse hovers over the element, and hides immediately
                        when the user&#39;s mouse leaves. A delay in showing or hiding the tooltip can be added through the
                        properties <code>{`enterDelay`}</code> and <code>{`leaveDelay`}</code>, as shown in the Controlled Tooltips demo above.</Typography>
                    <Typography className="mb-16" component="div">On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You
                        can disable this feature with the <code>{`disableTouchListener`}</code> property.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tooltips/DelayTooltips.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/DelayTooltips.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default TooltipsDoc;
