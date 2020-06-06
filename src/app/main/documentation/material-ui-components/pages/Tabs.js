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

function TabsDoc(props)
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
                        <Typography variant="h6">Tabs</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/tabs"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Tabs</Typography>
                    <Typography className="description">Tabs make it easy to explore and switch between different views.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/tabs.html">Tabs</a> organize and allow navigation between groups of
                        content that are related and at the same level of hierarchy.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Tabs</Typography>
                    <Typography className="mb-16" component="div">A simple example with no frills.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/SimpleTabs.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/SimpleTabs.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Wrapped Labels</Typography>
                    <Typography className="mb-16" component="div">Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow and the text
                        will not be visible.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/TabsWrappedLabel.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/TabsWrappedLabel.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Disabled Tab</Typography>
                    <Typography className="mb-16" component="div">A Tab can be disabled by setting <code>{`disabled`}</code> property.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/DisabledTabs.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/DisabledTabs.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Fixed Tabs</Typography>
                    <Typography className="mb-16" component="div">Fixed tabs should be used with a limited number of tabs and when consistent placement will aid muscle
                        memory.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Full width</Typography>
                    <Typography className="mb-16" component="div">The <code>{`variant=&quot;fullWidth&quot;`}</code> property should be used for smaller views.
                        This demo also uses <a href="https://github.com/oliviertassinari/react-swipeable-views">react-swipeable-views</a> to animate the Tab transition, and
                        allowing tabs to be swiped on touch devices.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/FullWidthTabs.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/FullWidthTabs.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Centered</Typography>
                    <Typography className="mb-16" component="div">The <code>{`centered`}</code> property should be used for larger views.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/CenteredTabs.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/CenteredTabs.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Scrollable Tabs</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Automatic Scroll Buttons</Typography>
                    <Typography className="mb-16" component="div">Left and right scroll buttons will automatically be presented on desktop and hidden on mobile. (based on viewport
                        width)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonAuto.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonAuto.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Forced Scroll Buttons</Typography>
                    <Typography className="mb-16" component="div">Left and right scroll buttons will be presented regardless of the viewport width.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonForce.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonForce.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Prevent Scroll Buttons</Typography>
                    <Typography className="mb-16" component="div">Left and right scroll buttons will never be presented. All scrolling must be initiated through user agent
                        scrolling mechanisms (e.g. left/right swipe, shift-mousewheel, etc.)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonPrevent.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonPrevent.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized tabs</Typography>
                    <Typography className="mb-16" component="div">Here is an example of customizing the component. You can learn more about this in the
                        <a href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/CustomizedTabs.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/CustomizedTabs.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">👑 If you are looking for inspiration, you can check <a href="https://mui-treasury.com/components/tabs">MUI
                        Treasury&#39;s customization examples</a>.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Nav Tabs</Typography>
                    <Typography className="mb-16" component="div">By default tabs use a <code>{`button`}</code> element, but you can provide your own custom tag or component.
                        Here&#39;s an example of implementing tabbed navigation:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/NavTabs.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/NavTabs.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Icon Tabs</Typography>
                    <Typography className="mb-16" component="div">Tab labels may be either all icons or all text.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tabs/IconTabs.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/IconTabs.js')}
                    />
                        <FuseExample
                            className="my-24"
                            iframe={false}
                            component={require('app/main/documentation/material-ui-components/components/tabs/IconLabelTabs.js').default}
                            raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/IconLabelTabs.js')}
                        /></Typography>

                </div>
            }
        />

    );
}

export default TabsDoc;
