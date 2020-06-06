import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseCountdown, FuseHighlight, FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

function FuseCountdownDoc()
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
                        <Typography variant="h6">FuseCountdown</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseCountdown</code> is a custom built Fuse component allows you to create countdowns.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Usage</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {
                            `
                              <FuseCountdown endDate="2019-07-28" className="my-48"/>
                            `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Preview</Typography>

                    <FuseCountdown endDate="2019-07-28" className="my-48"/>

                    <Typography className="mt-32 mb-8" variant="h5">Demos</Typography>

                    <ul>
                        <li className="mb-8">
                            <Link to="/pages/coming-soon">Coming Soon</Link>
                        </li>
                    </ul>

                </div>
            }
        />
    );
}

export default FuseCountdownDoc;
