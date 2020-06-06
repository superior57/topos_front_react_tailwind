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

function ModernSearchPage()
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
                        <Typography color="textSecondary" className="text-13 ml-16 my-24">{data.length} results</Typography>
                    </FuseAnimate>

                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        {data.map((item) => (
                            <Paper className="p-16 mb-16" elevation={1} key={item.id}>
                                <Typography className={clsx(classes.title, "text-18 cursor-pointer")}>{item.title}</Typography>
                                <Typography className={clsx(classes.url)}>{item.url}</Typography>
                                <Typography className="text-13">{item.excerpt}</Typography>
                            </Paper>
                        ))}
                    </FuseAnimateGroup>
                    <div className="flex justify-center mt-48">
                        <Paper elevation={1}>
                            <IconButton>
                                <Icon>chevron_left</Icon>
                            </IconButton>
                            <Button className="min-w-48 h-48 p-0 px-16">1</Button>
                            <Button className="min-w-48 h-48 p-0 px-16">2</Button>
                            <Button className="min-w-48 h-48 p-0 px-16">3</Button>
                            <Button className="min-w-48 h-48 p-0 px-16">4</Button>
                            <Button className="min-w-48 h-48 p-0 px-16">5</Button>
                            <IconButton>
                                <Icon>chevron_right</Icon>
                            </IconButton>
                        </Paper>
                    </div>
                </div>
            }
        />
    );
}

export default ModernSearchPage;
