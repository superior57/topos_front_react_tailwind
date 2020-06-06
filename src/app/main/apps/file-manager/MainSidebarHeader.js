import React from 'react';
import {Icon, Typography} from '@material-ui/core';

function MainSidebarHeader()
{
    return (
        <div className="flex items-center h-full p-12">
            <Icon>folder</Icon>
            <Typography variant="h6" className="ml-12">File Manager</Typography>
        </div>
    );
}

export default MainSidebarHeader;
