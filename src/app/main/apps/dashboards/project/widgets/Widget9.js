import React, {useState} from 'react';
import {Typography, Select, Paper, Divider} from '@material-ui/core';
import {Line} from 'react-chartjs-2';
import _ from 'lodash';

function Widget9(props)
{
    const [currentRange, setCurrentRange] = useState(props.widget.currentRange);
    const widget = _.merge({}, props.widget);

    function handleChangeRange(ev)
    {
        setCurrentRange(ev.target.value);
    }

    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between px-16 h-64 border-b-1">
                <Typography className="text-16">{widget.title}</Typography>

                <Select
                    native
                    value={currentRange}
                    onChange={handleChangeRange}
                    inputProps={{
                        name: 'currentRange'
                    }}
                    disableUnderline={true}
                >
                    {Object.entries(widget.ranges).map(([key, n]) => {
                        return (
                            <option key={key} value={key}>{n}</option>
                        )
                    })}
                </Select>
            </div>
            {['weeklySpent', 'totalSpent', 'remaining'].map(id => (
                <div className="flex flex-wrap items-center w-full p-8" key={id}>
                    <div className="flex flex-col w-full sm:w-1/2 p-8">
                        <Typography className="text-14" color="textSecondary">
                            {widget[id].title}
                        </Typography>
                        <div className="flex items-center">
                            <Typography className="text-32 mr-4" color="textSecondary">
                                $
                            </Typography>
                            <Typography className="text-32">
                                {widget[id].count[currentRange]}
                            </Typography>
                        </div>
                    </div>
                    <div className="flex w-full sm:w-1/2 p-8">
                        <div className="h-48 w-full">
                            <Line
                                data={{
                                    labels  : widget[id].chart[currentRange].labels,
                                    datasets: widget[id].chart[currentRange].datasets
                                }}
                                options={widget[id].chart.options}
                            />
                        </div>
                    </div>
                </div>
            ))}
            <Divider/>
            <div className="flex flex-col w-full px-16 py-24">
                <Typography className="text-14" color="textSecondary">
                    {widget.totalBudget.title}
                </Typography>
                <div className="flex items-center">
                    <Typography className="text-32 mr-4" color="textSecondary">
                        $
                    </Typography>
                    <Typography className="text-32">
                        {widget.totalBudget.count}
                    </Typography>
                </div>
            </div>
        </Paper>
    );
}

export default React.memo(Widget9);
