import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

const demos = [
    {
        'title': 'Full Width',
        'url'  : '/ui/page-layouts/carded/full-width'
    },
    {
        'title': 'Full Width Tabbed',
        'url'  : '/ui/page-layouts/carded/full-width-tabbed'
    },
    {
        'title': 'Full Width 2',
        'url'  : '/ui/page-layouts/carded/full-width-2'
    },
    {
        'title': 'Full Width 2 Tabbed',
        'url'  : '/ui/page-layouts/carded/full-width-2-tabbed'
    },
    {
        'title': 'Left Sidebar',
        'url'  : '/ui/page-layouts/carded/left-sidebar'
    },
    {
        'title': 'Left Sidebar Tabbed',
        'url'  : '/ui/page-layouts/carded/left-sidebar-tabbed'
    },
    {
        'title': 'Left Sidebar 2',
        'url'  : '/ui/page-layouts/carded/left-sidebar-2'
    },
    {
        'title': 'Left Sidebar 2 Tabbed',
        'url'  : '/ui/page-layouts/carded/left-sidebar-2-tabbed'
    },
    {
        'title': 'Right Sidebar',
        'url'  : '/ui/page-layouts/carded/right-sidebar'
    },
    {
        'title': 'Right Sidebar Tabbed',
        'url'  : '/ui/page-layouts/carded/right-sidebar-tabbed'
    },
    {
        'title': 'Right Sidebar 2',
        'url'  : '/ui/page-layouts/carded/right-sidebar-2'
    },
    {
        'title': 'Right Sidebar 2 Tabbed',
        'url'  : '/ui/page-layouts/carded/right-sidebar-2-tabbed'
    }
];

function FusePageCardedDoc()
{
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Fuse Components</Typography>
                        </div>
                        <Typography variant="h6">FusePageCarded</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FusePageCarded</code> is the carded page layout component of the Fuse React.
                    </Typography>
                    <Typography className="mb-16" component="p">
                        The component has layout areas to easily enter the contents of the app.
                    </Typography>
                    <Typography className="mb-16" component="p">
                        You can extend the class names injected by the classes property
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {
                            `
                                   <FusePageCarded
                                        classes={{
                                            root: classes.layoutRoot
                                        }}
                                        header={
                                            Header
                                        }
                                        contentToolbar={
                                            Content Toolbar
                                        }
                                        content={
                                            Content
                                        }
                                        leftSidebarHeader={
                                            Left Sidebar Header
                                        }
                                        leftSidebarContent={
                                            Left Sidebar Content
                                        }
                                        rightSidebarHeader={
                                            Right Sidebar Header
                                        }
                                        rightSidebarContent={
                                            Right Sidebar Content
                                        }
                                        ref={pageLayout}
                                        innerScroll
                                    />
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Demos</Typography>

                    <ul>
                        {demos.map(demo => (
                            <li key={demo.url} className="mb-8"><Link to={demo.url}>{demo.title}</Link></li>
                        ))}
                    </ul>

                </div>
            }
        />
    );
}

export default FusePageCardedDoc;
