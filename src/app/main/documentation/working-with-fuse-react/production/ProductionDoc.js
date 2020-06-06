import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FusePageSimple, FuseHighlight} from '@fuse';

function ProductionDoc()
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
                        <Typography variant="h6">Production</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mt-32 mb-8" variant="h5">Production</Typography>

                    <Typography className="mb-16" component="p">
                        The following command builds the application into an output directory
                    </Typography>

                    <FuseHighlight component="pre" className="language-bash my-16">
                        {`
                              yarn run build
                        `}
                    </FuseHighlight>

                    <Typography className="mb-16" component="p">
                        compiles the application into <code>/build</code> directory
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Deployment</Typography>

                    <Typography className="mb-16" component="p">
                        Checkout at Facebook's create-react-app documentation:
                        <a href="https://facebook.github.io/create-react-app/docs/deployment" target="_blank" rel="noreferrer noopener" className="ml-4 font-bold">
                            Deployment
                        </a>
                    </Typography>

                </div>
            }
        />
    );
}

export default ProductionDoc;
