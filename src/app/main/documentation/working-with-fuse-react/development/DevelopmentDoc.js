import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FusePageSimple, FuseHighlight} from '@fuse';

function DevelopmentDoc()
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
                        <Typography variant="h6">Development</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        While still in your work folder, run the following command in the console application:
                    </Typography>

                    <FuseHighlight component="pre" className="language-bash my-16">
                        {`
                              yarn start
                        `}
                    </FuseHighlight>

                    <Typography className="mb-16" component="p">
                        And that's it. create-react-app will take care everything and start the Fuse React.
                    </Typography>

                    <Typography className="mb-16" component="p">
                        You can check out your console application to get further information about the server. By default, it will run on <b>http://localhost:3000</b> but it
                        might change depending on your setup.
                    </Typography>

                    <Typography className="mb-8" variant="h5">Production</Typography>

                    <FuseHighlight component="pre" className="language-bash my-16">
                        {`
                              yarn run build
                            `}
                    </FuseHighlight>

                    <Typography className="mb-16" component="p">
                        compiles the application into <code>/build</code> directory
                    </Typography>
                </div>
            }
        />
    );
}

export default DevelopmentDoc;
