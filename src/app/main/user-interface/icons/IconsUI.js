import React, {useEffect, useMemo, useState} from 'react';
import {Button, Icon, Input, Paper, Typography} from '@material-ui/core';
import {useTheme, ThemeProvider} from '@material-ui/styles';
import {FusePageSimple, FuseAnimate} from '@fuse';
import axios from 'axios';

function IconsUI()
{
    const theme = useTheme();
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        axios.get('/api/icons').then(res => {
            setData(res.data);
        });
    }, []);

    useEffect(() => {
        setFilteredData(
            searchText.length > 0 ?
                data.filter(item => {
                    if ( item.name.includes(searchText) )
                    {
                        return true;
                    }

                    for ( let tag of item.tags )
                    {
                        if ( tag.includes(searchText) )
                        {
                            return true;
                        }
                    }
                    return false;
                }) : data
        );
    }, [data, searchText]);

    function handleSearch(event)
    {
        setSearchText(event.target.value);
    }

    return (
        <FusePageSimple
            classes={{
                content: "flex"
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-16 sm:p-24">

                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">User Interface</Typography>
                        </div>
                        <FuseAnimate>
                            <Typography variant="h6">Icons</Typography>
                        </FuseAnimate>
                    </div>

                    <div className="flex flex-1 items-center justify-center px-12">

                        <ThemeProvider theme={theme}>

                            <Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>

                                <Icon className="mr-8" color="action">search</Icon>

                                {useMemo(() => (
                                    <Input
                                        placeholder="Search..."
                                        className="flex flex-1"
                                        disableUnderline
                                        fullWidth
                                        value={searchText}
                                        onChange={handleSearch}
                                        inputProps={{
                                            'aria-label': 'Search'
                                        }}
                                    />
                                ), [searchText])}

                            </Paper>
                        </ThemeProvider>
                    </div>

                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material.io/icons/"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="py-24 max-w-2xl mx-auto">
                    {useMemo(() => (
                        filteredData && (
                            filteredData.length > 0 ? (
                                    <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                                        <div className="flex flex-wrap justify-center">
                                            {filteredData.map((item) => (
                                                <div className="w-160 h-128 p-16 flex flex-col items-center justify-center" key={item.id}>
                                                    <Icon className="text-48" color="action">{item.ligatures}</Icon>
                                                    <Typography variant="caption" className="mt-4">{item.ligatures}</Typography>
                                                </div>
                                            ))}
                                        </div>
                                    </FuseAnimate>
                                ) :
                                (
                                    <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                                        <div className="flex flex-auto items-center justify-center w-full h-full">
                                            <Typography color="textSecondary" variant="h5">
                                                No results!
                                            </Typography>
                                        </div>
                                    </FuseAnimate>
                                )
                        )), [filteredData])
                    }
                </div>
            }
        />
    );
}

export default IconsUI;
