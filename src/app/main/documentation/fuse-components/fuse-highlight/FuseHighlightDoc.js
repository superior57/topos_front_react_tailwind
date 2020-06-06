import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';

function FuseHighlightDoc()
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
                        <Typography variant="h6">FuseHighlight</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseHighlight</code> is a custom built Fuse component allows to show syntax highlighted codes with
                        <a href="http://prismjs.com/" target="_blank" rel="noopener noreferrer" className="ml-8 font-bold">PrismJS</a>.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Usage</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {
                            `
                                 <FuseHighlight component="pre" className="language-html">
                                   <div className="title">
                                        <span>Example Title</span>
                                    </div>
                                 </FuseHighlight>
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Preview</Typography>

                    <FuseHighlight component="pre" className="language-html">
                        {
                            `
                            <div className="title">
                                <span>Example Title</span>
                            </div>
                            `
                        }
                    </FuseHighlight>

                </div>
            }
        />
    );
}

export default FuseHighlightDoc;
