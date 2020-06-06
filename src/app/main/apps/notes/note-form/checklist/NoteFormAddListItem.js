import React from 'react';
import {Icon, ListItem, IconButton, Input} from '@material-ui/core';
import NoteListItemModel from 'app/main/apps/notes/model/NoteListItemModel';
import {useForm} from '@fuse/hooks';

function NoteFormAddListItem(props)
{
    const {form, handleChange, resetForm} = useForm(
        {
            text: ""
        }
    );

    function isFormInValid()
    {
        return form.text === '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInValid() )
        {
            return;
        }
        props.onListItemAdd(new NoteListItemModel(form));
        resetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <ListItem className="p-0" dense>
                <IconButton
                    className="w-32 h-32 -ml-4 mr-4 p-0"
                    aria-label="Add"
                    type="submit"
                    disabled={isFormInValid()}
                >
                    <Icon fontSize="small">add</Icon>
                </IconButton>
                <Input
                    className="flex flex-1"
                    name="text"
                    value={form.text}
                    onChange={handleChange}
                    placeholder="Add an item"
                    disableUnderline
                    autoFocus
                />
            </ListItem>
        </form>
    );
}

export default NoteFormAddListItem;
