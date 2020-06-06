import React from 'react';
import {Slide, Dialog} from '@material-ui/core';
import {useDebounce} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from 'app/main/apps/notes/store/actions';
import NoteForm from 'app/main/apps/notes/note-form/NoteForm';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function NoteDialog(props)
{
    const dispatch = useDispatch();
    const notes = useSelector(({notesApp}) => notesApp.notes);

    const handleOnChange = useDebounce((note) => {
        dispatch(Actions.updateNote(note));
    }, 600);

    function handleOnRemove()
    {
        dispatch(Actions.removeNote(notes.noteDialogId));
    }

    if ( !notes.entities )
    {
        return null;
    }

    return (
        <Dialog
            classes={{
                paper: "w-full m-24 rounded-8"
            }}
            TransitionComponent={Transition}
            onClose={ev => dispatch(Actions.closeNoteDialog())}
            open={Boolean(notes.noteDialogId)}
        >
            <NoteForm
                note={notes.entities[notes.noteDialogId]}
                onChange={handleOnChange}
                onClose={ev => dispatch(Actions.closeNoteDialog())}
                onRemove={handleOnRemove}
            />
        </Dialog>
    );
}

export default NoteDialog;
