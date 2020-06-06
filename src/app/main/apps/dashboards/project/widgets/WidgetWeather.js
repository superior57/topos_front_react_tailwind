import React from 'react';
import {Icon, Typography, Paper, IconButton} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

function WidgetWeather(props)
{
    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between pr-4 pl-16 pt-4">
                <div className="flex items-center">
                    <Icon className="mr-8" color="action">location_on</Icon>
                    <Typography className="text-16">{props.widget.locations[props.widget.currentLocation].name}</Typography>
                </div>
                <IconButton aria-label="more">
                    <Icon>more_vert</Icon>
                </IconButton>
            </div>
            <div className="flex items-center justify-center p-16 pb-32">
                <Icon className="meteocons text-40" color="action">{props.widget.locations[props.widget.currentLocation].icon}</Icon>
                <Typography className="text-44 ml-16" color="textSecondary">{props.widget.locations[props.widget.currentLocation].temp[props.widget.tempUnit]}</Typography>
                <Typography className="text-48 font-300 ml-8" color="textSecondary">°</Typography>
                <Typography className="text-44 font-300" color="textSecondary">C</Typography>
            </div>
            <Divider/>
            <div className="flex justify-between items-center p-16">
                <div className="flex items-center">
                    <Icon className="meteocons text-14" color="action">windy</Icon>
                    <Typography className="ml-4">{props.widget.locations[props.widget.currentLocation].windSpeed[props.widget.speedUnit]}</Typography>
                    <Typography className="ml-4" color="textSecondary">{props.widget.speedUnit}</Typography>
                </div>

                <div className="flex items-center">
                    <Icon className="meteocons text-14" color="action">compass</Icon>
                    <Typography className="ml-4">{props.widget.locations[props.widget.currentLocation].windDirection}</Typography>
                </div>

                <div className="flex items-center">
                    <Icon className="meteocons text-14" color="action">rainy</Icon>
                    <Typography className="ml-4">{props.widget.locations[props.widget.currentLocation].rainProbability}</Typography>
                </div>
            </div>
            <Divider/>
            <div className="w-full py-16">
                {props.widget.locations[props.widget.currentLocation].next3Days.map(day => (
                    <div className="flex items-center justify-between w-full py-16 px-24" key={day.name}>
                        <Typography className="text-15">{day.name}</Typography>
                        <div className="flex items-center">
                            <Icon className="meteocons text-24 mr-16" color="action">{day.icon}</Icon>
                            <Typography className="text-20">{day.temp[props.widget.tempUnit]}</Typography>
                            <Typography className="text-20" color="textSecondary">&deg;</Typography>
                            <Typography className="text-20" color="textSecondary">{props.widget.tempUnit}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </Paper>
    );
}

export default React.memo(WidgetWeather);
