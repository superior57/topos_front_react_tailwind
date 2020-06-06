import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

function JwtAuthDoc()
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
                            <Typography color="textSecondary">Authentication</Typography>
                        </div>
                        <Typography variant="h6">JWT Authentication</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        With JWT Authentication in Fuse React.
                    </Typography>

                    <ul>
                        <li className="mb-12">
                            You can <Link to="/register">register</Link>.
                        </li>
                        <li className="mb-12">
                            You can <Link to="/login">login</Link>.
                        </li>
                        <li className="mb-12">
                            Also saves user data (user shortcuts, layout and theme settings) to db.
                        </li>
                    </ul>

                    <Typography className="mt-32 mb-16" component="p">
                        Related Service folder is located at <code>/src/app/services/jwtService</code>
                    </Typography>

                    <Typography className="my-24 italic" component="p" color="textSecondary">
                        Note: Make sure {`<Router>`} component wrapped with {`<Auth>`} component in <code>src/app/App.js</code>.
                    </Typography>

                    <Typography className="my-24 italic" component="p" color="textSecondary">
                        Important: We don't give you any backend code. We are demonstrating the usage with <code>@fake-db</code> (which is works with https requests as real).
                    </Typography>

                </div>
            }
        />
    );
}

export default JwtAuthDoc;
