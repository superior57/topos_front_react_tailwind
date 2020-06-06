import React, {useEffect, useState} from 'react';
import {Button, IconButton, Icon, TextField, ClickAwayListener, InputAdornment} from '@material-ui/core';
import * as Actions from '../store/actions';
import {useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';

function BoardAddCard(props)
{
    const dispatch = useDispatch();
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board);

    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm} = useForm({
        title: ''
    });

    useEffect(() => {
        if ( !formOpen )
        {
            resetForm();
        }
    }, [formOpen, resetForm]);

    function handleOpenForm()
    {
        setFormOpen(true);
    }

    function handleCloseForm()
    {
        setFormOpen(false);
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        dispatch(Actions.newCard(board.id, props.listId, form.title))
            .then(() => {
                props.onCardAdded();
            });
        handleCloseForm();
    }

    function isFormInvalid()
    {
        return form.title.length === 0;
    }

    return (
        <div className="w-full border-t-1">
            {formOpen ? (
                <ClickAwayListener onClickAway={handleCloseForm}>
                    <form className="p-16" onSubmit={handleSubmit}>

                        <TextField
                            className="mb-16"
                            required
                            fullWidth
                            variant="outlined"
                            label="Card title"
                            autoFocus
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleCloseForm}>
                                            <Icon className="text-18">close</Icon>
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                        <div className="flex justify-between items-center">
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                                disabled={isFormInvalid()}
                            >
                                Add
                            </Button>

                        </div>
                    </form>
                </ClickAwayListener>
            ) : (
                <Button
                    onClick={handleOpenForm}
                    classes={{
                        root : "normal-case font-600 w-full rounded-none h-48",
                        label: "justify-start"
                    }}
                >
                    <Icon className="text-20 mr-8">add</Icon>
                    Add a card
                </Button>
            )}
        </div>
    );
}

export default BoardAddCard;
