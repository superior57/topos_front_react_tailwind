import React, {useEffect, useRef, useState} from 'react';
import {Icon, Typography, Paper, IconButton} from '@material-ui/core';
import moment from 'moment';

function WidgetNow()
{
    const [time, setTime] = useState(moment());
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current =
            setInterval(update, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    });

    function update()
    {
        setTime(moment());
    }

    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between pr-4 pl-16 pt-4">
                <Typography className="text-16">
                    {time.format('dddd, HH:mm:ss')}
                </Typography>
                <IconButton aria-label="more">
                    <Icon>more_vert</Icon>
                </IconButton>
            </div>
            <div className="text-center px-24 py-32">
                <Typography className="text-24 leading-tight" color="textSecondary">
                    {time.format('MMMM')}
                </Typography>
                <Typography className="text-72 leading-tight" color="textSecondary">
                    {time.format('D')}
                </Typography>
                <Typography className="text-24 leading-tight" color="textSecondary">
                    {time.format('Y')}
                </Typography>
            </div>
        </Paper>
    );
}

export default React.memo(WidgetNow);
