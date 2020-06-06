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

function TransitionsDoc(props)
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
                        <Typography variant="h6">Transitions</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/transitions"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Transitions</Typography>
                    <Typography className="description">Transition helps make a UI expressive and easy to use.</Typography>

                    <Typography className="mb-16" component="div">Material-UI provides a number of transitions that can be used to introduce some basic
                        <a href="https://material.io/design/motion/">motion</a>
                        to your applications components.</Typography>
                    <Typography className="mb-16" component="div">To better support server rendering Material-UI provides a <code>{`style`}</code> property
                        to the children of some transition components (Fade, Grow, Zoom, Slide).
                        The <code>{`style`}</code> property must be applied to the DOM for the animation to work as expected.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
// The \`props\` object contains a \`style\` property.
// You need to provide it to the \`div\` element as shown here.
function MyComponent(props) {
  return (
    <div {...props}>
      Fade
    </div>
  );
}

export default Main() {
  return (
    <Fade>
      <MyComponent />
    </Fade>
  );
}
`}
                    </FuseHighlight>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Collapse</Typography>
                    <Typography className="mb-16" component="div">Expand vertically from the top of the child element.
                        The <code>{`collapsedHeight`}</code> property can be used to set the minimum height when not expanded.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/transitions/SimpleCollapse.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleCollapse.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Fade</Typography>
                    <Typography className="mb-16" component="div">Fade in from transparent to opaque.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/transitions/SimpleFade.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleFade.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Grow</Typography>
                    <Typography className="mb-16" component="div">Expand outwards from the center of the child element, while also fading in
                        from transparent to opaque.</Typography>
                    <Typography className="mb-16" component="div">The second example demonstrates how to change the <code>{`transform-origin`}</code>, and conditionally applies
                        the <code>{`timeout`}</code> property to change the entry speed.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/transitions/SimpleGrow.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleGrow.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Slide</Typography>
                    <Typography className="mb-16" component="div">Slide in from the edge of the screen.
                        The <code>{`direction`}</code> property controls which edge of the screen the transition starts from.</Typography>
                    <Typography className="mb-16" component="div">The Transition component&#39;s <code>{`mountOnEnter`}</code> property prevents the child component from being
                        mounted
                        until <code>{`in`}</code> is <code>{`true`}</code>. This prevents the relatively positioned component from scrolling into view
                        from it&#39;s off-screen position. Similarly the <code>{`unmountOnExit`}</code> property removes the component
                        from the DOM after it has been transition off screen.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/transitions/SimpleSlide.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleSlide.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Zoom</Typography>
                    <Typography className="mb-16" component="div">Expand outwards from the center of the child element.</Typography>
                    <Typography className="mb-16" component="div">This example also demonstrates how to delay the enter transition.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/transitions/SimpleZoom.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleZoom.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default TransitionsDoc;
