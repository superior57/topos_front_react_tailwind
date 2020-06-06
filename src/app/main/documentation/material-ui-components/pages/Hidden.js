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

function HiddenDoc(props)
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
                        <Typography variant="h6">Hidden</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/hidden"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Hidden</Typography>
                    <Typography className="description">Quickly and responsively toggle the visibility value of components and more with our hidden utilities.</Typography>

                    <Typography className="mb-16" component="div">All elements are visible unless <strong>they are explicitly hidden</strong>.
                        To ease integration with Material-UI&#39;s <a href="/customization/breakpoints/">responsive breakpoints</a>,
                        this component can be used to hide any content,
                        or you can use it in conjunction with our <a href="/components/grid/"><code>{`Grid`}</code></a> component.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">How it works</Typography>
                    <Typography className="mb-16" component="div">Hidden works with a range of breakpoints e.g. <code>{`xsUp`}</code> or <code>{`mdDown`}</code>, or one or more
                        breakpoints e.g. <code>{`only=&#39;sm&#39;`}</code> or <code>{`only={[&#39;md&#39;, &#39;xl&#39;]}`}</code>.
                        Ranges and individual breakpoints can be used simultaneously to achieve very customized behavior.
                        The ranges are inclusive of the specified breakpoints.</Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {` 
innerWidth  |xs      sm       md       lg       xl
            |--------|--------|--------|--------|-------->
width       |   xs   |   sm   |   md   |   lg   |   xl

smUp        |   show | hide
mdDown      |                     hide | show

`}
                    </FuseHighlight>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Implementations</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">js</Typography>
                    <Typography className="mb-16" component="div">By default, the <code>{`js`}</code> implementation is used, responsively hiding content based on using the <a
                        href="/customization/breakpoints/#withwidth"><code>{`withWidth()`}</code></a> higher-order component that watches screen size.
                        This has the benefit of not rendering any content at all unless the breakpoint is met.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">css</Typography>
                    <Typography className="mb-16" component="div">If you are using server-side rendering, you can set <code>{`implementation=&quot;css&quot;`}</code> if you
                        don&#39;t want the browser to re-flow your content on the screen.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Breakpoint up</Typography>
                    <Typography className="mb-16" component="div">Using any breakpoint <code>{`up`}</code> property, the given <em>children</em> will be hidden <em>at or
                        above</em> the breakpoint.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/hidden/BreakpointUp.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/hidden/BreakpointUp.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Breakpoint down</Typography>
                    <Typography className="mb-16" component="div">Using any breakpoint <code>{`down`}</code> property, the given <em>children</em> will be hidden <em>at or
                        below</em> the breakpoint.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/hidden/BreakpointDown.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/hidden/BreakpointDown.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Breakpoint only</Typography>
                    <Typography className="mb-16" component="div">Using the breakpoint <code>{`only`}</code> property, the given <em>children</em> will be hidden <em>at</em> the
                        specified breakpoint(s).</Typography>
                    <Typography className="mb-16" component="div">The <code>{`only`}</code> property can be used in two ways:</Typography>
                    <ul>
                        <li>list a single breakpoint</li>
                        <li>list an array of breakpoints</li>
                    </ul>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/hidden/BreakpointOnly.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/hidden/BreakpointOnly.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Integration with Grid</Typography>
                    <Typography className="mb-16" component="div">It is quite common to alter <code>{`Grid`}</code> at different responsive breakpoints, and in many cases, you want
                        to hide some of those elements.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/hidden/GridIntegration.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/hidden/GridIntegration.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default HiddenDoc;
