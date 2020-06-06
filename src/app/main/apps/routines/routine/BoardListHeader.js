import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
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

const BoardListHeader = (props) =>
{
    const dispatch = useDispatch();
    const board = useSelector(({routineApp}) => routineApp.routine);

    const [anchorEl, setAnchorEl] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm, setForm} = useForm({
        name: props.list.name
    });

    useEffect(() => {
        if ( !formOpen ) resetForm();
    }, [ formOpen, resetForm]);

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);

    const handleMenuClose = () => setAnchorEl(null);

    const handleOpenForm = () => setFormOpen(true);

    const handleCloseForm = () => setFormOpen(false);

    const isFormInvalid = () => form.name !== '';

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( !isFormInvalid() )
        {
            return;
        }
        dispatch(Actions.renameList(board.id, props.list.id, form.name));
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
                                    name="name"
                                    value={form.name}
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
                        <>
                            <IconButton
                                aria-owns={'actions-menu'}
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
                                    dispatch(Actions.removeList(props.list.id));}}>
                                    <ListItemIcon className="min-w-40">
                                        <Icon>delete</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="Remove List"/>
                                </MenuItem>
                                <MenuItem onClick={() => {handleMenuClose()}}>
                                    <ListItemIcon className="min-w-40">
                                        <Icon>arrow_left</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="Back"/>
                                </MenuItem>
                            </Menu>
                            <div>
                            <Typography
                                className="text-16 font-600 cursor-pointer"
                                variant="subtitle1"
                                style={{fontWeight:"bold"}}
                                onClick={() => handleOpenForm()}
                            >
                                {props.list.name}
                            </Typography>
                            </div>
                        </>
                        )}
                    
                </div>
                <div className="">
                        <div
                        className={clsx("flex items-center px-8 py-4 mr-8 rounded-sm", false === true ? "bg-green text-white" : "bg-blue-dark text-white")}
                        >
                        {/* <Icon className="text-16 mr-4">check_circle</Icon>
                        <span>{0}</span>
                        <span>/</span> */}
                        <span>{props.list.actions.length}</span>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default BoardListHeader;
