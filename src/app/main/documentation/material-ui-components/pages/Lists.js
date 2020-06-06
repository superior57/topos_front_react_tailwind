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

function ListsDoc(props)
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
                        <Typography variant="h6">Lists</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/lists"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Lists</Typography>
                    <Typography className="description">Lists are continuous, vertical indexes of text or images.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/lists.html">Lists</a> are a continuous group of text or images.
                        They are composed of items containing primary and supplemental actions, which are represented by icons and text.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/SimpleList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/SimpleList.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">The last item of the previous demo shows how you can render a link:</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//...

<ListItemLink href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemLink>
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div">You can find a <a href="/guides/composition/#react-router">demo with React Router following this section</a> of
                        the documentation.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Nested List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/NestedList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/NestedList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Folder List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/FolderList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/FolderList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Interactive</Typography>
                    <Typography className="mb-16" component="div">Below is an interactive demo that lets you explore the visual results of the different settings:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/InteractiveList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/InteractiveList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Selected ListItem</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/SelectedListItem.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/SelectedListItem.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Align list items</Typography>
                    <Typography className="mb-16" component="div">You should change the list item alignment when displaying 3 lines or more, set
                        the <code>{`alignItems=&quot;flex-start&quot;`}</code> property.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/AlignItemsList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/AlignItemsList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">List Controls</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Checkbox</Typography>
                    <Typography className="mb-16" component="div">A checkbox can either be a primary action or a secondary action.</Typography>
                    <Typography className="mb-16" component="div">The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary
                        action and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/CheckboxList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/CheckboxList.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">The checkbox is the secondary action for the list item and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/CheckboxListSecondary.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/CheckboxListSecondary.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Switch</Typography>
                    <Typography className="mb-16" component="div">The switch is the secondary action and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/SwitchListSecondary.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/SwitchListSecondary.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Pinned Subheader List</Typography>
                    <Typography className="mb-16" component="div">Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next
                        subheader.</Typography>
                    <Typography className="mb-16" component="div">This feature is relying on the CSS sticky positioning.
                        Unfortunately it&#39;s <a href="https://caniuse.com/#search=sticky">not implemented</a> by all the browsers we are supporting. We default
                        to <code>{`disableSticky`}</code> when not supported.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/PinnedSubheaderList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/PinnedSubheaderList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Inset List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/InsetList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/InsetList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Virtualized List</Typography>
                    <Typography className="mb-16" component="div">In the following example, we demonstrate how to use <a
                        href="https://github.com/bvaughn/react-window">react-window</a> with the <code>{`List`}</code> component.
                        It renders 200 rows and can easily handle more.
                        Virtualization helps with performance issues.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/lists/VirtualizedList.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/VirtualizedList.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">We encourage the use of <a href="https://github.com/bvaughn/react-window">react-window</a> when possible.
                        If this library doesn&#39;t cover your use case, you should consider using <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a>,
                        then alternatives like <a href="https://github.com/petyosi/react-virtuoso">react-virtuoso</a>.</Typography>

                </div>
            }
        />

    );
}

export default ListsDoc;
