import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

function FirebaseAuthDoc()
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
                        <Typography variant="h6">Firebase Authentication</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        With Firebase Authentication in Fuse React.
                    </Typography>

                    <ul>
                        <li className="mb-12">
                            You can <Link to="/register">register</Link>.
                        </li>
                        <li className="mb-12">
                            You can <Link to="/login">login</Link>.
                        </li>
                        <li className="mb-12">
                            Also saves user data (user shortcuts, layout and theme settings) to FirebaseDb.
                        </li>
                    </ul>

                    <Typography className="mt-32 mb-16" component="p">
                        Related Service folder is located at <code>/src/firebaseService</code>
                    </Typography>

                    <Typography className="my-24 italic" component="p" color="textSecondary">
                        Note: Make sure {`<Router>`} component wrapped with {`<Auth>`} component in <code>src/app/App.js</code>.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Configuration</Typography>

                    <Typography className="mb-16" component="p">
                        You need to paste the configuration of your Firebase Project into <code>src/app/services/firebaseService/firebaseServiceConfig.js</code>
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx my-16">
                        {`
                                const prodConfig = {
                                    apiKey           : "YOUR_API_KEY",
                                    authDomain       : "your-app.firebaseapp.com",
                                    databaseURL      : "https://your-app.firebaseio.com",
                                    projectId        : "your-app",
                                    storageBucket    : "your-app.appspot.com",
                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
                                };

                                const devConfig = {
                                    apiKey           : "YOUR_API_KEY",
                                    authDomain       : "your-app.firebaseapp.com",
                                    databaseURL      : "https://your-app.firebaseio.com",
                                    projectId        : "your-app",
                                    storageBucket    : "your-app.appspot.com",
                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
                                };
                            `}
                    </FuseHighlight>
                </div>
            }
        />
    );
}

export default FirebaseAuthDoc;
