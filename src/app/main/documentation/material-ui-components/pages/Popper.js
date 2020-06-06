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

function PopperDoc(props)
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
                        <Typography variant="h6">Popper</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/popper"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Popper</Typography>
                    <Typography className="description">A Popper can be used to display some content on top of another. It's an alternative to react-popper.</Typography>

                    <Typography className="mb-16" component="div">Some important features of the <code>{`Popper`}</code> component:</Typography>
                    <ul>
                        <li>🕷 Popper relies on the 3rd party library (<a href="https://github.com/FezVrasta/popper.js">Popper.js</a>) for perfect positioning.</li>
                        <li>💄 It&#39;s an alternative API to react-popper. It aims for simplicity.</li>
                        <li>📦 <a href="/size-snapshot">10 kB gzipped</a> (7 kB from Popper.js).</li>
                        <li>The children is <a href="/components/portal/"><code>{`Portal`}</code></a> to the body of the document to avoid rendering problems.
                            You can disable this behavior with <code>{`disablePortal`}</code>.
                        </li>
                        <li>The scroll isn&#39;t blocked like with the <a href="/components/popover/"><code>{`Popover`}</code></a> component.
                            The placement of the popper updates with the available area in the viewport.
                        </li>
                        <li>Clicking away does not hide the <code>{`Popper`}</code> component.
                            If you need this behavior, you can use <a href="/components/click-away-listener/"><code>{`ClickAwayListener`}</code></a> - see the example in the <a
                                href="/components/menus/#menulist-composition">menu documentation section</a>.
                        </li>
                        <li>The <code>{`anchorEl`}</code> is passed as the reference object to create a new <code>{`Popper.js`}</code> instance.</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Popper</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/popper/SimplePopper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/SimplePopper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Minimalist Popper</Typography>
                    <Typography className="mb-16" component="div">You can use the component with zero extra dependencies.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/popper/MinimalPopper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/MinimalPopper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Scroll playground</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/popper/ScrollPlayground.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/ScrollPlayground.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Positioned Popper</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/popper/PositionedPopper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/PositionedPopper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Without transition Popper</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/popper/NoTransitionPopper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/NoTransitionPopper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Faked reference object</Typography>
                    <Typography className="mb-16" component="div">The <code>{`anchorEl`}</code> property can be a reference to a fake DOM element.
                        You just need to create an object shaped like the <a
                            href="https://github.com/FezVrasta/popper.js/blob/0642ce0ddeffe3c7c033a412d4d60ce7ec8193c3/packages/popper/index.d.ts#L118-L123"><code>{`ReferenceObject`}</code></a>.</Typography>
                    <Typography className="mb-16" component="div">Highlight part of the text to see the popper:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/popper/FakedReferencePopper.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/FakedReferencePopper.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complementary projects</Typography>
                    <Typography className="mb-16" component="div">For more advanced use cases you might be able to take advantage of:</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">PopupState helper</Typography>
                    <Typography className="mb-16" component="div">There is a 3rd party package <a
                        href="https://github.com/jcoreio/material-ui-popup-state"><code>{`material-ui-popup-state`}</code></a> that takes care of popper
                        state for you in most cases.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/popper/PopperPopupState.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/PopperPopupState.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default PopperDoc;
