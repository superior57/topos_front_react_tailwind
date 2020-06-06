import React, {useEffect, useState} from 'react';
import {Button, IconButton, Icon, ClickAwayListener, Card, TextField, InputAdornment} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/styles';
import {useForm} from '@fuse/hooks';
import clsx from 'clsx';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: darken(theme.palette.background.default, theme.palette.type === 'light' ? 0.02 : .4)
    }
}));

function BoardAddList(props)
{
    const dispatch = useDispatch();
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board);

    const classes = useStyles(props);
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
        dispatch(Actions.newList(board.id, form.title));
        handleCloseForm();
    }

    function isFormInvalid()
    {
        return form.title.length === 0;
    }

    return (
        <div>
            <Card
                className={clsx(classes.card, "w-320 mr-24")}
                square={true}
            >
                {formOpen ? (
                    <ClickAwayListener onClickAway={handleCloseForm}>

                        <form className="p-16" onSubmit={handleSubmit}>

                            <TextField
                                className="mb-16"
                                required
                                fullWidth
                                variant="outlined"
                                label="List title"
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
                            root : "normal-case font-600 w-full rounded-none h-64",
                            label: "justify-start"
                        }}
                    >
                        <Icon className="text-32 text-red mr-8">add_circle</Icon>
                        Add a list
                    </Button>
                )}
            </Card>
        </div>
    );
}

export default BoardAddList;
