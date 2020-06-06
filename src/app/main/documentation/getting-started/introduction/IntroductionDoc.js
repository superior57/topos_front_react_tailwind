import React from 'react';
import {Typography, Icon} from '@material-ui/core';
import {FusePageSimple} from '@fuse';

function IntroductionDoc()
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
                            <Typography color="textSecondary">Getting Started</Typography>
                        </div>
                        <Typography variant="h6">Introduction</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        This version of Fuse is <i>NOT</i> a traditional admin template, it's an React app written entirely with Javascript and has no jQuery dependency.
                    </Typography>

                    <Typography className="mb-16" component="p">
                        While Fuse React is a great tool and source for learning React, it also requires at least an entry level of React, Redux knowledge so you can find your way
                        within the source code.
                    </Typography>

                    <Typography className="mb-32" component="p">
                        Here you can find a list of core libraries, design specifications and coding standards that we use in Fuse React:
                    </Typography>

                    <Typography className="mb-8" variant="h4">Google's Material Design</Typography>

                    <Typography className="mb-16" component="p">
                        All libraries and custom made components are following
                        <a href="https://www.google.com/design/spec/material-design/introduction.html" target="_blank" rel="noreferrer noopener" className="ml-4 font-bold">
                            Google's Material Design Specifications.
                        </a>
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h4">React</Typography>

                    <Typography className="mb-16" component="p">
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="mr-4 font-bold">
                            React
                        </a>
                        is the core of our template. Fuse React is NOT a traditional admin template, it's an React app. If you don't know what React is or don't know how
                        to use it, we strongly recommend checking the React before start doing anything with Fuse.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h4">Material-UI</Typography>

                    <Typography className="mb-16" component="p">
                        <a href="https://material-ui-next.com" target="_blank" rel="noreferrer noopener" className="mr-4 font-bold">
                            Material-UI
                        </a>
                        is a react ui library that implement Google's Material Design specification.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h4">Create React App (CLI)</Typography>

                    <Typography className="mb-16" component="p">
                        <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer noopener" className="mr-4 font-bold">
                            Create React App
                        </a>
                        is a tool built by developers at Facebook to help you build React applications. It saves you from time-consuming setup and configuration.
                    </Typography>
                </div>
            }
        />
    );
}

export default IntroductionDoc;
