import React from 'react';
import {Card, Icon, Typography} from '@material-ui/core';
import {Line} from 'react-chartjs-2';
import {useTheme} from '@material-ui/styles';

function Widget3(props)
{
    const theme = useTheme();

    return (
        <Card className="w-full rounded-8 shadow-none border-1">

            <div className="p-16 pb-0 flex flex-row items-end flex-wrap">

                <div className="pr-16">
                    <Typography className="h3" color="textSecondary">Impressions</Typography>
                    <Typography className="text-56 font-300 leading-none mt-8">
                        {props.data.impressions.value}
                    </Typography>
                </div>

                <div className="py-4 text-16 flex flex-row items-center">
                    <div className="flex flex-row items-center">
                        {props.data.impressions.ofTarget > 0 && (
                            <Icon className="text-green mr-4">trending_up</Icon>
                        )}
                        {props.data.impressions.ofTarget < 0 && (
                            <Icon className="text-red mr-4">trending_down</Icon>
                        )}
                        <Typography>{props.data.impressions.ofTarget}%</Typography>
                    </div>
                    <Typography className="ml-4 whitespace-no-wrap">of target</Typography>
                </div>

            </div>

            <div className="h-96 w-100-p">
                <Line
                    data={{
                        labels  : props.data.labels,
                        datasets: props.data.datasets.map(obj => ({
                            ...obj,
                            borderColor: theme.palette.secondary.main
                        }))
                    }}
                    options={props.data.options}
                />
            </div>
        </Card>
    );
}

export default React.memo(Widget3);
