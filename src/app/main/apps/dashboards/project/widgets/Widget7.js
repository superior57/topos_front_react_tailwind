import React, {useState} from 'react';
import {Typography, Select, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Icon} from '@material-ui/core';

function Widget7(props)
{
    const [currentRange, setCurrentRange] = useState(props.widget.currentRange);

    function handleChangeRange(ev)
    {
        setCurrentRange(ev.target.value);
    }

    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between px-16 h-64 border-b-1">
                <Typography className="text-16">{props.widget.title}</Typography>

                <Select
                    native
                    value={currentRange}
                    onChange={handleChangeRange}
                    inputProps={{
                        name: 'currentRange'
                    }}
                    disableUnderline={true}
                >
                    {Object.entries(props.widget.ranges).map(([key, n]) => {
                        return (
                            <option key={key} value={key}>{n}</option>
                        )
                    })}
                </Select>
            </div>
            <List>
                {props.widget.schedule[currentRange].map(item =>
                    <ListItem key={item.id}>
                        <ListItemText
                            primary={item.title}
                            secondary={item.time}
                        />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="more">
                                <Icon>more_vert</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            </List>
        </Paper>
    );
}

export default React.memo(Widget7);
