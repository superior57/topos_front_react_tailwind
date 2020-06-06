import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';

/* eslint import/no-webpack-loader-syntax: off */

function SettingsDoc()
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
                        <Typography variant="h6">Settings</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-8" variant="h5">Default Settings</Typography>

                    <Typography className="mb-16" component="p">
                        You can set default layout, theme settings of your app at <code>src/app/fuse-configs/settingsConfig.js</code>
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {require('!raw-loader!app/fuse-configs/settingsConfig.js')}
                    </FuseHighlight>
                </div>
            }
        />
    );
}

export default SettingsDoc;
