import React from 'react';
import {Chip, Icon} from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';

function NoteLabel(props)
{
    if ( !props.date )
    {
        return null;
    }

    return (
        <Chip
            icon={<Icon className="text-16 mr-0">access_time</Icon>}
            label={moment(props.date).format('MMM DD YY, h:mm A')}
            classes={{
                root      : clsx("h-24", props.className),
                label     : "pl-4 pr-6 py-4 text-11",
                deleteIcon: "w-16 ml-0",
                ...props.classes
            }}
            variant="outlined"
            onDelete={props.onDelete}
        />
    );
}

export default NoteLabel;
