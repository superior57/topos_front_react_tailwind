import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FusePageSimple, FuseHighlight} from '@fuse';
import {Link} from 'react-router-dom';

function InstallationDoc()
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
                        <Typography variant="h6">Installation</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mt-32 mb-8" variant="h4">Prerequisites</Typography>

                    <Typography className="mb-16" component="p">
                        This section will give you some information about what tools you will need.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Node.js</Typography>
                    <Typography className="mb-16" component="p">
                        To install and use Fuse React, you will need
                        <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener" className="mx-4 font-bold">
                            Node.js
                        </a>
                        installed to your computer. We won't get into too much detail about Node.js as it's out of the scope of
                        this documentation. Also you won't need to actually use Node.js, it's only required for the development process.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Yarn - Package Manager</Typography>
                    <Typography className="mb-16" component="p">
                        Fuse React uses
                        <a href="https://yarnpkg.com" target="_blank" rel="noreferrer noopener" className="mx-4 font-bold">
                            Yarn
                        </a>
                        package manager to install and manage 3rd party components and libraries.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h4">Installation</Typography>

                    <Typography className="mt-32 mb-8" variant="h5">A. Installing Prerequisites</Typography>

                    <Typography className="my-16" component="div">
                        <ol>
                            <li className="mb-16">
                                Download and install <b>at least LTS</b> or the latest version of
                                <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener" className="mx-4 font-bold">
                                    Node.js
                                </a>
                                from its web site.
                            </li>
                            <li className="mb-16">
                                Download and install the latest
                                <a href="https://yarnpkg.com" target="_blank" rel="noreferrer noopener" className="mx-4 font-bold">
                                    Yarn
                                </a>
                                from its web site.
                            </li>
                        </ol>
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">B. Installing Fuse React</Typography>

                    <Typography className="my-16" component="div">
                        <ol>
                            <li className="mb-16">
                                Unzip the zip file that you have downloaded from Themeforest. Inside the zip file, you will find the Skeleton
                                Project <b>(Fuse-react-x.x.x-skeleton.zip)</b> along with the Demo Project <b>(Fuse-react-x.x.x-demo.zip)</b>, PSD designs and a readme file.
                            </li>
                            <li className="mb-16">
                                Extract the contents of the zip file <b>(Fuse-react-x.x.x-skeleton.zip)</b> into a folder that you will work within. For this documentation, we will
                                refer that
                                as "your work folder".
                            </li>
                            <li className="mb-16">
                                Open your favorite console application (Terminal, Command Prompt etc.), navigate into your work folder, run the following command and wait for it to
                                finish:
                                <FuseHighlight component="pre" className="language-bash my-16">
                                    {`
                                      yarn
                                    `}
                                </FuseHighlight>

                                This command will install all the required Node.js modules into the node_modules directory inside your work folder.

                                <Typography className="mt-16" component="p">
                                    And now, you are ready to run the Fuse React for the first time.
                                    Please continue to the <Link className="font-medium" to="/documentation/working-with-fuse-react/development">Working with Fuse React
                                    section</Link>.
                                </Typography>
                            </li>
                        </ol>
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Github Repository</Typography>
                    <Typography className="mb-16" component="p">
                       You can also checkout Fuse React from github repository. Fuse React's Github repository is private, you can get invitation by filling the
                        <a href="http://support.withinpixels.com/github" target="_blank" rel="noreferrer noopener" className="mx-4 font-bold">invitation form</a>.
                    </Typography>

                </div>
            }
        />
    );
}

export default InstallationDoc;
