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

function ButtonsDoc(props)
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
                        <Typography variant="h6">Buttons</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/buttons"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Buttons</Typography>
                    <Typography className="description">Buttons allow users to take actions, and make choices, with a single tap.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/buttons.html">Buttons</a> communicate actions that users can take.
                        They are typically placed throughout your UI, in places like:</Typography>
                    <ul>
                        <li>Dialogs</li>
                        <li>Modal windows</li>
                        <li>Forms</li>
                        <li>Cards</li>
                        <li>Toolbars</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Contained Buttons</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/buttons.html#contained-button">Contained buttons</a>
                        are high-emphasis, distinguished by their use of elevation and fill.
                        They contain actions that are primary to your app.</Typography>
                    <Typography className="mb-16" component="div">The last example of this demo show how to use an upload button.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/ContainedButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ContainedButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Text Buttons</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/buttons.html#text-button">Text buttons</a>
                        are typically used for less-pronounced actions, including those located:</Typography>
                    <ul>
                        <li>In dialogs</li>
                        <li>In cards</li>
                    </ul>
                    <Typography className="mb-16" component="div">In cards, text buttons help maintain an emphasis on card content.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/TextButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/TextButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Outlined Buttons</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/buttons.html#outlined-button">Outlined buttons</a>
                        are medium-emphasis buttons. They contain actions that are important,
                        but aren’t the primary action in an app.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Alternatives</Typography>
                    <Typography className="mb-16" component="div">Outlined buttons are also a lower emphasis alternative to contained buttons,
                        or a higher emphasis alternative to text buttons.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/OutlinedButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/OutlinedButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Grouped Buttons</Typography>
                    <Typography className="mb-16" component="div">The ButtonGroup component can be used to group outlined (the default) or contained buttons.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/GroupedButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/GroupedButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Split Button</Typography>
                    <Typography className="mb-16" component="div">ButtonGroup can also be used to create a split button. The dropdown can change the button action (as in this
                        example), or be use to immediately trigger a related action.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/SplitButton.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/SplitButton.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Floating Action Buttons</Typography>
                    <Typography className="mb-16" component="div">A <a href="https://material.io/design/components/buttons-floating-action-button.html">floating action button</a>
                        (FAB) performs the primary, or most common, action on a screen.
                        It appears in front of all screen content, typically as a circular shape with an icon in its center.
                        FABs come in two types: regular, and extended.</Typography>
                    <Typography className="mb-16" component="div">Only use a FAB if it is the most suitable way to present a screen’s primary action.</Typography>
                    <Typography className="mb-16" component="div">Only one floating action button is recommended per screen to represent the most common action.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/FloatingActionButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/FloatingActionButtons.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">The floating action button animates onto the screen as an expanding piece of material, by default.</Typography>
                    <Typography className="mb-16" component="div">A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear,
                        then reappear if its action changes.</Typography>
                    <Typography className="mb-16" component="div">The Zoom transition can be used to achieve this. Note that since both the exiting and entering
                        animations are triggered at the same time, we use <code>{`enterDelay`}</code> to allow the outgoing Floating Action Button&#39;s
                        animation to finish before the new one enters.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/FloatingActionButtonZoom.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/FloatingActionButtonZoom.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Sizes</Typography>
                    <Typography className="mb-16" component="div">Fancy larger or smaller buttons? Use the <code>{`size`}</code> property.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/ButtonSizes.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonSizes.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Buttons with icons and label</Typography>
                    <Typography className="mb-16" component="div">Sometimes you might want to have icons for certain button to enhance the UX of the application as we recognize
                        logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/IconLabelButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconLabelButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Icon Buttons</Typography>
                    <Typography className="mb-16" component="div">Icon buttons are commonly found in app bars and toolbars.</Typography>
                    <Typography className="mb-16" component="div">Icons are also appropriate for toggle buttons that allow a single choice to be selected or
                        deselected, such as adding or removing a star to an item.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/IconButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized buttons</Typography>
                    <Typography className="mb-16" component="div">Here are some examples of customizing the component. You can learn more about this in the
                        <a href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/CustomizedButtons.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/CustomizedButtons.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">👑 If you are looking for inspiration, you can check <a href="https://mui-treasury.com/components/button">MUI
                        Treasury&#39;s customization examples</a>.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complex Buttons</Typography>
                    <Typography className="mb-16" component="div">The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same
                        component: the <code>{`ButtonBase`}</code>.
                        You can take advantage of this lower level component to build custom interactions.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/ButtonBases.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonBases.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Third-party routing library</Typography>
                    <Typography className="mb-16" component="div">One common use case is to use the button to trigger a navigation to a new page.
                        The <code>{`ButtonBase`}</code> component provides a property to handle this use case: <code>{`component`}</code>.
                        However for certain focus polyfills <code>{`ButtonBase`}</code> requires the DOM node of the provided
                        component. This is achieved by attaching a ref to the component and expecting that the
                        component forwards this ref to the underlying DOM node.
                        Given that a lot of our interactive components rely on <code>{`ButtonBase`}</code>, you should be
                        able to take advantage of it everywhere:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/buttons/ButtonRouter.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonRouter.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div"><em>Note: Creating the Button components is necessary to prevent unexpected unmounting.
                        You can read more about it in our <a href="/guides/composition/#component-property">component property guide</a>.</em></Typography>

                </div>
            }
        />

    );
}

export default ButtonsDoc;
