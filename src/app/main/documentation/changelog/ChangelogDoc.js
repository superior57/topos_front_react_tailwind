import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FusePageSimple} from '@fuse';
import ChangelogCard from './ChangelogCard';

const changelogData = [
    {
        version        : '1.0.0-alpha',
        date           : '2019-08-09',
        newChanges     : [
            "front-end and mock api for accounts, teams and users features",
            <span>create a fake database for account, users and teams with <a
            href="https://github.com/ctimmerm/axios-mock-adapter" target="_blank" rel="noopener noreferrer">axios-mock-adapter</a>.</span>,
            "applied the Topos logo on the theme"
        ]
    },
    
];

function ChangelogDoc()
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
                        </div>
                        <Typography variant="h6">About</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-xl">
                    {changelogData.map(item => (
                        <ChangelogCard
                            className="mb-24"
                            key={item.version}
                            {...item}
                        />
                    ))}
                </div>
            }
        />
    );
}

export default ChangelogDoc;
