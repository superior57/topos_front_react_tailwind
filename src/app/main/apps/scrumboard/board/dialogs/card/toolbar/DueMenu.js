import React, {useState} from 'react';
import {Icon, IconButton, InputAdornment, MenuItem, TextField} from '@material-ui/core';
import ToolbarMenu from './ToolbarMenu';
import moment from 'moment';

function DueMenu(props)
{
    const [anchorEl, setAnchorEl] = useState(null);
    const dueDate = props.due ? moment(props.due).format(moment.HTML5_FMT.DATE) : "";

    function handleMenuOpen(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose()
    {
        setAnchorEl(null);
    }

    return (
        <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
                <Icon>today</Icon>
            </IconButton>
            <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
                {props.due ? (
                    <MenuItem
                        onClick={(ev) => {
                            props.onRemoveDue();
                            handleMenuClose(ev);
                        }}
                    >
                        Remove Due Date
                    </MenuItem>
                ) : (
                    <div className="p-16">
                        <TextField
                            label="Due date"
                            type="date"
                            name="due"
                            value={dueDate}
                            onChange={(ev) => {
                                props.onDueChange(ev);
                                handleMenuClose(ev)
                            }}
                            placeholder=" Choose a due date"
                            className=""
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon color="action">today</Icon>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                )}
            </ToolbarMenu>
        </div>
    );
}

export default DueMenu;
