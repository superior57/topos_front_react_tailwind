import React, {useState} from 'react';
import {Button, Card, Typography} from '@material-ui/core';
import {Line} from 'react-chartjs-2';
import _ from '@lodash';
import {useTheme} from '@material-ui/styles';

function Widget5(props)
{
    const theme = useTheme();
    const [dataset, setDataset] = useState('today');
    const data = _.merge({}, props.data);

    return (
        <Card className="w-full rounded-8 shadow-none border-1">

            <div className="relative p-24 flex flex-row items-center justify-between">

                <div className="flex flex-col">
                    <Typography className="h3 sm:h2">Visitors & Page views</Typography>
                </div>

                <div className="flex flex-row items-center">
                    {Object.keys(data.datasets).map((key) => (
                        <Button
                            key={key}
                            className="py-8 px-12"
                            size="small"
                            onClick={() => setDataset(key)}
                            disabled={key === dataset}
                        >
                            {key}
                        </Button>
                    ))}
                </div>
            </div>

            <Typography className="relative h-200 sm:h-320 sm:pb-16">
                <Line
                    data={{
                        labels  : data.labels,
                        datasets: data.datasets[dataset].map((obj, index) => {
                            const palette = theme.palette[index === 0 ? 'primary' : 'secondary'];
                            return {
                                ...obj,
                                borderColor              : palette.main,
                                backgroundColor          : palette.main,
                                pointBackgroundColor     : palette.dark,
                                pointHoverBackgroundColor: palette.main,
                                pointBorderColor         : palette.contrastText,
                                pointHoverBorderColor    : palette.contrastText
                            }
                        })
                    }}
                    options={data.options}
                />
            </Typography>
        </Card>
    );
}

export default React.memo(Widget5);
