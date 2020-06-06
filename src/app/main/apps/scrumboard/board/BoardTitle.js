import React, {useEffect, useState} from 'react';
import {Paper, ClickAwayListener, Icon, IconButton, InputAdornment, TextField, Typography} from '@material-ui/core';
import * as Actions from '../store/actions';
import {useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';

function BoardListHeader(props)
{
    const dispatch = useDispatch();
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board);

    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm, setForm} = useForm({
        title: board.name
    });
    useEffect(() => {
        if ( !formOpen )
        {
            resetForm();
        }
    }, [formOpen, resetForm]);

    useEffect(() => {
        setForm({title: board.name});
    }, [board.name, setForm]);

    function handleOpenForm()
    {
        setFormOpen(true);
    }

    function handleCloseForm()
    {
        setFormOpen(false);
    }

    function isFormInvalid()
    {
        return form.title === '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInvalid() )
        {
            return;
        }
        dispatch(Actions.renameBoard(board.id, form.title));
        handleCloseForm();
    }

    return (
        <div className="flex items-center min-w-0">
            {formOpen ? (
                <ClickAwayListener onClickAway={() => handleCloseForm()}>
                    <Paper className="p-4">
                        <form className="flex w-full" onSubmit={handleSubmit}>
                            <TextField
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                variant="outlined"
                                margin="none"
                                autoFocus
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type="submit"
                                                disabled={isFormInvalid()}
                                            >
                                                <Icon>check</Icon>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </form>
                    </Paper>
                </ClickAwayListener>
            ) : (
                <div className="flex items-center justify-center">
                    {board.settings.subscribed && (
                        <Icon className="text-16 mr-8">remove_red_eye</Icon>
                    )}
                    <Typography
                        className="text-16 font-600 cursor-pointer"
                        onClick={() => handleOpenForm()}
                        color="inherit"
                    >
                        {board.name}
                    </Typography>
                </div>
            )}
        </div>
    );
}

export default BoardListHeader;
