import React, {useEffect, useState} from 'react';
import {Button, colors, Icon, IconButton, Input, Paper, Typography} from '@material-ui/core';
import {makeStyles, useTheme, ThemeProvider} from '@material-ui/styles';
import {FusePageSimple, FuseAnimate, FuseAnimateGroup} from '@fuse';
import clsx from 'clsx';
import axios from 'axios';

const useStyles = makeStyles({
    title: {
        color: colors.blue[800]
    },
    url  : {
        color: colors.green[800]
    }
});

function ClassicSearchPage()
{
    const classes = useStyles();
    const theme = useTheme();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/search').then(res => {
            setData(res.data);
        });
    }, []);

    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center p-16 sm:p-24 max-w-md">
                    <ThemeProvider theme={theme}>
                        <Paper className={"flex items-center h-44 w-full"} elevation={1}>
                            <Input
                                placeholder="Search..."
                                className="pl-16"
                                disableUnderline
                                fullWidth
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                            />
                            <Icon color="action" className="mr-16">search</Icon>
                        </Paper>
                    </ThemeProvider>
                </div>
            }
            content={
                <div className="p-16 pt-0 sm:p-24 sm:pt-0 max-w-md">

                    <FuseAnimate delay={200}>
                        <Typography color="textSecondary" className="text-13 mt-12 mb-24">{data.length} results</Typography>
                    </FuseAnimate>

                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        {data.map((item) => (
                            <div className="mb-28" key={item.id}>
                                <Typography className={clsx(classes.title, "text-18 cursor-pointer")}>{item.title}</Typography>
                                <Typography className={clsx(classes.url)}>{item.url}</Typography>
                                <Typography className="text-13">{item.excerpt}</Typography>
                            </div>
                        ))}
                    </FuseAnimateGroup>
                    <div className="flex justify-center mt-32">
                        <div className="flex item-center">
                            <IconButton className="w-32">
                                <Icon>chevron_left</Icon>
                            </IconButton>
                            <Button className="font-normal min-w-32 h-48 p-0 px-8">1</Button>
                            <Button className="font-normal min-w-32 h-48 p-0 px-8">2</Button>
                            <Button className="font-normal min-w-32 h-48 p-0 px-8">3</Button>
                            <Button className="font-normal min-w-32 h-48 p-0 px-8">4</Button>
                            <Button className="font-normal min-w-32 h-48 p-0 px-8">5</Button>
                            <IconButton className="w-32">
                                <Icon>chevron_right</Icon>
                            </IconButton>
                        </div>
                    </div>
                </div>
            }
        />
    );
}

export default ClassicSearchPage;
