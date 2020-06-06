import React, {useState} from 'react';
import {Icon, IconButton, InputAdornment, MenuItem, TextField} from '@material-ui/core';
import ToolbarMenu from './ToolbarMenu';
import moment from 'moment';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function DueMenu(props)
{
    const [anchorEl, setAnchorEl] = useState(null);
    const dueDate = props.due ? moment(props.due).format(moment.HTML5_FMT.DATE) : moment(Date.new).format(moment.HTML5_FMT.DATE);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);

    const handleMenuClose = () => setAnchorEl(null);

    return (
        <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
                <Icon>today</Icon>
            </IconButton>
            <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
                {props.due ? (
                    <MenuItem
                        onClick={() => {
                            props.onRemoveDue();
                            handleMenuClose();
                        }}
                    >
                        Remove Due Date
                    </MenuItem>
                ) : (
                    <div className="p-16">
                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            inputVariant="outlined" 
                            className="w-full sm:w-auto" 
                            format="dd/MM/yyyy" 
                            value={dueDate} 
                            onChange={(ev) => {
                                props.onDueChange(ev);
                                handleMenuClose(ev)
                            }}
                            variant="outlined"
                            KeyboardButtonProps={{'aria-label': 'change date',}}
                            />
                        </MuiPickersUtilsProvider> */}
                        <TextField
                            label="Due date"
                            type="date"
                            name="dueDateTime"
                            value={dueDate}
                            onChange={(ev) => {
                                props.onDueChange(ev);
                                handleMenuClose(ev)
                            }}
                            format="dd/MM/yyyy"
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
