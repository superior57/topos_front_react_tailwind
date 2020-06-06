import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

function PageLayoutsDoc()
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
                            <Typography color="textSecondary">Working with Fuse React</Typography>
                        </div>
                        <Typography variant="h6">Page Layouts</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        One of the strong sides of the Fuse React is its Page layout components.
                    </Typography>
                    <Typography className="mb-16" component="p">
                        Every single app, pre-built page and even this documentation page uses the Fuse React's page layout component.
                    </Typography>
                    <Typography className="mb-16" component="p">
                        Simply, page layout components are pre-built layouts which you can simply copy/paste and start building your own page or app based on it.
                    </Typography>
                    <Typography className="mb-16" component="p">
                        Because page layout components, it's very easy to replicate any page style that you can find in Fuse React.
                    </Typography>

                    <Typography className="mb-8" variant="h5">Page Layout Components</Typography>

                    <Typography className="my-16" component="div">
                        <ul>
                            <li className="mb-8"><Link to="/documentation/fuse-components/fuse-page-simple">FusePageSimple</Link></li>
                            <li className="mb-8"><Link to="/documentation/fuse-components/fuse-page-carded">FusePageCarded</Link></li>
                        </ul>
                    </Typography>
                </div>
            }
        />
    );
}

export default PageLayoutsDoc;
