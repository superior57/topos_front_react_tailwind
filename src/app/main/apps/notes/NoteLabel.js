import React from 'react';
import {Chip} from '@material-ui/core';
import {useSelector} from 'react-redux';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

function NoteLabel(props)
{
    const labels = useSelector(({notesApp}) => notesApp.labels.entities);

    if ( !labels )
    {
        return null;
    }

    const label = labels[props.id];

    if ( !label )
    {
        return null;
    }

    const linkProps = props.linkable ? {
        component: Link,
        onClick  : ev => {
            ev.stopPropagation();
        },
        to       : `/apps/notes/labels/${label.handle}/${label.id}`
    } : {};

    return (
        <Chip
            {...linkProps}
            label={label.name}
            classes={{
                root      : clsx("h-24", props.className),
                label     : "px-6 py-4 text-11",
                deleteIcon: "w-16 ml-0",
                ...props.classes
            }}
            variant="outlined"
            onDelete={props.onDelete}
        />
    );
}

export default NoteLabel;
