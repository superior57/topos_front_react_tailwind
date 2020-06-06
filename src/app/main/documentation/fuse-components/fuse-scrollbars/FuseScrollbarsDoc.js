import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';

function FuseScrollbarsDoc()
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
                        <Typography variant="h6">FuseScrollbars</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseScrollbars</code> is a simple <a href="http://utatti.github.io/perfect-scrollbar/" target="_blank" rel="noreferrer noopener"
                                                                   className="font-bold">perfect-scrollbar</a> component for react.
                    </Typography>

                    <Typography className="mb-16" component="p">
                        It can be disabled globally by Fuse Settings (<code>app/fuse-configs/settingsConfig.js</code>).
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {
                            `
                                <FuseScrollbars className={classes.content}>
                                    Content
                                </FuseScrollbars>
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Props</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {
                            `
                                FuseScrollbars.defaultProps = {
                                    className               : '',
                                    enable                  : true,
                                    scrollToTopOnChildChange: false,
                                    option                  : {
                                        wheelPropagation: true
                                    },
                                    ref                     : undefined,
                                    onScrollY               : undefined,
                                    onScrollX               : undefined,
                                    onScrollUp              : undefined,
                                    onScrollDown            : undefined,
                                    onScrollLeft            : undefined,
                                    onScrollRight           : undefined,
                                    onYReachStart           : undefined,
                                    onYReachEnd             : undefined,
                                    onXReachStart           : undefined,
                                    onXReachEnd             : undefined
                                };
                                `
                        }
                    </FuseHighlight>

                </div>
            }
        />
    );
};

export default FuseScrollbarsDoc;
