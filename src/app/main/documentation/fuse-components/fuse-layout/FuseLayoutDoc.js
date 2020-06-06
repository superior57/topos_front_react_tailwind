import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

function FuseLayoutDoc()
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
                        <Typography variant="h6">FuseLayout</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseLayout</code> is the main layout component of the Fuse React. It allows to switch theme layouts, set layout settings based on default
                        configuration and route configs.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Configuration</Typography>

                    <Typography className="mb-16" component="p">
                        Please checkout
                        <Link className="font-medium mx-4" to="/documentation/working-with-fuse-react/theme-layouts">
                            Theme Layouts
                        </Link>
                        at documentation.
                    </Typography>
                </div>
            }
        />
    );
}

export default FuseLayoutDoc;
