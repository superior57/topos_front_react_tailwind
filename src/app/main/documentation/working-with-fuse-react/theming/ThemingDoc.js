import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FusePageSimple, FuseHighlight} from '@fuse';

/* eslint import/no-webpack-loader-syntax: off */

function ThemingDoc()
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
                        <Typography variant="h6">Theming</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        The Fuse React uses material-ui's theming by default.
                        You can can change the colors, the typography with defining theme configuration objects.
                    </Typography>

                    <Typography className="mb-8" variant="h5">Configuration</Typography>

                    <Typography className="mb-16" component="p">
                        For the configuration options checkout
                        <a href="https://material-ui-next.com/customization/themes/" target="_blank" rel="noopener noreferrer" className="mx-4 font-bold">
                            Material UI's theme configuration options.
                        </a>
                    </Typography>
                    <Typography className="mb-16" component="p">
                        Theme configurations are located at <code>src/app/fuse-configs/themesConfig.js</code> file.
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {require('!raw-loader!app/fuse-configs/themesConfig.js')}
                    </FuseHighlight>

                </div>
            }
        />
    );
}

export default ThemingDoc;
