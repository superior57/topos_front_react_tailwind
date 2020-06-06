import React, {useEffect, useState} from 'react';
import {ClickAwayListener, Icon, IconButton, InputAdornment, ListItemIcon, ListItemText, Menu, MenuItem, TextField, Typography} from '@material-ui/core';
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import {useForm} from '@fuse/hooks';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const StyledBadge = withStyles(theme => ({
    badge: {
        border: `1px solid ${theme.palette.background.paper}`,
        padding: "4px"
    }
}))(Badge);

function BoardListHeader(props)
{
    const dispatch = useDispatch();
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board);

    const [anchorEl, setAnchorEl] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm, setForm} = useForm({
        title: props.list.name
    });

    useEffect(() => {
        if ( !formOpen )
        {
            resetForm();
        }
        if ( anchorEl )
        {
            setAnchorEl(null);
        }

    }, [anchorEl, formOpen, resetForm]);

    useEffect(() => {
        if ( form.title !== props.list.name )
        {
            setForm({title: props.list.name});
        }
    }, [form.title, props.list.name, setForm]);

    function handleMenuClick(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose()
    {
        setAnchorEl(null);
    }

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
        return form.title !== '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( !isFormInvalid() )
        {
            return;
        }
        dispatch(Actions.renameList(board.id, props.list.id, form.title));
        handleCloseForm();
    }

    return (
        <div {...props.handleProps}>
            <div className="flex items-center justify-between h-64 pl-16 pr-8">
                <div className="flex items-center min-w-0">
                    {formOpen ? (
                        <ClickAwayListener onClickAway={() => handleCloseForm()}>
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
                                                    disabled={!isFormInvalid()}
                                                >
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
                            {props.list.name}
                            <StyledBadge className="m-4" badgeContent={props.list.idCards.length} color="secondary" />
                            
                        </Typography>
                    )}

                </div>
                <div className="">
                    <IconButton
                        aria-owns={anchorEl ? 'actions-menu' : null}
                        aria-haspopup="true"
                        onClick={handleMenuClick}
                        variant="outlined"
                        size="small"
                    >
                        <Icon className="text-20">more_vert</Icon>
                    </IconButton>
                    <Menu
                        id="actions-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={() => {
                            dispatch(Actions.removeList(board.id, props.list.id));
                        }}>
                            <ListItemIcon className="min-w-40">
                                <Icon>delete</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Remove List"/>
                        </MenuItem>
                        <MenuItem onClick={() => handleOpenForm()}>
                            <ListItemIcon className="min-w-40">
                                <Icon>edit</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Rename List"/>
                        </MenuItem>
                    </Menu>
                </div>
            </div>

        </div>
    );
}

export default BoardListHeader;
