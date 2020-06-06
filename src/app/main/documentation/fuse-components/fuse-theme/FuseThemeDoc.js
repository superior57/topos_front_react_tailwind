import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */

function FuseThemeDoc()
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
                        <Typography variant="h6">FuseTheme</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseTheme</code> is theming component of the Fuse React. It allows to change predefined Material UI themes. It should
                        wraps the <code>FuseLayout</code> component.
                    </Typography>

                    <Typography className="mb-16" component="p">
                        <code>src/app/App.js</code>
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {require('!raw-loader!app/App.js')}
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Configuration</Typography>

                    <Typography className="mb-16" component="p">
                        Please checkout
                        <Link className="font-medium mx-4" to="/documentation/working-with-fuse-react/theming">
                            theming
                        </Link>
                        at documentation.
                    </Typography>
                </div>
            }
        />
    );
}

export default FuseThemeDoc;
