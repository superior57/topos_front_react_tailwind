import React from 'react';
import {FuseShortcuts, FuseSidePanel} from '@fuse';

function LeftSideLayout3()
{
    return (
        <React.Fragment>
            <FuseSidePanel>
                <FuseShortcuts className="py-16 px-8" variant="vertical"/>
            </FuseSidePanel>
        </React.Fragment>
    );
}

export default LeftSideLayout3;
