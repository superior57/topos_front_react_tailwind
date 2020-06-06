import React from 'react';
import {Button, Icon, Typography} from '@material-ui/core';
import {FuseExample, FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */

function ReactChartJs2Doc()
{
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">3rd Party Components</Typography>
                        </div>
                        <Typography variant="h6">React ChartJs 2</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://github.com/jerairrest/react-chartjs-2"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>react-chartjs-2</code> is a React wrapper for Chart.js 2.
                    </Typography>

                    <hr/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Example Usages</Typography>

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/doughnut.js').default}
                        raw={require('!raw-loader!./examples/doughnut.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/dynamic-doughnut.js').default}
                        raw={require('!raw-loader!./examples/dynamic-doughnut.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/pie.js').default}
                        raw={require('!raw-loader!./examples/pie.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/line.js').default}
                        raw={require('!raw-loader!./examples/line.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/bar.js').default}
                        raw={require('!raw-loader!./examples/bar.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/horizontalBar.js').default}
                        raw={require('!raw-loader!./examples/horizontalBar.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/radar.js').default}
                        raw={require('!raw-loader!./examples/radar.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/polar.js').default}
                        raw={require('!raw-loader!./examples/polar.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/bubble.js').default}
                        raw={require('!raw-loader!./examples/bubble.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/scatter.js').default}
                        raw={require('!raw-loader!./examples/scatter.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/mix.js').default}
                        raw={require('!raw-loader!./examples/mix.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/randomizedLine.js').default}
                        raw={require('!raw-loader!./examples/randomizedLine.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/crazyLine.js').default}
                        raw={require('!raw-loader!./examples/crazyLine.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/legend-options.js').default}
                        raw={require('!raw-loader!./examples/legend-options.js')}
                    />

                    <FuseExample
                        className="mb-64"
                        component={require('./examples/legend-handlers.js').default}
                        raw={require('!raw-loader!./examples/legend-handlers.js')}
                    />

                    <Typography className="text-32 mt-32 mb-8" component="h2">Demos</Typography>

                    <ul>
                        <li className="mb-8">
                            <Link to="/apps/dashboards/analytics">Analytics Dashboard</Link>
                        </li>
                    </ul>
                </div>
            }
        />
    );
}

export default ReactChartJs2Doc;
