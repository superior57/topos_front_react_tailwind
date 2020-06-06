import React, {useState} from 'react';
import {useForm} from '@fuse/hooks';
import {ClickAwayListener, Icon, IconButton, InputAdornment, TextField, Typography} from '@material-ui/core';

const CardChecklistName = React.forwardRef(function CardChecklistName(props, ref) {
    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm} = useForm({
        name: props.name
    });

    React.useImperativeHandle(ref, () => {
        return {
            openForm: () => {
                handleOpenForm()
            }
        }
    });

    function handleOpenForm()
    {
        setFormOpen(true);
    }

    function handleCloseForm()
    {
        setFormOpen(false);
    }

    function handleCancelForm()
    {
        resetForm();
        handleCloseForm();
    }

    function isFormInvalid()
    {
        return form.name === '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInvalid() )
        {
            return;
        }
        props.onNameChange(form.name);
        handleCloseForm();
    }

    return formOpen ? (
        <ClickAwayListener onClickAway={() => handleCancelForm()}>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    autoFocus
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton type="submit" disabled={isFormInvalid()}>
                                    <Icon>check</Icon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ClickAwayListener>
    ) : (
        <Typography
            className="text-16 font-600 cursor-pointer"
            onClick={() => handleOpenForm()}
        >
            {form.name}
        </Typography>
    )
});

export default CardChecklistName;
