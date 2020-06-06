import React, {Fragment, useState} from 'react';
import {Icon, IconButton} from '@material-ui/core';
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function NoteFormReminder(props)
{
    const [isOpen, setIsOpen] = useState(false);
    const reminder = new Date(props.reminder);

    return (
        <Fragment>
            <IconButton
                className="w-32 h-32 mx-4 p-0"
                onClick={() => setIsOpen(true)}
            >
                <Icon fontSize="small">notifications_active</Icon>
            </IconButton>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                    className="hidden"
                    open={isOpen}
                    onOpen={() => setIsOpen(true)}
                    onClose={() => setIsOpen(false)}
                    clearable
                    showTodayButton
                    disablePast
                    value={reminder}
                    onChange={props.onChange}
                    DialogProps={{
                        className: "prevent-add-close"
                    }}
                />
            </MuiPickersUtilsProvider>
        </Fragment>
    );
}

export default NoteFormReminder;
