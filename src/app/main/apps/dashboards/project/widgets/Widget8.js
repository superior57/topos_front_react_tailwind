import React from 'react';
import {Typography, Paper} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';

function Widget8(props)
{
    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between px-16 h-64 border-b-1">
                <Typography className="text-16">{props.widget.title}</Typography>
            </div>
            <div className="h-400 w-full p-32">
                <Doughnut
                    data={{
                        labels  : props.widget.mainChart.labels,
                        datasets: props.widget.mainChart.datasets
                    }}
                    options={props.widget.mainChart.options}
                />
            </div>
        </Paper>
    );
}

export default React.memo(Widget8);
