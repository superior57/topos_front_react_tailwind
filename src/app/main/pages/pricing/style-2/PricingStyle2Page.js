import React from 'react';
import {Button, Card, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate, FuseAnimateGroup} from '@fuse';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    header: {
        height    : 600,
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color     : theme.palette.primary.contrastText
    },
    badge : {
        backgroundColor: theme.palette.error.main,
        color          : theme.palette.getContrastText(theme.palette.error.main)
    }
}));

function PricingStyle2Page()
{
    const classes = useStyles();

    return (
        <div>

            <div className={clsx(classes.header, "flex")}>

                <div className="p-24 w-full max-w-2xl mx-auto">

                    <div className="text-center my-128 mx-24">

                        <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                            <Typography variant="h2" color="inherit" className="font-light">
                                Simple Pricing!
                            </Typography>
                        </FuseAnimate>

                        <FuseAnimate duration={400} delay={600}>
                            <Typography variant="subtitle1" color="inherit" className="opacity-75 mt-16 mx-auto max-w-512">
                                The most advanced customer support tools with a simple and affordable pricing. And you can always try
                                for 30 days, free!
                            </Typography>
                        </FuseAnimate>
                    </div>
                </div>
            </div>

            <div className="-mt-192">

                <div className="w-full max-w-2xl mx-auto">

                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                        className="flex items-center justify-center flex-wrap"
                    >

                        <div className="w-full max-w-320 sm:w-1/3 p-12">
                            <Card className="relative">

                                <div className="pt-48 pb-24 text-center">
                                    <Typography variant="subtitle1" color="inherit" className="text-20 font-medium">
                                        SILVER PACKAGE
                                    </Typography>
                                </div>

                                <CardContent className="text-center p-0">

                                    <div className="flex flex-col">
                                        <div className="flex justify-center mb-8">
                                            <Typography variant="h5" color="textSecondary" className="font-medium">$</Typography>
                                            <Typography className="text-56 ml-4 font-light leading-none">4</Typography>
                                        </div>
                                        <Typography color="textSecondary" className="font-medium text-16">
                                            PER MONTH
                                        </Typography>
                                    </div>

                                    <div className="flex flex-col p-32">
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">10</span>
                                            Projects
                                        </Typography>
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">10</span>
                                            Pages
                                        </Typography>
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">100</span>
                                            Mb Disk Space
                                        </Typography>
                                    </div>
                                </CardContent>

                                <div className="flex justify-center pb-32">
                                    <Button variant="contained" color="secondary" className="w-128">GET STARTED</Button>
                                </div>
                            </Card>
                        </div>

                        <div className="w-full max-w-320 sm:w-1/3 p-12">
                            <Card className="relative" raised>

                                <div className="absolute top-0 inset-x-0 flex justify-center">
                                    <div className={clsx(classes.badge, "py-4 px-8")}>
                                        <Typography variant="caption" color="inherit">BEST VALUE</Typography>
                                    </div>
                                </div>

                                <div className="pt-48 pb-24 text-center">
                                    <Typography variant="subtitle1" color="inherit" className="text-20 font-medium">
                                        GOLD PACKAGE
                                    </Typography>
                                </div>

                                <CardContent className="text-center p-0">

                                    <div className="flex flex-col">
                                        <div className="flex justify-center mb-8">
                                            <Typography variant="h5" color="textSecondary" className="font-medium">$</Typography>
                                            <Typography className="text-56 ml-4 font-light leading-none">299</Typography>
                                        </div>
                                        <Typography color="textSecondary" className="font-medium text-16">
                                            PER MONTH
                                        </Typography>
                                    </div>

                                    <div className="flex flex-col p-32">
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">20</span>
                                            Projects
                                        </Typography>
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">20</span>
                                            Pages
                                        </Typography>
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">200</span>
                                            Mb Disk Space
                                        </Typography>
                                    </div>
                                </CardContent>

                                <div className="flex justify-center pb-32">
                                    <Button variant="contained" color="secondary" className="w-128">GET STARTED</Button>
                                </div>
                            </Card>
                        </div>

                        <div className="w-full max-w-320 sm:w-1/3 p-12">
                            <Card className="relative">

                                <div className="pt-48 pb-24 text-center">
                                    <Typography variant="subtitle1" color="inherit" className="text-20 font-medium">
                                        PLATINUM PACKAGE
                                    </Typography>
                                </div>

                                <CardContent className="text-center p-0">

                                    <div className="flex flex-col">
                                        <div className="flex justify-center mb-8">
                                            <Typography variant="h5" color="textSecondary" className="font-medium">$</Typography>
                                            <Typography className="text-56 ml-4 font-light leading-none">499</Typography>
                                        </div>
                                        <Typography color="textSecondary" className="font-medium text-16">
                                            PER MONTH
                                        </Typography>
                                    </div>

                                    <div className="flex flex-col p-32">
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">40</span>
                                            Projects
                                        </Typography>
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">40</span>
                                            Pages
                                        </Typography>
                                        <Typography variant="subtitle1" className="mb-8">
                                            <span className="font-bold mr-4">500</span>
                                            Mb Disk Space
                                        </Typography>
                                    </div>
                                </CardContent>

                                <div className="flex justify-center pb-32">
                                    <Button variant="contained" color="secondary" className="w-128">GET STARTED</Button>
                                </div>
                            </Card>
                        </div>
                    </FuseAnimateGroup>

                    <div className="flex flex-col items-center py-96 text-center sm:text-left max-w-xl mx-auto">

                        <Typography variant="h4" className="pb-32 font-light">Frequently Asked Questions</Typography>

                        <div className="flex flex-wrap w-full">

                            <div className="w-full sm:w-1/2 p-24">
                                <Typography className="text-20 mb-8">How does free trial work?</Typography>
                                <Typography className="text-16" color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt
                                    accumsan. In dignissim laoreet ipsum eu interdum.
                                </Typography>
                            </div>

                            <div className="w-full sm:w-1/2 p-24">
                                <Typography className="text-20 mb-8">Can I cancel any time?</Typography>
                                <Typography className="text-16" color="textSecondary">
                                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.
                                    Donec maximus ipsum in malesuada hendrerit.
                                </Typography>
                            </div>

                            <div className="w-full sm:w-1/2 p-24">
                                <Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
                                <Typography className="text-16" color="textSecondary">
                                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.
                                    Donec maximus ipsum in malesuada hendrerit.
                                </Typography>
                            </div>

                            <div className="w-full sm:w-1/2 p-24">
                                <Typography className="text-20 mb-8">Can I have a discount?</Typography>
                                <Typography className="text-16" color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt
                                    accumsan. In dignissim laoreet ipsum eu interdum.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingStyle2Page;
